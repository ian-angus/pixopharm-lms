// ============================================================================
// PIXOPHARM LMS — TipTap WYSIWYG Lesson Editor
// Replaces the block-by-block ContentBlockEditor in AdminDashboard.
// Admin writes like Google Docs; ContentBlock[] is generated behind the scenes.
// ============================================================================

import { useEditor, EditorContent, ReactNodeViewRenderer } from "@tiptap/react";
import type { JSONContent, NodeViewProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Node, mergeAttributes } from "@tiptap/core";
import { NodeViewWrapper } from "@tiptap/react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

// ── ContentBlock types (mirrors src/data/types.ts) ──────────────────────────

export type ContentBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "text"; body: string }
  | { type: "callout"; variant: "info" | "warning" | "tip" | "danger"; title: string; body: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "key-term"; term: string; definition: string }
  | { type: "divider" }
  | {
      type: "knowledge-check";
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
      hint?: string;
    };

// ============================================================================
// CUSTOM TIPTAP NODES
// ============================================================================

// ── Callout Node ─────────────────────────────────────────────────────────────

function CalloutNodeView({ node, updateAttributes, deleteNode }: NodeViewProps) {
  const { variant, title, body } = node.attrs as {
    variant: "info" | "warning" | "tip" | "danger";
    title: string;
    body: string;
  };
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ variant, title, body });

  const variantStyles: Record<string, string> = {
    info: "bg-blue-50 border-blue-300 text-blue-900",
    warning: "bg-yellow-50 border-yellow-300 text-yellow-900",
    tip: "bg-green-50 border-green-300 text-green-900",
    danger: "bg-red-50 border-red-300 text-red-900",
  };
  const variantIcons: Record<string, string> = {
    info: "ℹ️", warning: "⚠️", tip: "💡", danger: "🚨",
  };

  return (
    <NodeViewWrapper>
      <div
        className={`my-3 border-l-4 rounded-r-lg p-3 ${variantStyles[variant] ?? variantStyles.info} relative group`}
        contentEditable={false}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm mb-1">
              {variantIcons[variant]} {title}
            </div>
            <p className="text-sm whitespace-pre-wrap">{body}</p>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
            <button
              onClick={() => { setForm({ variant, title, body }); setEditing(true); }}
              className="text-xs px-2 py-0.5 bg-white/80 rounded border hover:bg-white"
            >
              Edit
            </button>
            <button onClick={deleteNode} className="text-xs px-2 py-0.5 bg-white/80 rounded border hover:bg-red-50 text-red-600">
              ✕
            </button>
          </div>
        </div>
      </div>

      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Edit Callout</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Type</Label>
              <Select value={form.variant} onValueChange={(v) => setForm((f) => ({ ...f, variant: v as "info" | "warning" | "tip" | "danger" }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="info">ℹ️ Info</SelectItem>
                  <SelectItem value="tip">💡 Tip</SelectItem>
                  <SelectItem value="warning">⚠️ Warning</SelectItem>
                  <SelectItem value="danger">🚨 Danger</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label>Body</Label>
              <Textarea rows={4} value={form.body} onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={() => { updateAttributes(form); setEditing(false); }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </NodeViewWrapper>
  );
}

const CalloutNode = Node.create({
  name: "callout",
  group: "block",
  atom: true,
  addAttributes() {
    return {
      variant: { default: "info" },
      title: { default: "" },
      body: { default: "" },
    };
  },
  parseHTML() {
    return [{ tag: 'div[data-type="callout"]' }];
  },
  renderHTML({ HTMLAttributes }: { HTMLAttributes: Record<string, unknown> }) {
    return ["div", mergeAttributes(HTMLAttributes as Record<string, string>, { "data-type": "callout" })];
  },
  addNodeView() {
    return ReactNodeViewRenderer(CalloutNodeView);
  },
});

// ── Key Term Node ─────────────────────────────────────────────────────────────

function KeyTermNodeView({ node, updateAttributes, deleteNode }: NodeViewProps) {
  const { term, definition } = node.attrs as { term: string; definition: string };
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ term, definition });

  return (
    <NodeViewWrapper>
      <div
        className="my-2 flex items-start gap-2 p-2.5 bg-purple-50 border border-purple-200 rounded-lg relative group"
        contentEditable={false}
      >
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-purple-900 text-sm">{term}</span>
          <span className="text-purple-700 text-sm"> — </span>
          <span className="text-purple-800 text-sm">{definition}</span>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <button
            onClick={() => { setForm({ term, definition }); setEditing(true); }}
            className="text-xs px-2 py-0.5 bg-white/80 rounded border hover:bg-white"
          >
            Edit
          </button>
          <button onClick={deleteNode} className="text-xs px-2 py-0.5 bg-white/80 rounded border hover:bg-red-50 text-red-600">
            ✕
          </button>
        </div>
      </div>

      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Edit Key Term</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Term</Label>
              <Input value={form.term} onChange={(e) => setForm((f) => ({ ...f, term: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label>Definition</Label>
              <Textarea rows={3} value={form.definition} onChange={(e) => setForm((f) => ({ ...f, definition: e.target.value }))} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={() => { updateAttributes(form); setEditing(false); }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </NodeViewWrapper>
  );
}

const KeyTermNode = Node.create({
  name: "keyTerm",
  group: "block",
  atom: true,
  addAttributes() {
    return {
      term: { default: "" },
      definition: { default: "" },
    };
  },
  parseHTML() {
    return [{ tag: 'div[data-type="key-term"]' }];
  },
  renderHTML({ HTMLAttributes }: { HTMLAttributes: Record<string, unknown> }) {
    return ["div", mergeAttributes(HTMLAttributes as Record<string, string>, { "data-type": "key-term" })];
  },
  addNodeView() {
    return ReactNodeViewRenderer(KeyTermNodeView);
  },
});

// ── Knowledge Check Node ──────────────────────────────────────────────────────

function KnowledgeCheckNodeView({ node, updateAttributes, deleteNode }: NodeViewProps) {
  const attrs = node.attrs as {
    question: string;
    options: string; // JSON string
    correctIndex: number;
    explanation: string;
    hint: string;
  };
  const options: string[] = JSON.parse(attrs.options || "[]");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    question: attrs.question,
    options,
    correctIndex: attrs.correctIndex,
    explanation: attrs.explanation,
    hint: attrs.hint,
  });

  return (
    <NodeViewWrapper>
      <div
        className="my-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg relative group"
        contentEditable={false}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-emerald-700 mb-1">KNOWLEDGE CHECK</p>
            <p className="text-sm font-medium text-emerald-900 mb-2">{attrs.question}</p>
            <div className="space-y-1">
              {options.map((opt, i) => (
                <div key={i} className={`text-xs px-2 py-1 rounded ${i === attrs.correctIndex ? "bg-emerald-200 font-semibold" : "bg-white/60"}`}>
                  {String.fromCharCode(65 + i)}. {opt}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
            <button
              onClick={() => { setForm({ question: attrs.question, options, correctIndex: attrs.correctIndex, explanation: attrs.explanation, hint: attrs.hint }); setEditing(true); }}
              className="text-xs px-2 py-0.5 bg-white/80 rounded border hover:bg-white"
            >
              Edit
            </button>
            <button onClick={deleteNode} className="text-xs px-2 py-0.5 bg-white/80 rounded border hover:bg-red-50 text-red-600">
              ✕
            </button>
          </div>
        </div>
      </div>

      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Edit Knowledge Check</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Question</Label>
              <Textarea rows={2} value={form.question} onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label>Answer Options</Label>
              {form.options.map((opt, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <span className="text-xs font-medium w-5 text-center">{String.fromCharCode(65 + i)}</span>
                  <Input
                    value={opt}
                    onChange={(e) => {
                      const opts = [...form.options];
                      opts[i] = e.target.value;
                      setForm((f) => ({ ...f, options: opts }));
                    }}
                  />
                  {form.options.length > 2 && (
                    <button
                      className="text-xs text-red-500 hover:text-red-700"
                      onClick={() => {
                        const opts = form.options.filter((_, j) => j !== i);
                        setForm((f) => ({ ...f, options: opts, correctIndex: Math.min(f.correctIndex, opts.length - 1) }));
                      }}
                    >✕</button>
                  )}
                </div>
              ))}
              {form.options.length < 6 && (
                <Button size="sm" variant="outline" onClick={() => setForm((f) => ({ ...f, options: [...f.options, ""] }))}>
                  + Add Option
                </Button>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Correct Answer</Label>
              <Select
                value={String(form.correctIndex)}
                onValueChange={(v) => setForm((f) => ({ ...f, correctIndex: parseInt(v) }))}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {form.options.map((opt, i) => (
                    <SelectItem key={i} value={String(i)}>{String.fromCharCode(65 + i)}. {opt || "(empty)"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Explanation</Label>
              <Textarea rows={2} value={form.explanation} onChange={(e) => setForm((f) => ({ ...f, explanation: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label>Hint (optional)</Label>
              <Input value={form.hint} onChange={(e) => setForm((f) => ({ ...f, hint: e.target.value }))} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={() => {
              updateAttributes({
                question: form.question,
                options: JSON.stringify(form.options),
                correctIndex: form.correctIndex,
                explanation: form.explanation,
                hint: form.hint,
              });
              setEditing(false);
            }}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </NodeViewWrapper>
  );
}

const KnowledgeCheckNode = Node.create({
  name: "knowledgeCheck",
  group: "block",
  atom: true,
  addAttributes() {
    return {
      question: { default: "" },
      options: { default: "[]" },
      correctIndex: { default: 0 },
      explanation: { default: "" },
      hint: { default: "" },
    };
  },
  parseHTML() {
    return [{ tag: 'div[data-type="knowledge-check"]' }];
  },
  renderHTML({ HTMLAttributes }: { HTMLAttributes: Record<string, unknown> }) {
    return ["div", mergeAttributes(HTMLAttributes as Record<string, string>, { "data-type": "knowledge-check" })];
  },
  addNodeView() {
    return ReactNodeViewRenderer(KnowledgeCheckNodeView);
  },
});

// ============================================================================
// CONTENT BLOCK ↔ TIPTAP JSON CONVERTERS
// ============================================================================

function blocksToTipTap(blocks: ContentBlock[]): JSONContent {
  return {
    type: "doc",
    content: blocks.length > 0 ? blocks.map(blockToNode) : [{ type: "paragraph" }],
  };
}

function blockToNode(block: ContentBlock): JSONContent {
  switch (block.type) {
    case "heading":
      return {
        type: "heading",
        attrs: { level: block.level },
        content: block.text ? [{ type: "text", text: block.text }] : [],
      };

    case "text":
      return {
        type: "paragraph",
        content: block.body ? [{ type: "text", text: block.body }] : [],
      };

    case "callout":
      return {
        type: "callout",
        attrs: { variant: block.variant, title: block.title, body: block.body },
      };

    case "list":
      return {
        type: block.ordered ? "orderedList" : "bulletList",
        content: block.items.map((item) => ({
          type: "listItem",
          content: [{ type: "paragraph", content: item ? [{ type: "text", text: item }] : [] }],
        })),
      };

    case "table":
      return {
        type: "table",
        content: [
          {
            type: "tableRow",
            content: block.headers.map((h) => ({
              type: "tableHeader",
              content: [{ type: "paragraph", content: h ? [{ type: "text", text: h }] : [] }],
            })),
          },
          ...block.rows.map((row) => ({
            type: "tableRow",
            content: row.map((cell) => ({
              type: "tableCell",
              content: [{ type: "paragraph", content: cell ? [{ type: "text", text: cell }] : [] }],
            })),
          })),
        ],
      };

    case "key-term":
      return {
        type: "keyTerm",
        attrs: { term: block.term, definition: block.definition },
      };

    case "divider":
      return { type: "horizontalRule" };

    case "knowledge-check":
      return {
        type: "knowledgeCheck",
        attrs: {
          question: block.question,
          options: JSON.stringify(block.options),
          correctIndex: block.correctIndex,
          explanation: block.explanation,
          hint: block.hint ?? "",
        },
      };

    default:
      return { type: "paragraph", content: [{ type: "text", text: `[unsupported block type]` }] };
  }
}

function tipTapToBlocks(doc: JSONContent): ContentBlock[] {
  return (doc.content ?? []).flatMap(nodeToBlock);
}

function nodeText(node: JSONContent): string {
  if (node.type === "text") return node.text ?? "";
  return (node.content ?? []).map(nodeText).join("");
}

function nodeToBlock(node: JSONContent): ContentBlock[] {
  switch (node.type) {
    case "heading": {
      const level = (node.attrs?.level ?? 2) as 2 | 3 | 4;
      return [{ type: "heading", level: ([2, 3, 4].includes(level) ? level : 2), text: nodeText(node) }];
    }

    case "paragraph": {
      const text = nodeText(node);
      if (!text.trim()) return [];
      return [{ type: "text", body: text }];
    }

    case "bulletList":
      return [{
        type: "list",
        ordered: false,
        items: (node.content ?? []).map((item) => nodeText(item)).filter(Boolean),
      }];

    case "orderedList":
      return [{
        type: "list",
        ordered: true,
        items: (node.content ?? []).map((item) => nodeText(item)).filter(Boolean),
      }];

    case "callout":
      return [{
        type: "callout",
        variant: node.attrs?.variant ?? "info",
        title: node.attrs?.title ?? "",
        body: node.attrs?.body ?? "",
      }];

    case "table": {
      const rows = node.content ?? [];
      if (rows.length === 0) return [];
      const headerRow = rows[0];
      const headers = (headerRow.content ?? []).map((cell) => nodeText(cell));
      const dataRows = rows.slice(1).map((row) =>
        (row.content ?? []).map((cell) => nodeText(cell))
      );
      return [{ type: "table", headers, rows: dataRows }];
    }

    case "keyTerm":
      return [{
        type: "key-term",
        term: node.attrs?.term ?? "",
        definition: node.attrs?.definition ?? "",
      }];

    case "horizontalRule":
      return [{ type: "divider" }];

    case "knowledgeCheck": {
      let options: string[] = [];
      try { options = JSON.parse(node.attrs?.options ?? "[]"); } catch { options = []; }
      return [{
        type: "knowledge-check",
        question: node.attrs?.question ?? "",
        options,
        correctIndex: node.attrs?.correctIndex ?? 0,
        explanation: node.attrs?.explanation ?? "",
        hint: node.attrs?.hint || undefined,
      }];
    }

    default:
      return [];
  }
}

// ============================================================================
// TOOLBAR BUTTON
// ============================================================================

function ToolbarBtn({
  active,
  onClick,
  title,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`px-2 py-1 rounded text-sm transition-colors ${
        active
          ? "bg-[hsl(174,62%,32%)] text-white"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

// ============================================================================
// MAIN EDITOR COMPONENT
// ============================================================================

interface TipTapLessonEditorProps {
  blocks: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
}

export default function TipTapLessonEditor({ blocks, onChange }: TipTapLessonEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        code: false,
        codeBlock: false,
      }),
      Placeholder.configure({ placeholder: "Start writing lesson content…" }),
      Underline,
      Highlight.configure({ multicolor: false }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
      CalloutNode,
      KeyTermNode,
      KnowledgeCheckNode,
    ],
    content: blocksToTipTap(blocks),
    onUpdate({ editor }) {
      onChange(tipTapToBlocks(editor.getJSON()));
    },
  });

  const insertCallout = useCallback(() => {
    editor?.chain().focus().insertContent({
      type: "callout",
      attrs: { variant: "info", title: "Key Point", body: "Enter callout text here." },
    }).run();
  }, [editor]);

  const insertKeyTerm = useCallback(() => {
    editor?.chain().focus().insertContent({
      type: "keyTerm",
      attrs: { term: "Term", definition: "Definition of this term." },
    }).run();
  }, [editor]);

  const insertKnowledgeCheck = useCallback(() => {
    editor?.chain().focus().insertContent({
      type: "knowledgeCheck",
      attrs: {
        question: "Question text?",
        options: JSON.stringify(["Option A", "Option B", "Option C", "Option D"]),
        correctIndex: 0,
        explanation: "Explanation of the correct answer.",
        hint: "",
      },
    }).run();
  }, [editor]);

  const insertTable = useCallback(() => {
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* ── Toolbar ─────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-0.5 items-center p-2 border-b bg-gray-50">
        {/* Text formatting */}
        <ToolbarBtn
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <strong>B</strong>
        </ToolbarBtn>
        <ToolbarBtn
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <em>I</em>
        </ToolbarBtn>
        <ToolbarBtn
          title="Underline"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <span className="underline">U</span>
        </ToolbarBtn>

        <span className="w-px h-5 bg-gray-300 mx-1" />

        {/* Headings */}
        <ToolbarBtn
          title="Heading 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </ToolbarBtn>
        <ToolbarBtn
          title="Heading 3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          H3
        </ToolbarBtn>
        <ToolbarBtn
          title="Heading 4"
          active={editor.isActive("heading", { level: 4 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        >
          H4
        </ToolbarBtn>

        <span className="w-px h-5 bg-gray-300 mx-1" />

        {/* Lists */}
        <ToolbarBtn
          title="Bullet List"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • List
        </ToolbarBtn>
        <ToolbarBtn
          title="Numbered List"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1. List
        </ToolbarBtn>

        <span className="w-px h-5 bg-gray-300 mx-1" />

        {/* Divider */}
        <ToolbarBtn
          title="Horizontal Divider"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          ——
        </ToolbarBtn>

        {/* Table */}
        <ToolbarBtn title="Insert Table" onClick={insertTable}>
          ⊞ Table
        </ToolbarBtn>

        <span className="w-px h-5 bg-gray-300 mx-1" />

        {/* Special blocks */}
        <ToolbarBtn title="Insert Callout" onClick={insertCallout}>
          ℹ️ Callout
        </ToolbarBtn>
        <ToolbarBtn title="Insert Key Term" onClick={insertKeyTerm}>
          📖 Key Term
        </ToolbarBtn>
        <ToolbarBtn title="Insert Knowledge Check" onClick={insertKnowledgeCheck}>
          ✅ Quiz
        </ToolbarBtn>

        <span className="w-px h-5 bg-gray-300 mx-1" />

        {/* History */}
        <ToolbarBtn
          title="Undo"
          onClick={() => editor.chain().focus().undo().run()}
        >
          ↩
        </ToolbarBtn>
        <ToolbarBtn
          title="Redo"
          onClick={() => editor.chain().focus().redo().run()}
        >
          ↪
        </ToolbarBtn>
      </div>

      {/* ── Editor Area ──────────────────────────────────────────────────── */}
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none min-h-[300px] p-4 focus-within:outline-none
          [&_.ProseMirror]:outline-none
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-gray-400
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none
          [&_.ProseMirror_h2]:text-xl [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h2]:mt-4 [&_.ProseMirror_h2]:mb-2
          [&_.ProseMirror_h3]:text-lg [&_.ProseMirror_h3]:font-semibold [&_.ProseMirror_h3]:mt-3 [&_.ProseMirror_h3]:mb-1.5
          [&_.ProseMirror_h4]:text-base [&_.ProseMirror_h4]:font-semibold [&_.ProseMirror_h4]:mt-2 [&_.ProseMirror_h4]:mb-1
          [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-5
          [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-5
          [&_.ProseMirror_li]:my-0.5
          [&_.ProseMirror_hr]:border-t [&_.ProseMirror_hr]:border-gray-300 [&_.ProseMirror_hr]:my-4
          [&_.ProseMirror_table]:w-full [&_.ProseMirror_table]:border-collapse [&_.ProseMirror_table]:text-sm
          [&_.ProseMirror_th]:border [&_.ProseMirror_th]:border-gray-300 [&_.ProseMirror_th]:bg-gray-100 [&_.ProseMirror_th]:px-2 [&_.ProseMirror_th]:py-1.5 [&_.ProseMirror_th]:font-semibold [&_.ProseMirror_th]:text-left
          [&_.ProseMirror_td]:border [&_.ProseMirror_td]:border-gray-300 [&_.ProseMirror_td]:px-2 [&_.ProseMirror_td]:py-1.5
        "
      />

      {/* ── Status Bar ───────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-3 py-1.5 border-t bg-gray-50 text-xs text-gray-500">
        <span>
          {tipTapToBlocks(editor.getJSON()).length} block(s)
        </span>
        <Badge variant="outline" className="text-xs">
          WYSIWYG Editor
        </Badge>
      </div>
    </div>
  );
}

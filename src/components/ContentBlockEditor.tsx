// ============================================================================
// PIXOPHARM LMS — Content Block Editor
// Structured form-based editor for lesson content blocks (JSONB).
// Each block type has its own form fields — not a WYSIWYG editor.
// ============================================================================

import { useState } from "react";
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
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// ── Content Block Types ─────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "text"; body: string }
  | {
      type: "callout";
      variant: "info" | "warning" | "tip" | "example";
      title: string;
      body: string;
    }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | { type: "key-term"; term: string; definition: string }
  | { type: "divider" };

// Type guard helpers
function isHeadingBlock(
  b: ContentBlock
): b is { type: "heading"; level: 2 | 3 | 4; text: string } {
  return b.type === "heading";
}
function isTextBlock(b: ContentBlock): b is { type: "text"; body: string } {
  return b.type === "text";
}
function isCalloutBlock(
  b: ContentBlock
): b is {
  type: "callout";
  variant: "info" | "warning" | "tip" | "example";
  title: string;
  body: string;
} {
  return b.type === "callout";
}
function isListBlock(
  b: ContentBlock
): b is { type: "list"; ordered?: boolean; items: string[] } {
  return b.type === "list";
}
function isTableBlock(
  b: ContentBlock
): b is {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
} {
  return b.type === "table";
}
function isKeyTermBlock(
  b: ContentBlock
): b is { type: "key-term"; term: string; definition: string } {
  return b.type === "key-term";
}

// ── Block Type Labels & Icons ───────────────────────────────────────────────

interface BlockTypeInfo {
  label: string;
  icon: string;
  description: string;
}

const BLOCK_TYPES: Record<ContentBlock["type"], BlockTypeInfo> = {
  heading: { label: "Heading", icon: "H", description: "Section heading (h2, h3, h4)" },
  text: { label: "Text", icon: "T", description: "Paragraph text" },
  callout: { label: "Callout", icon: "!", description: "Info, warning, tip, or example box" },
  list: { label: "List", icon: "=", description: "Ordered or unordered list" },
  table: { label: "Table", icon: "#", description: "Data table with headers and rows" },
  "key-term": { label: "Key Term", icon: "K", description: "Term with definition" },
  divider: { label: "Divider", icon: "-", description: "Horizontal separator" },
};

// ── Block Preview Helpers ───────────────────────────────────────────────────

function getBlockPreview(block: ContentBlock): string {
  switch (block.type) {
    case "heading":
      return `H${block.level}: ${block.text}`;
    case "text":
      return block.body.length > 80 ? block.body.slice(0, 80) + "..." : block.body;
    case "callout":
      return `[${block.variant}] ${block.title}`;
    case "list":
      return `${block.ordered ? "Ordered" : "Unordered"} list (${block.items.length} items)`;
    case "table":
      return `Table: ${block.headers.length} cols, ${block.rows.length} rows${block.caption ? ` — ${block.caption}` : ""}`;
    case "key-term":
      return `${block.term}: ${block.definition.slice(0, 50)}${block.definition.length > 50 ? "..." : ""}`;
    case "divider":
      return "--- divider ---";
    default:
      return "Unknown block";
  }
}

function getBlockIconBg(type: ContentBlock["type"]): string {
  switch (type) {
    case "heading":
      return "bg-blue-100 text-blue-700";
    case "text":
      return "bg-slate-100 text-slate-700";
    case "callout":
      return "bg-amber-100 text-amber-700";
    case "list":
      return "bg-emerald-100 text-emerald-700";
    case "table":
      return "bg-violet-100 text-violet-700";
    case "key-term":
      return "bg-teal-100 text-teal-700";
    case "divider":
      return "bg-gray-100 text-gray-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
}

// ── Default Block Factories ─────────────────────────────────────────────────

function createDefaultBlock(type: ContentBlock["type"]): ContentBlock {
  switch (type) {
    case "heading":
      return { type: "heading", level: 2, text: "" };
    case "text":
      return { type: "text", body: "" };
    case "callout":
      return { type: "callout", variant: "info", title: "", body: "" };
    case "list":
      return { type: "list", ordered: false, items: [""] };
    case "table":
      return { type: "table", headers: ["Column 1", "Column 2"], rows: [["", ""]], caption: "" };
    case "key-term":
      return { type: "key-term", term: "", definition: "" };
    case "divider":
      return { type: "divider" };
    default:
      return { type: "divider" };
  }
}

// ── SVG Icons ───────────────────────────────────────────────────────────────

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconTrash() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  );
}

function IconEdit() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function IconArrowUp() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function IconArrowDown() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ============================================================================
// BLOCK EDIT FORMS — one per block type
// ============================================================================

interface BlockFormProps<T extends ContentBlock> {
  block: T;
  onChange: (updated: T) => void;
}

function HeadingForm({ block, onChange }: BlockFormProps<Extract<ContentBlock, { type: "heading" }>>) {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label>Heading Level</Label>
        <Select
          value={String(block.level)}
          onValueChange={(v) => onChange({ ...block, level: Number(v) as 2 | 3 | 4 })}
        >
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="2">H2 — Section</SelectItem>
            <SelectItem value="3">H3 — Subsection</SelectItem>
            <SelectItem value="4">H4 — Minor heading</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="heading-text">Heading Text</Label>
        <Input
          id="heading-text"
          value={block.text}
          onChange={(e) => onChange({ ...block, text: e.target.value })}
          placeholder="Enter heading text..."
        />
      </div>
    </div>
  );
}

function TextForm({ block, onChange }: BlockFormProps<Extract<ContentBlock, { type: "text" }>>) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="text-body">Paragraph Text</Label>
      <Textarea
        id="text-body"
        value={block.body}
        onChange={(e) => onChange({ ...block, body: e.target.value })}
        placeholder="Enter paragraph text..."
        rows={5}
      />
    </div>
  );
}

function CalloutForm({ block, onChange }: BlockFormProps<Extract<ContentBlock, { type: "callout" }>>) {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label>Callout Type</Label>
        <Select
          value={block.variant}
          onValueChange={(v) =>
            onChange({ ...block, variant: v as "info" | "warning" | "tip" | "example" })
          }
        >
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="tip">Tip</SelectItem>
            <SelectItem value="example">Example</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="callout-title">Title</Label>
        <Input
          id="callout-title"
          value={block.title}
          onChange={(e) => onChange({ ...block, title: e.target.value })}
          placeholder="Callout title..."
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="callout-body">Body</Label>
        <Textarea
          id="callout-body"
          value={block.body}
          onChange={(e) => onChange({ ...block, body: e.target.value })}
          placeholder="Callout body text..."
          rows={3}
        />
      </div>
    </div>
  );
}

function ListForm({ block, onChange }: BlockFormProps<Extract<ContentBlock, { type: "list" }>>) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Label>List Type</Label>
        <div className="flex items-center gap-2">
          <Badge
            variant={!block.ordered ? "default" : "outline"}
            className={`cursor-pointer ${!block.ordered ? "bg-[hsl(174,62%,32%)]" : ""}`}
            onClick={() => onChange({ ...block, ordered: false })}
          >
            Unordered
          </Badge>
          <Badge
            variant={block.ordered ? "default" : "outline"}
            className={`cursor-pointer ${block.ordered ? "bg-[hsl(174,62%,32%)]" : ""}`}
            onClick={() => onChange({ ...block, ordered: true })}
          >
            Ordered
          </Badge>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Items</Label>
        {block.items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-5 shrink-0 text-right">
              {block.ordered ? `${idx + 1}.` : "\u2022"}
            </span>
            <Input
              value={item}
              onChange={(e) => {
                const items = [...block.items];
                items[idx] = e.target.value;
                onChange({ ...block, items });
              }}
              placeholder={`Item ${idx + 1}`}
            />
            {block.items.length > 1 && (
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-destructive shrink-0"
                onClick={() => {
                  const items = block.items.filter((_, i) => i !== idx);
                  onChange({ ...block, items });
                }}
              >
                <IconTrash />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="gap-1 text-xs"
          onClick={() => onChange({ ...block, items: [...block.items, ""] })}
        >
          <IconPlus /> Add Item
        </Button>
      </div>
    </div>
  );
}

function TableForm({ block, onChange }: BlockFormProps<Extract<ContentBlock, { type: "table" }>>) {
  const addColumn = () => {
    const newHeaders = [...block.headers, `Column ${block.headers.length + 1}`];
    const newRows = block.rows.map((row) => [...row, ""]);
    onChange({ ...block, headers: newHeaders, rows: newRows });
  };

  const removeColumn = (colIdx: number) => {
    if (block.headers.length <= 1) return;
    const newHeaders = block.headers.filter((_, i) => i !== colIdx);
    const newRows = block.rows.map((row) => row.filter((_, i) => i !== colIdx));
    onChange({ ...block, headers: newHeaders, rows: newRows });
  };

  const addRow = () => {
    const newRow = Array(block.headers.length).fill("") as string[];
    onChange({ ...block, rows: [...block.rows, newRow] });
  };

  const removeRow = (rowIdx: number) => {
    if (block.rows.length <= 1) return;
    onChange({ ...block, rows: block.rows.filter((_, i) => i !== rowIdx) });
  };

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="table-caption">Caption (optional)</Label>
        <Input
          id="table-caption"
          value={block.caption ?? ""}
          onChange={(e) => onChange({ ...block, caption: e.target.value })}
          placeholder="Table caption..."
        />
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label>Headers & Rows</Label>
          <div className="flex items-center gap-1">
            <Button type="button" size="sm" variant="outline" className="h-7 text-xs gap-1" onClick={addColumn}>
              <IconPlus /> Column
            </Button>
            <Button type="button" size="sm" variant="outline" className="h-7 text-xs gap-1" onClick={addRow}>
              <IconPlus /> Row
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto border rounded-md">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                {block.headers.map((h, colIdx) => (
                  <th key={colIdx} className="p-1 border-r last:border-r-0">
                    <div className="flex items-center gap-1">
                      <Input
                        value={h}
                        onChange={(e) => {
                          const headers = [...block.headers];
                          headers[colIdx] = e.target.value;
                          onChange({ ...block, headers });
                        }}
                        className="h-7 text-xs font-semibold"
                        placeholder={`Header ${colIdx + 1}`}
                      />
                      {block.headers.length > 1 && (
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 text-destructive shrink-0"
                          onClick={() => removeColumn(colIdx)}
                        >
                          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </Button>
                      )}
                    </div>
                  </th>
                ))}
                <th className="w-8" />
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-t">
                  {row.map((cell, colIdx) => (
                    <td key={colIdx} className="p-1 border-r last:border-r-0">
                      <Input
                        value={cell}
                        onChange={(e) => {
                          const rows = block.rows.map((r) => [...r]);
                          rows[rowIdx][colIdx] = e.target.value;
                          onChange({ ...block, rows });
                        }}
                        className="h-7 text-xs"
                        placeholder="..."
                      />
                    </td>
                  ))}
                  <td className="w-8 p-1">
                    {block.rows.length > 1 && (
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-destructive"
                        onClick={() => removeRow(rowIdx)}
                      >
                        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KeyTermForm({ block, onChange }: BlockFormProps<Extract<ContentBlock, { type: "key-term" }>>) {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="kt-term">Term</Label>
        <Input
          id="kt-term"
          value={block.term}
          onChange={(e) => onChange({ ...block, term: e.target.value })}
          placeholder="Enter term..."
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="kt-definition">Definition</Label>
        <Textarea
          id="kt-definition"
          value={block.definition}
          onChange={(e) => onChange({ ...block, definition: e.target.value })}
          placeholder="Enter definition..."
          rows={3}
        />
      </div>
    </div>
  );
}

// ============================================================================
// BLOCK EDIT DIALOG — renders the appropriate form for the block type
// ============================================================================

interface BlockEditDialogProps {
  block: ContentBlock | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (block: ContentBlock) => void;
  isNew: boolean;
}

function BlockEditDialog({ block, open, onOpenChange, onSave, isNew }: BlockEditDialogProps) {
  const [editingBlock, setEditingBlock] = useState<ContentBlock | null>(block);

  // Sync when block changes from parent
  const blockRef = block;
  if (open && blockRef && editingBlock !== blockRef && isNew) {
    setEditingBlock(blockRef);
  }

  // Reset when dialog opens with a block
  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen && block) {
      setEditingBlock({ ...block } as ContentBlock);
    }
    onOpenChange(newOpen);
  };

  // We need to track the block externally
  // When opening, set internal state
  if (open && block && !editingBlock) {
    setEditingBlock(structuredClone(block));
  }

  function handleSave() {
    if (editingBlock) {
      onSave(editingBlock);
      setEditingBlock(null);
    }
  }

  const typeInfo = editingBlock ? BLOCK_TYPES[editingBlock.type] : null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isNew ? "Add" : "Edit"} {typeInfo?.label ?? "Block"}
          </DialogTitle>
          <DialogDescription>
            {typeInfo?.description ?? "Configure this content block."}
          </DialogDescription>
        </DialogHeader>

        <div className="py-2">
          {editingBlock && editingBlock.type === "heading" && isHeadingBlock(editingBlock) && (
            <HeadingForm block={editingBlock} onChange={(b) => setEditingBlock(b)} />
          )}
          {editingBlock && editingBlock.type === "text" && isTextBlock(editingBlock) && (
            <TextForm block={editingBlock} onChange={(b) => setEditingBlock(b)} />
          )}
          {editingBlock && editingBlock.type === "callout" && isCalloutBlock(editingBlock) && (
            <CalloutForm block={editingBlock} onChange={(b) => setEditingBlock(b)} />
          )}
          {editingBlock && editingBlock.type === "list" && isListBlock(editingBlock) && (
            <ListForm block={editingBlock} onChange={(b) => setEditingBlock(b)} />
          )}
          {editingBlock && editingBlock.type === "table" && isTableBlock(editingBlock) && (
            <TableForm block={editingBlock} onChange={(b) => setEditingBlock(b)} />
          )}
          {editingBlock && editingBlock.type === "key-term" && isKeyTermBlock(editingBlock) && (
            <KeyTermForm block={editingBlock} onChange={(b) => setEditingBlock(b)} />
          )}
          {editingBlock && editingBlock.type === "divider" && (
            <p className="text-sm text-muted-foreground italic">
              This block is a horizontal divider. No additional configuration needed.
            </p>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
            {isNew ? "Add Block" : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ============================================================================
// MAIN EXPORT: ContentBlockEditor
// ============================================================================

interface ContentBlockEditorProps {
  blocks: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
}

export default function ContentBlockEditor({ blocks, onChange }: ContentBlockEditorProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingBlock, setEditingBlock] = useState<ContentBlock | null>(null);
  const [isNewBlock, setIsNewBlock] = useState(false);

  // Open edit dialog for an existing block
  function handleEditBlock(index: number) {
    setEditingIndex(index);
    setEditingBlock(structuredClone(blocks[index]));
    setIsNewBlock(false);
    setEditDialogOpen(true);
  }

  // Open edit dialog for a new block
  function handleAddBlock(type: ContentBlock["type"]) {
    const newBlock = createDefaultBlock(type);
    if (type === "divider") {
      // Dividers need no editing, just add directly
      onChange([...blocks, newBlock]);
      return;
    }
    setEditingIndex(null);
    setEditingBlock(newBlock);
    setIsNewBlock(true);
    setEditDialogOpen(true);
  }

  // Save block from dialog
  function handleSaveBlock(block: ContentBlock) {
    if (isNewBlock) {
      onChange([...blocks, block]);
    } else if (editingIndex !== null) {
      const updated = [...blocks];
      updated[editingIndex] = block;
      onChange(updated);
    }
    setEditDialogOpen(false);
    setEditingBlock(null);
    setEditingIndex(null);
  }

  // Delete a block
  function handleDeleteBlock(index: number) {
    onChange(blocks.filter((_, i) => i !== index));
  }

  // Move block up
  function handleMoveUp(index: number) {
    if (index <= 0) return;
    const updated = [...blocks];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    onChange(updated);
  }

  // Move block down
  function handleMoveDown(index: number) {
    if (index >= blocks.length - 1) return;
    const updated = [...blocks];
    [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    onChange(updated);
  }

  const blockTypes: ContentBlock["type"][] = [
    "heading",
    "text",
    "callout",
    "list",
    "table",
    "key-term",
    "divider",
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-semibold">Content Blocks</Label>
        <Badge variant="secondary" className="text-xs">
          {blocks.length} block{blocks.length !== 1 ? "s" : ""}
        </Badge>
      </div>

      {/* Block List */}
      {blocks.length === 0 ? (
        <div className="border border-dashed rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            No content blocks yet. Add blocks to build your lesson content.
          </p>
        </div>
      ) : (
        <div className="space-y-1 border rounded-lg p-2 bg-muted/20 max-h-[300px] overflow-y-auto">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white border border-transparent hover:border-border transition-colors group cursor-pointer"
              onClick={() => {
                if (block.type !== "divider") handleEditBlock(index);
              }}
            >
              {/* Block type icon */}
              <div
                className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${getBlockIconBg(block.type)}`}
              >
                {BLOCK_TYPES[block.type]?.icon ?? "?"}
              </div>

              {/* Preview */}
              <span className="flex-1 text-sm text-foreground truncate min-w-0">
                {getBlockPreview(block)}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0"
                  disabled={index === 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoveUp(index);
                  }}
                  title="Move up"
                >
                  <IconArrowUp />
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0"
                  disabled={index === blocks.length - 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoveDown(index);
                  }}
                  title="Move down"
                >
                  <IconArrowDown />
                </Button>
                {block.type !== "divider" && (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditBlock(index);
                    }}
                    title="Edit block"
                  >
                    <IconEdit />
                  </Button>
                )}
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteBlock(index);
                  }}
                  title="Delete block"
                >
                  <IconTrash />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Block Button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button" size="sm" variant="outline" className="gap-1.5 text-xs w-full">
            <IconPlus /> Add Content Block
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {blockTypes.map((type) => {
            const info = BLOCK_TYPES[type];
            return (
              <DropdownMenuItem
                key={type}
                onClick={() => handleAddBlock(type)}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${getBlockIconBg(type)}`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{info.label}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Block Edit Dialog */}
      <BlockEditDialog
        block={editingBlock}
        open={editDialogOpen}
        onOpenChange={(open) => {
          setEditDialogOpen(open);
          if (!open) {
            setEditingBlock(null);
            setEditingIndex(null);
          }
        }}
        onSave={handleSaveBlock}
        isNew={isNewBlock}
      />
    </div>
  );
}

// ── Export type and helper for use in AdminDashboard ─────────────────────────
export type { ContentBlock as ContentBlockType };
export { getBlockPreview, BLOCK_TYPES, getBlockIconBg };

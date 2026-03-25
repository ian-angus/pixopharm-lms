import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => Promise<{ error: { message: string } | null }>;
  onSignUp: (email: string, password: string, fullName: string) => Promise<{ data: unknown; error: { message: string } | null }>;
}

export default function AuthModal({ open, onClose, onSignIn, onSignUp }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const reset = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setError(null);
    setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (mode === "signin") {
      const { error } = await onSignIn(email, password);
      if (error) setError(error.message);
      else onClose();
    } else {
      const { error } = await onSignUp(email, password, fullName);
      if (error) setError(error.message);
      else {
        setMessage("Check your email for a confirmation link!");
        setMode("signin");
      }
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { onClose(); reset(); } }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[hsl(213,50%,16%)]">
            {mode === "signin" ? "Sign In to PIXOPHARM" : "Create Your Account"}
          </DialogTitle>
        </DialogHeader>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-2">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg px-4 py-2">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <Label htmlFor="auth-name" className="text-sm font-medium">Full Name</Label>
              <Input
                id="auth-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g., Keisha Williams"
                required
                className="mt-1"
              />
            </div>
          )}
          <div>
            <Label htmlFor="auth-email" className="text-sm font-medium">Email</Label>
            <Input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="auth-password" className="text-sm font-medium">Password</Label>
            <Input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
              required
              minLength={6}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              className="mt-1"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] h-11"
          >
            {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <div className="text-center text-sm text-slate-500">
          {mode === "signin" ? (
            <span>
              Don't have an account?{" "}
              <button
                onClick={() => { setMode("signup"); setError(null); setMessage(null); }}
                className="text-[hsl(174,62%,32%)] font-medium hover:underline"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => { setMode("signin"); setError(null); setMessage(null); }}
                className="text-[hsl(174,62%,32%)] font-medium hover:underline"
              >
                Sign in
              </button>
            </span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

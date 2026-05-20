import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Mode = "signin" | "signup" | "forgot" | "reset";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => Promise<{ error: { message: string } | null }>;
  onSignUp: (email: string, password: string, fullName: string) => Promise<{ data: unknown; error: { message: string } | null }>;
  onForgotPassword: (email: string) => Promise<{ error: { message: string } | null }>;
  onUpdatePassword: (newPassword: string) => Promise<{ error: { message: string } | null }>;
  initialMode?: Mode;
}

export default function AuthModal({
  open,
  onClose,
  onSignIn,
  onSignUp,
  onForgotPassword,
  onUpdatePassword,
  initialMode = "signin",
}: AuthModalProps) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open) setMode(initialMode);
  }, [open, initialMode]);

  const reset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    setError(null);
    setMessage(null);
  };

  const switchMode = (next: Mode) => {
    setMode(next);
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
    } else if (mode === "signup") {
      const { error } = await onSignUp(email, password, fullName);
      if (error) setError(error.message);
      else {
        setMessage("Check your email for a confirmation link!");
        setMode("signin");
      }
    } else if (mode === "forgot") {
      const { error } = await onForgotPassword(email);
      if (error) setError(error.message);
      else setMessage("If an account exists for that email, a reset link is on its way. Check your inbox.");
    } else if (mode === "reset") {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }
      const { error } = await onUpdatePassword(password);
      if (error) setError(error.message);
      else {
        setMessage("Password updated. You can now sign in with your new password.");
        setMode("signin");
        setPassword("");
        setConfirmPassword("");
      }
    }
    setLoading(false);
  };

  const titles: Record<Mode, string> = {
    signin: "Sign In to PIXOPHARM",
    signup: "Create Your Account",
    forgot: "Reset Your Password",
    reset: "Set a New Password",
  };

  const submitLabels: Record<Mode, string> = {
    signin: "Sign In",
    signup: "Create Account",
    forgot: "Send Reset Link",
    reset: "Update Password",
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { onClose(); reset(); } }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[hsl(213,50%,16%)]">
            {titles[mode]}
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

          {mode !== "reset" && (
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
          )}

          {(mode === "signin" || mode === "signup" || mode === "reset") && (
            <div>
              <div className="flex items-baseline justify-between">
                <Label htmlFor="auth-password" className="text-sm font-medium">
                  {mode === "reset" ? "New Password" : "Password"}
                </Label>
                {mode === "signin" && (
                  <button
                    type="button"
                    onClick={() => switchMode("forgot")}
                    className="text-xs text-[hsl(174,62%,32%)] hover:underline"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
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
          )}

          {mode === "reset" && (
            <div>
              <Label htmlFor="auth-confirm" className="text-sm font-medium">Confirm New Password</Label>
              <Input
                id="auth-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                required
                minLength={6}
                autoComplete="new-password"
                className="mt-1"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] h-11"
          >
            {loading ? "Please wait..." : submitLabels[mode]}
          </Button>
        </form>

        <div className="text-center text-sm text-slate-500">
          {mode === "signin" && (
            <span>
              Don't have an account?{" "}
              <button onClick={() => switchMode("signup")} className="text-[hsl(174,62%,32%)] font-medium hover:underline">
                Sign up
              </button>
            </span>
          )}
          {mode === "signup" && (
            <span>
              Already have an account?{" "}
              <button onClick={() => switchMode("signin")} className="text-[hsl(174,62%,32%)] font-medium hover:underline">
                Sign in
              </button>
            </span>
          )}
          {mode === "forgot" && (
            <span>
              Remembered it?{" "}
              <button onClick={() => switchMode("signin")} className="text-[hsl(174,62%,32%)] font-medium hover:underline">
                Back to sign in
              </button>
            </span>
          )}
          {mode === "reset" && (
            <span>
              <button onClick={() => switchMode("signin")} className="text-[hsl(174,62%,32%)] font-medium hover:underline">
                Cancel
              </button>
            </span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

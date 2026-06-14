import { useCallback, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { getMyProgramAccess, type ProgramAccess } from "@/lib/admin-api";

export interface UseProgramAccessReturn {
  /** True if the user may study: an admin, or holds active/comp program access. */
  hasAccess: boolean;
  loading: boolean;
  access: ProgramAccess | null;
  /** Re-check access (e.g. after returning from checkout). */
  refresh: () => void;
}

/**
 * Whether the current user can access the diploma content. Admins always pass;
 * everyone else needs an `active` or `comp` program_access row. Polls a few
 * times when `expectGrant` is set (returning from a successful checkout) so the
 * just-fired webhook has a moment to land.
 */
export function useProgramAccess(
  user: User | null,
  isAdmin: boolean,
  expectGrant = false,
  program = "diploma",
): UseProgramAccessReturn {
  const [access, setAccess] = useState<ProgramAccess | null>(null);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  const refresh = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    if (!user) {
      setAccess(null);
      setLoading(false);
      return;
    }
    if (isAdmin) {
      setAccess(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    let attempts = 0;
    setLoading(true);

    const check = async () => {
      const row = await getMyProgramAccess(program);
      if (cancelled) return;
      const active = row && (row.status === "active" || row.status === "comp");
      if (active || !expectGrant || attempts >= 5) {
        setAccess(row);
        setLoading(false);
        return;
      }
      // expecting a grant from a just-completed checkout — retry briefly
      attempts += 1;
      setTimeout(check, 1500);
    };
    check();

    return () => { cancelled = true; };
  }, [user, isAdmin, expectGrant, program, tick]);

  const hasAccess = isAdmin || (!!access && (access.status === "active" || access.status === "comp"));
  return { hasAccess, loading, access, refresh };
}

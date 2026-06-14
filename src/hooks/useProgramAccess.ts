import { useCallback, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { getMyProgramAccess, fetchProgram, type ProgramAccess } from "@/lib/admin-api";

export interface UseProgramAccessReturn {
  /** True if the user may study: an admin, the program isn't on sale yet, or they hold active/comp access. */
  hasAccess: boolean;
  loading: boolean;
  access: ProgramAccess | null;
  /** True once the program is configured for sale (has a Lemon Squeezy variant). */
  onSale: boolean;
  /** Re-check access (e.g. after returning from checkout). */
  refresh: () => void;
}

/**
 * Whether the current user can access the diploma content.
 *
 * SAFETY: the paywall is INERT until the program is actually on sale (i.e. has a
 * Lemon Squeezy variant configured). Before launch, everyone studies free — exactly
 * the current behaviour — so merging the gate can never lock students out. The gate
 * activates automatically the moment the store is configured.
 *
 * Admins always pass. When `expectGrant` is set (returning from checkout) we poll a
 * few times so the just-fired webhook has a moment to land.
 */
export function useProgramAccess(
  user: User | null,
  isAdmin: boolean,
  expectGrant = false,
  program = "diploma",
): UseProgramAccessReturn {
  const [access, setAccess] = useState<ProgramAccess | null>(null);
  const [onSale, setOnSale] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  const refresh = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    (async () => {
      // Is the program actually on sale yet? If not, the paywall stays off.
      const prog = await fetchProgram(program).catch(() => null);
      if (cancelled) return;
      const sale = !!(prog && prog.active && prog.ls_variant_id && prog.ls_store_id);
      setOnSale(sale);

      if (!user || isAdmin || !sale) {
        setAccess(null);
        setLoading(false);
        return;
      }

      let attempts = 0;
      const check = async () => {
        const row = await getMyProgramAccess(program);
        if (cancelled) return;
        const active = row && (row.status === "active" || row.status === "comp");
        if (active || !expectGrant || attempts >= 5) {
          setAccess(row);
          setLoading(false);
          return;
        }
        attempts += 1; // expecting a grant from a just-completed checkout — retry briefly
        setTimeout(check, 1500);
      };
      check();
    })();

    return () => { cancelled = true; };
  }, [user, isAdmin, expectGrant, program, tick]);

  const hasAccess =
    isAdmin || !onSale || (!!access && (access.status === "active" || access.status === "comp"));
  return { hasAccess, loading, access, onSale, refresh };
}

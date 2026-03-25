import { useState, useEffect, useRef } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

// ── Types ────────────────────────────────────────────────────────────────────

export interface AdminProfile {
  id: string;
  full_name: string;
  role: string;
  island: string | null;
}

export interface UseAdminReturn {
  isAdmin: boolean;
  loading: boolean;
  profile: AdminProfile | null;
}

// ── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Checks whether the given Supabase user has an admin role.
 * Fetches the user's profile from the `profiles` table and caches the result
 * so subsequent renders (with the same user.id) skip the network call.
 */
export function useAdmin(user: User | null): UseAdminReturn {
  const [profile, setProfile] = useState<AdminProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Cache by user ID so we never re-fetch for the same user within a session.
  const cachedUserId = useRef<string | null>(null);

  useEffect(() => {
    // No user → reset immediately
    if (!user) {
      setProfile(null);
      setLoading(false);
      cachedUserId.current = null;
      return;
    }

    // Already fetched for this user
    if (cachedUserId.current === user.id && profile !== null) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("profiles")
        .select("id, full_name, role, island")
        .eq("id", user.id)
        .single();

      if (cancelled) return;

      if (error) {
        console.error("useAdmin: failed to fetch profile:", error);
        setProfile(null);
        setLoading(false);
        return;
      }

      const adminProfile: AdminProfile = {
        id: data.id,
        full_name: data.full_name ?? "",
        role: data.role ?? "student",
        island: data.island ?? null,
      };

      cachedUserId.current = user.id;
      setProfile(adminProfile);
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
    // We intentionally only depend on user?.id — the profile ref handles caching.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return {
    isAdmin: profile?.role === "admin",
    loading,
    profile,
  };
}

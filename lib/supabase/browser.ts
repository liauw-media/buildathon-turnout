"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | undefined;

/**
 * Browser-side Supabase client (singleton per tab).
 * Returns undefined if Supabase env vars are not configured.
 */
export function getSupabaseBrowser(): SupabaseClient | undefined {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return undefined;
  cached = createBrowserClient(url, key);
  return cached;
}

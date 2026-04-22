/**
 * Env-var helpers. The app gracefully falls back to JSON-file storage when
 * Supabase env vars are not set — useful for local development or initial setup.
 */

export function getSupabaseUrl(): string | undefined {
  return process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || undefined;
}

export function getSupabaseAnonKey(): string | undefined {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || undefined;
}

export function getSupabaseServiceRoleKey(): string | undefined {
  return process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || undefined;
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_URL?.trim() ||
    "http://localhost:3000"
  );
}

/** Client-side availability (uses only public env vars). */
export function hasSupabasePublic(): boolean {
  return Boolean(getSupabaseUrl() && getSupabaseAnonKey());
}

/** Full server-side availability (needed for server-actions that write data). */
export function hasSupabaseFull(): boolean {
  return (
    Boolean(getSupabaseUrl() && getSupabaseAnonKey()) &&
    Boolean(getSupabaseServiceRoleKey())
  );
}

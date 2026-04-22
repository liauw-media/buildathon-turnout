import { cookies } from "next/headers";
import { createServerClient, createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  getSupabaseUrl,
  getSupabaseAnonKey,
  getSupabaseServiceRoleKey,
  hasSupabasePublic,
  hasSupabaseFull,
} from "./env";

/**
 * Cookie-aware server client used in server components, route handlers,
 * and server actions. Returns undefined if Supabase env is not configured.
 */
export async function getSupabaseServer(): Promise<SupabaseClient | undefined> {
  if (!hasSupabasePublic()) return undefined;

  const cookieStore = await cookies();

  return createServerClient(getSupabaseUrl()!, getSupabaseAnonKey()!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Called from a server component where writes aren't allowed — safe to ignore;
          // middleware or server actions will refresh the session.
        }
      },
    },
  });
}

/**
 * Service-role admin client. Bypasses RLS. Use ONLY from server actions / route handlers,
 * NEVER from client components or unauthenticated endpoints.
 */
export function getSupabaseAdmin(): SupabaseClient | undefined {
  if (!hasSupabaseFull()) return undefined;
  // Uses the standard (non-SSR) browser client shape without cookie binding;
  // it's the simplest way to get a service-role client on the server.
  return createBrowserClient(getSupabaseUrl()!, getSupabaseServiceRoleKey()!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

import { handlers } from "@/lib/auth";

// Configuration requise pour NextAuth.js v5 avec Next.js 14
// Cette route doit utiliser le runtime Node.js (pas Edge)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const { GET, POST } = handlers;

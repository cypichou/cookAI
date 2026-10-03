import Link from "next/link";
import { auth, signIn, signOut } from "@/lib/auth";

// Cette page doit être dynamique (utilise auth() et base de données)
export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary-600">
          Bienvenue sur Cook
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Statut de connexion</h2>
          {session ? (
            <div className="flex items-center gap-4">
              <p className="text-green-600">
                Connecté en tant que <strong>{session.user?.name}</strong> (
                {session.user?.email})
              </p>
              <Link
                href="/api/auth/signout"
                className="ml-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition inline-block"
              >
                Déconnexion
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <p className="text-gray-500">Non connecté</p>
              <Link
                href="/api/auth/signin/google"
                className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition inline-block"
              >
                Se connecter avec Google
              </Link>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Accéder au tableau de bord</h3>
            <p className="text-gray-600 mb-4">
              Page protégée nécessitant une authentification
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition"
            >
              Aller au Dashboard
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">
              Consulte la documentation pour en savoir plus sur la stack utilisée
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="text-primary-500 hover:underline"
                >
                  Next.js Docs
                </a>
              </li>
              <li>
                <a
                  href="https://www.prisma.io/docs"
                  target="_blank"
                  className="text-primary-500 hover:underline"
                >
                  Prisma Docs
                </a>
              </li>
              <li>
                <a
                  href="https://authjs.dev"
                  target="_blank"
                  className="text-primary-500 hover:underline"
                >
                  Auth.js (NextAuth) Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

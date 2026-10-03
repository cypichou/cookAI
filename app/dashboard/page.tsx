import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

// Cette page doit être dynamique (pas de cache statique)
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  // Exemple de requête à la base de données
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Informations de la session</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Nom</p>
              <p className="font-medium">{session.user?.name || "Non spécifié"}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{session.user?.email}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">ID Utilisateur</p>
              <p className="font-medium font-mono">{session.user?.id}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Utilisateurs (10 derniers)</h2>
          {users.length === 0 ? (
            <p className="text-gray-500">Aucun utilisateur trouvé.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Créé le
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.name || "Non spécifié"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString("fr-FR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

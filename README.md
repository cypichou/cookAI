# Cook - Application Next.js Full-Stack

Une application web complète avec **Next.js 14**, **Prisma**, **NextAuth.js (Auth.js v5)** et **PostgreSQL**.

## 🚀 Démarrage rapide

### 1. Installer les dépendances
```bash
cd cook
npm install
```

### 2. Configurer l'environnement
Copiez le fichier `.env.example` en `.env` et remplissez les variables :
```bash
cp .env.example .env
```

#### Variables requises :
- **DATABASE_URL** : URL de votre base de données PostgreSQL
  - Pour développement local : `postgresql://user:password@localhost:5432/cook?schema=public`
  - Pour Vercel : utilisez [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- **GOOGLE_CLIENT_ID** & **GOOGLE_CLIENT_SECRET** : Créez une application sur [Google Cloud Console](https://console.cloud.google.com/)
- **NEXTAUTH_SECRET** : Générez un secret avec `openssl rand -base64 32`

### 3. Initialiser la base de données
```bash
# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la base de données (pour dev)
npm run db:push

# OU créer une migration (pour production)
npm run db:migrate
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```

Votre application sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
cook/
├── app/                          # Dossier principal Next.js (App Router)
│   ├── api/auth/[...nextauth]/   # Routes pour NextAuth.js
│   ├── dashboard/                # Page protégée (nécessite authentification)
│   ├── globals.css               # Styles globaux Tailwind
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Page d'accueil
├── lib/                          # Logique métier
│   ├── auth.ts                   # Configuration NextAuth.js
│   └── db.ts                     # Client Prisma
├── prisma/                       # Configuration Prisma
│   └── schema.prisma             # Schéma de la base de données
├── components/                   # Composants React (à créer)
├── public/                       # Assets statiques (à créer)
├── .env.example                  # Exemple de variables d'environnement
├── next.config.js                # Configuration Next.js
├── tailwind.config.ts            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
└── package.json                  # Dépendances et scripts
```

---

## ✨ Fonctionnalités incluses

- ✅ **Authentification** avec Google et Email (NextAuth.js v5)
- ✅ **Base de données PostgreSQL** avec Prisma ORM
- ✅ **Pages protégées** (ex: `/dashboard`)
- ✅ **TypeScript** pour un typage complet
- ✅ **Tailwind CSS** pour le styling
- ✅ **Ready pour Vercel** (déploiement simplifié)

---

## 🛠 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance le serveur de production |
| `npm run lint` | Exécute ESLint |
| `npm run db:generate` | Génère le client Prisma |
| `npm run db:push` | Pousse le schéma vers la DB (dev) |
| `npm run db:migrate` | Crée une migration |
| `npm run db:studio` | Ouvre Prisma Studio (interface graphique) |

---

## 🌐 Déploiement sur Vercel

1. Poussez votre code sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-user/cook.git
   git push -u origin main
   ```

2. Importez le projet sur [Vercel](https://vercel.com) :
   - Sélectionnez votre dépôt GitHub
   - Vercel détectera automatiquement Next.js

3. Configurez Vercel Postgres :
   - Allez dans l'onglet **Storage** de votre projet Vercel
   - Créez une base de données PostgreSQL
   - Copiez l'URL dans **DATABASE_URL**

4. Ajoutez les variables d'environnement dans **Settings → Environment Variables** :
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `DATABASE_URL` (de Vercel Postgres)

5. Déployez ! Votre application sera en ligne en quelques minutes.

---

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js (Auth.js) Documentation](https://authjs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🤝 Contribuer

N'hésitez pas à ouvrir des issues ou pull requests pour améliorer ce projet !

---

## 📜 Licence

MIT

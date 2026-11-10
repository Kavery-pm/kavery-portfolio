# Kavery Portfolio

React + TypeScript + Vite. No API keys, database, account system, or paid services required.

## Run on your Mac

Install Node.js 22.13+ (Node 24 LTS recommended), unzip this folder, open it in VS Code, then run:

```sh
npm ci
npm run dev
```

Open the localhost address printed in the terminal.

## Edit your content

Open `src/portfolio.ts`. This is the single file for your introduction, email, social links, CV path, and projects. Copy an existing project object to add one, give it a unique `id`, and fill in its fields. Leave `liveUrl` or `codeUrl` empty if unavailable. Array order is display order. `visual` accepts `finance`, `board`, `countries`, `food`, or `minimal`. The latter uses a generic code preview. Existing Digital Twin uses an illustrative career interface sample. Previews are samples; live links open the actual apps.

Replace `public/CV_Kavery.pdf` for a new CV, keeping that filename. Replace `public/portrait.jpg` for your photo. Layout, employment history and about text are in `src/App.tsx`. Colors and spacing are in `src/styles.css`.

The hosted prototype's website editor is removed. This version saves no content to a database. Edit code and push to publish changes.

## Upload to GitHub

Create an empty repository named `kavery-portfolio` on your GitHub account. Do not initialize a README there. In this folder's terminal:

```sh
git init -b main
git add .
git commit -m "Add portfolio"
git remote add origin https://github.com/Kavery-pm/kavery-portfolio.git
git push -u origin main
```

If your repository has a different name, use its exact HTTPS URL instead. Sign in to GitHub when prompted. Never commit node_modules, dist or secrets.

## Deploy on Vercel

1. Sign in to Vercel with your GitHub account.
2. Add New → Project → import `kavery-portfolio`.
3. If it is missing, configure Vercel's GitHub app access to include this repository.
4. Framework: Vite. Root: `./`. Build: `npm run build`. Output: `dist`.
5. No environment variables needed. Click Deploy.

## Later changes

Edit `src/portfolio.ts`, check locally, then:

```sh
npm run build
git add .
git commit -m "Update portfolio projects"
git push
```

Vercel automatically deploys pushes to its connected production branch. Folio and Digital Twin remain separate deployments.

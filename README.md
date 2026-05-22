# Arquitech Web — PATCH001 Frontend

Frontend da **Arquitech**, vertical de arquitetura assistida por IA sobre a base operacional Orkio/PatroAI.

## O que este pacote inclui

- Nova rota pública: `/arquitech`
- Landing premium Arquitech
- Identidade visual inicial: logo, monograma, paleta e padrão gráfico
- CTA preparado para ARIA
- Metadados PWA ajustados para Arquitech
- Deploy desacoplado do backend por variável de ambiente
- Rotas existentes do Orkio/PatroAI preservadas

## Arquivos principais adicionados

```txt
src/routes/ArquitechLanding.jsx
src/styles/arquitech.css
public/arquitech-assets/logo-symbol.svg
public/arquitech-assets/logo-horizontal.svg
public/arquitech-assets/pattern-grid.svg
public/arquitech-assets/brand-logo-sheet.png
public/arquitech-assets/brand-identity-board.png
public/icons/arquitech-192.png
public/icons/arquitech-512.png
.env.example
```

## Arquivos alterados

```txt
src/App.jsx
index.html
public/manifest.webmanifest
public/env.js
package.json
package-lock.json
nixpacks.toml
```

## Variável de ambiente obrigatória para produção

Aponte o frontend para o backend atual:

```bash
VITE_API_BASE_URL=https://SEU-BACKEND-ATUAL
```

Exemplo Railway/Vercel/Netlify:

```bash
VITE_API_BASE_URL=https://api-patchd-governance-ready-production.up.railway.app
```

Não deixe barra final.

## Rodar localmente

```bash
npm install
npm run dev
```

Abrir:

```txt
http://localhost:5173/arquitech
```

## Build

```bash
npm run build
npm run start
```

## Observação operacional

Este patch é **frontend-first**. Ele não cria a agente ARIA no backend e não altera schema, banco, API, SSE, RAG ou autenticação.  
A CTA já envia contexto por querystring:

```txt
/auth?source=arquitech&agent=aria&product=arquitech&onboarding=1
```

A seleção real da ARIA no console depende do próximo patch backend/console.


## Repositórios de origem Orkio

Base técnica de referência:

```txt
https://github.com/patroaiconsultech/orkio-web-PATCHD-patroai-integrated
https://github.com/patroaiconsultech/orkio-api-PATCHD-governance-ready
```

Este repositório Arquitech deve ser mantido separado para reduzir risco de regressão no Orkio.

## PATCH002

Ver:

```txt
PATCH002_FRONTEND_GITHUB_READY.md
DEPLOY_FRONTEND_ARQUITECH.md
```

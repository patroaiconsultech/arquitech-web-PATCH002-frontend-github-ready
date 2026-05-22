# DEPLOY_FRONTEND_ARQUITECH

## Objetivo

Subir a Arquitech como frontend separado, usando o backend de produção atual do Orkio.

## Criar novo repo

Sugestão de nome:

```txt
arquitech-web
```

## Subir para GitHub

```bash
git init
git add .
git commit -m "PATCH002: Arquitech frontend github-ready"
git branch -M main
git remote add origin https://github.com/patroaiconsultech/arquitech-web.git
git push -u origin main
```

## Variável de ambiente

No provedor de deploy, configurar:

```bash
VITE_API_BASE_URL=https://SEU-BACKEND-ORKIO-ATUAL
```

Não usar barra final.

## Railway

O pacote já possui `nixpacks.toml`.

Comandos esperados:

```bash
npm install
npm run build
npm run start:prod
```

## Vercel

O pacote inclui `vercel.json` com fallback SPA.

Build command:

```bash
npm run build
```

Output directory:

```txt
dist
```

## Netlify

O pacote inclui `netlify.toml` com fallback SPA.

Build command:

```bash
npm run build
```

Publish directory:

```txt
dist
```

## Checklist de go/no-go

### Verde

- `/arquitech` abre.
- Logo e identidade carregam.
- CTA abre auth/app.
- API responde sem erro CORS.
- Login funciona.
- Console abre.

### Amarelo

- ARIA ainda não existe ou não é pré-selecionada.
- Usuário cai no console genérico Orkio.

### Vermelho

- Build falha.
- API bloqueia CORS.
- Auth não retorna para o app.
- App chama backend errado.

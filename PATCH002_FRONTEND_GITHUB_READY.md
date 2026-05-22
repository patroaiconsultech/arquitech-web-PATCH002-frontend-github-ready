# PATCH002 — Arquitech Frontend GitHub Ready

## Modo operacional

PATCH_PREMIUM com foco exclusivo em frontend.

Este pacote prepara a Arquitech para nascer como novo repositório frontend, desacoplado do backend atual do Orkio.

## Fato confirmado

- Base frontend: Orkio Web PATCHD PatroAI Integrated.
- Backend atual permanece externo e deve ser apontado por variável de ambiente.
- Rota Arquitech adicionada: `/arquitech`.
- Build de produção validado localmente com `npm run build`.

## Hipótese provável

A produção atual do backend expõe os mesmos endpoints esperados pelo frontend Orkio, incluindo autenticação, agentes, chat/SSE e uploads. Essa hipótese precisa ser validada no deploy real com `VITE_API_BASE_URL`.

## Causa raiz validada

A Arquitech precisava de identidade própria no frontend antes de qualquer evolução de backend. O produto não deve parecer apenas Orkio renomeado.

## Patch aplicado no frontend

- Landing própria em `src/routes/ArquitechLanding.jsx`.
- Estilos próprios em `src/styles/arquitech.css`.
- Assets próprios em `public/arquitech-assets/`.
- Rota `/arquitech` registrada em `src/App.jsx`.
- Metadados e PWA ajustados para Arquitech.
- `.env.example` preparado para backend externo.
- Documentação de deploy adicionada.

## Risco residual

- A agente ARIA ainda depende de ajuste backend/console para seleção real.
- O console `/app` ainda é o console Orkio base.
- O backend de produção precisa aceitar CORS do novo domínio frontend.
- A variável `VITE_API_BASE_URL` precisa ser configurada sem barra final.

## Arquivos principais

```txt
src/App.jsx
src/routes/ArquitechLanding.jsx
src/styles/arquitech.css
public/arquitech-assets/
public/manifest.webmanifest
index.html
.env.example
```

## Deploy mínimo

```bash
npm install
npm run build
```

Variável obrigatória:

```bash
VITE_API_BASE_URL=https://SEU-BACKEND-ORKIO-ATUAL
```

## Verificação pós-deploy

1. Abrir `/arquitech`.
2. Clicar em “Começar briefing com a ARIA”.
3. Confirmar navegação para `/auth?source=arquitech&agent=aria&product=arquitech&onboarding=1`.
4. Logar/cadastrar.
5. Confirmar entrada no console.
6. Validar chamadas ao backend no navegador.
7. Confirmar se CORS está liberado para o novo domínio.

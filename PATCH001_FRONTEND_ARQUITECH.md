# PATCH001_FRONTEND_ARQUITECH

## Modo
PATCH_PREMIUM frontend-first.

## Fato confirmado
- Base web Orkio usada como origem.
- Rota `/arquitech` adicionada.
- Landing Arquitech adicionada.
- Backend não foi alterado.

## Hipótese provável
- O backend atual continuará atendendo `/api` e autenticação conforme Orkio.
- O provedor de deploy receberá `VITE_API_BASE_URL`.

## Patch aplicado
- Identidade visual Arquitech.
- Landing premium.
- Assets SVG/PNG.
- Manifest PWA.
- Nixpacks simplificado para novo repo.

## Risco residual
- Console ainda não pré-seleciona ARIA de forma garantida.
- Backend ainda precisa criar/registrar agente ARIA.
- CTA prepara contexto, mas fluxo final depende do backend atual.

## Checklist pós-deploy
- `/arquitech` carrega.
- `/`, `/patroai`, `/orkio`, `/app` continuam acessíveis.
- `VITE_API_BASE_URL` aponta para backend correto.
- Login retorna para `/app?source=arquitech&agent=aria`.
- Nenhum erro de CORS no navegador.

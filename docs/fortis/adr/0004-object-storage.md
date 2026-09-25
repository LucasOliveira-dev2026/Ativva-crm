# ADR-0004 — Storage: Supabase Storage → object storage Fortis (S3/MinIO)

- Estado: **aceito** (F0) · execução: F1 (registro no banco), F3 (adapter S3)

## Contexto

Buckets do upstream: `whatsapp-media` (50 MiB, privado), `skill-assets`,
`lgpd-exports`, `catalog-photos`, `brand-logos` (público) e os da IA, com
**policies RLS em `storage.objects`** que decidem, por prefixo
(`<organization_id>/…`), quem lê e escreve — inclusive restrições de sessão
de suporte (`fn_support_storage_write_allowed`). O ATIVVA usa
`@aws-sdk/client-s3` contra MinIO (`common/storage/storage.service.ts`).

## Decisão

- **Bytes no S3 Fortis; autorização continua no banco.** `storage.*` vira
  `object_storage.buckets`/`objects` (registro de metadados, `database/platform`).
  O adapter `ObjectStorage` (`put`, `get`, `delete`, `signedGetUrl`,
  `metadata`) grava/consulta a linha **dentro da transação do tenant** antes
  de pré-assinar: as policies existentes decidem, e o isolamento A/B de mídia
  é provado no mesmo lugar que o de dados.
- Chave de objeto: `crm/<bucket>/<name>` com `<name>` = caminho do upstream
  (`<organization_id>/…`); caminho vindo do cliente é recusado se não
  começar pela organização ativa.
- URLs assinadas curtas, `content-type` e tamanho validados contra o
  registro do bucket. Nenhum bucket vira público: `brand-logos` passa a ser
  servido por rota com cache, preservando a função.
- O domínio só conhece `ObjectStorage`; S3/MinIO fica no adapter.

# ATIVVA CRM — fork Fortis do DeskcommCRM

Este repositório é o fork controlado de
[melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) que vira o
CRM nativo do ecossistema ATIVVA. A regra da migração:

```
FUNCIONALIDADE DO DESKCOMM                 → PRESERVAR (paridade total)
INFRAESTRUTURA SUPABASE / GENÉRICA DUPLICADA → SUBSTITUIR PELA PLATAFORMA FORTIS
```

| Item            | Valor                                                                 |
| --------------- | --------------------------------------------------------------------- |
| Upstream        | `upstream` → https://github.com/melgarafael/DeskcommCRM (branch `main`) |
| Fork            | `origin` → `LucasOliveira-dev2026/ativva-crm` (a org `Fortis-solucoes` não estava acessível) |
| Base do fork    | ver [`upstream.json`](upstream.json) (SHA, data, release mais próxima) |
| Licença         | MIT, `Copyright (c) 2026 Rafael Melgaço` — o `LICENSE` original é mantido intacto |
| Branch de trabalho | `feat/fortis-platform-migration` (nunca `main`)                    |

## Documentos

| Documento | Conteúdo |
| --- | --- |
| [`PLATFORM-MIGRATION-REPORT.md`](PLATFORM-MIGRATION-REPORT.md) | Relatório F0: stack real do ATIVVA, mapa de substituição, grafo de dependências, ordem, riscos |
| [`SUPABASE-MIGRATION-INVENTORY.md`](SUPABASE-MIGRATION-INVENTORY.md) | Inventário gerado de toda dependência Supabase |
| [`FUNCTIONAL-INVENTORY.md`](FUNCTIONAL-INVENTORY.md) | Inventário gerado de toda funcionalidade (páginas, APIs, crons, actions, workers) |
| [`FUNCTIONAL-PARITY-REPORT.md`](FUNCTIONAL-PARITY-REPORT.md) | Matriz de paridade upstream → fork |
| [`UPSTREAM-SYNC.md`](UPSTREAM-SYNC.md) | Como absorver o upstream sem reintroduzir Supabase |
| [`adr/`](adr/) | Decisões da migração |

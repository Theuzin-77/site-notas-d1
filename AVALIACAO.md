# Avaliação: GitHub Actions com IA - Theuzin-77 / site-notas-d1

## Tarefa 1: CI a cada commit (2,5)
**Evidência:**
- Run verde inicial: https://github.com/Theuzin-77/site-notas-d1/actions/runs/38905879223
- Forçando erro (vermelho): https://github.com/Theuzin-77/site-notas-d1/actions/runs/38906204601
- Corrigindo erro (verde): https://github.com/Theuzin-77/site-notas-d1/actions/runs/38906323143
**Linha de erro:** near "CREAT": syntax error
**Explicação SQLite:** Testamos em SQLite local para validar sintaxe sem quebrar D1 remoto e sem gastar quota.

## Tarefa 2: proteger a main com o CI (1,5)
- PR bloqueado: https://github.com/Theuzin-77/site-notas-d1/pull/6
- PR liberado: Mesmo PR #6 apos correcao - 3/3 checks verdes e Merged
- Push recusado: GH006: Protected branch rule - Changes must be made through a pull request

## Tarefa 3: revisão de PR por IA (3,5)
- PR com comentarios IA: https://github.com/Theuzin-77/site-notas-d1/pull/6
- Erro permissao: Resource not accessible by integration ao remover pull-requests: write
- Item 4 - Afirmacao errada: No PR de migracao so .sql, IA acusou SQL Injection falso positivo. No PR vulneravel inicial com fallback fixo, deu falso negativo. Prova alucinacao.

## Tarefa 4: migrações D1 depois do merge (1,5)
- Workflow migrar.yml: on push main paths migrations/**
- Migration idempotente: CREATE TABLE IF NOT EXISTS
- Run do merge: https://github.com/Theuzin-77/site-notas-d1/actions/workflows/migrar.yml
- Saida PRAGMA table_info confirmou tabela
- Segundo merge sem migrations nao disparou migrar

## Perguntas
1. Roda duas vezes pq tem push e pull_request. Status check da main considera o evento pull_request.
2. PR de fork nao usa secrets.COPILOT_PAT por seguranca. Impede ataque de exfiltracao de token via PR malicioso.
3. Declaramos permissions por menor privilegio. Limita superficie de ataque.
4. Nao pode substituir. IA errou no item 4 com falso positivo/negativo. Status check e objetivo e bloqueante, IA e so consultiva.

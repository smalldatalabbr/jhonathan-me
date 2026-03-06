---
slug: "retaillens-bi"
title: "RetailLens BI"
description: "Camada analítica BI-ready para diagnóstico operacional e tomada de decisão em e-commerce"
heroImage: "/assets/images/cases/retaillens-bi.png"
stack: ["SQL", "Data Modeling", "Power BI", "Business Analytics"]

context: |
  Operações de e-commerce geram grandes volumes de dados relacionados a vendas, entregas e pagamentos. 
  Apesar disso, é comum que a tomada de decisão seja feita com base em relatórios fragmentados, métricas pouco padronizadas ou análises que misturam exploração técnica com comunicação de negócio.
  Esta prova de conceito (PoC) simula um cenário real de e-commerce com o objetivo de transformar dados brutos em informações claras, organizadas e úteis para acompanhamento de performance e apoio à decisão executiva.

challenge: |
  O principal desafio foi consolidar dados operacionais, logísticos e financeiros em uma base única econfiável, garantindo consistência entre métricas e evitando retrabalho analítico.
  Além disso, foi necessário separar claramente a etapa de organização dos dados da etapa de análise, criando dashboards que comunicassem os principais indicadores do negócio de forma simples, direta e sem excesso de informação.

steps:
  - "Curadoria dos dados em SQL, com padronização, validações e criação de visões reutilizáveis."
  - "Construção de uma base analítica consolidada, com uma linha por pedido, pronta para consumo em BI."
  - "Definição de métricas executivas de vendas, logística e financeiro."
  - "Desenvolvimento de dashboards no Power BI com foco em clareza, hierarquia visual e narrativa."

resultHighlights:
  - "Visão executiva consolidada da performance de vendas, com acompanhamento da receita ao longo do tempo e por categorias."
  - "Diagnóstico claro da operação logística, evidenciando prazos de entrega, atrasos e concentração geográfica por estado."
  - "Leitura financeira estruturada dos meios de pagamento, parcelamento e diferenças entre valor vendido e valor processado, organizada em dashboards executivos e analíticos."


resultImage: "/assets/images/cases/retaillens-bi-results.png"
resultImageAlt: "Dashboards executivos da POC RetailLens BI"

links:
  github: "https://github.com/smalldatalabbr/retaillens-bi"
---
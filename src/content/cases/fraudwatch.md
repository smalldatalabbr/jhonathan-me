---
slug: "fraudwatch"
title: "FraudWatch"
description: "Risk scoring e políticas de decisão para detecção de fraude"
heroImage: "/assets/images/cases/fraudwatch.png"
stack: ["Python", "Machine Learning", "LightGBM", "SHAP", "Risk Scoring"]

context: |
  Sistemas antifraude e de prevenção à lavagem de dinheiro (PLD) são amplamente utilizados em ambientes financeiros para mitigar riscos operacionais, regulatórios e reputacionais. Com o aumento do volume transacional, modelos de Machine Learning tornaram-se componentes centrais desses sistemas.
  Nesse cenário, o papel do modelo não é decidir isoladamente, mas gerar scores de risco confiáveis que sirvam de base para políticas claras de decisão, revisão humana e auditoria. O valor do Machine Learning está na capacidade de produzir sinais consistentes, explicáveis e rastreáveis ao longo do tempo.

challenge: |
  Na prática, muitos modelos de risco são avaliados com divisões aleatórias de dados, métricas genéricas e pouca atenção ao impacto operacional dos erros. Isso pode gerar uma percepção inflada de desempenho e decisões frágeis quando o modelo é colocado em uso.
  Sem uma separação explícita entre o score produzido pelo modelo e a política de decisão aplicada, bons resultados estatísticos nem sempre se traduzem em ações consistentes, justificáveis e auditáveis,especialmente em contextos regulados como AML e compliance.

steps:
  - "Auditoria inicial dos dados, tratando o dataset como um histórico transacional."
  - "Definição explícita de split temporal para garantir uma avaliação honesta e realista."
  - "Treinamento de um modelo baseline interpretável como referência de desempenho."
  - "Treinamento e seleção de um modelo principal com maior capacidade preditiva."
  - "Aplicação de técnicas de explicabilidade para compreensão dos fatores que influenciam o score."
  - "Definição de políticas de decisão baseadas em score, faixas de risco e custo de erro."

resultHighlights: 
  - "Pipeline de risk scoring com avaliação temporal explícita e métricas alinhadas a problemas reais de risco."
  - "Geração de scores interpretáveis e comparáveis, utilizados como insumo para políticas de decisão."
  - "Separação clara entre previsão do modelo, política de decisão e revisão humana."
  - "Demonstração prática de como modelos de risco podem atuar como suporte estruturado à decisão em contextos antifraude e AML."

resultImage: "/assets/images/cases/fraudwatch-results.png"
resultImageAlt: "Fluxo de decisão baseado em score de risco e políticas operacionais"

links:
  github: "https://github.com/smalldatalabbr/fraudwatch"
---
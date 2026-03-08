---
slug: "lakeflow"
title: "LakeFlow"
description: "Pipeline analítico em arquitetura Lakehouse com camadas Bronze/Silver/Gold para ingestão de dados externos."
heroImage: "/assets/images/cases/lakeflow.png"
stack: ["Python", "PySpark", "Apache Airflow", "Data Pipelines"]

context: |
  Organizações utilizam cada vez mais dados externos para apoiar análises, decisões operacionais e monitoramento de cenários. Esses dados geralmente vêm de APIs públicas, serviços de terceiros ou fontes abertas, em formatos brutos, heterogêneos e com pouca padronização.
  Sem um pipeline estruturado, a coleta desses dados tende a gerar arquivos isolados, difíceis de validar, reaproveitar ou evoluir. O desafio não está apenas em obter os dados, mas em transformá-los em ativos organizados, confiáveis e prontos para consumo analítico ao longo do tempo.

challenge: |
  Na prática, muitos fluxos de ingestão de dados externos são implementados de forma pontual, sem separação clara de etapas, controle de qualidade ou rastreabilidade das execuções. Isso dificulta responder perguntas básicas, como: de onde veio esse dado, quando foi coletado, quais transformações foram aplicadas e se ele está apto para uso analítico.
  O desafio desta prova de conceito foi construir um pipeline capaz de tratar dados externos de forma estruturada, com camadas bem definidas, execução previsível e dados prontos para consumo analítico, sem depender de soluções complexas ou específicas de negócio.

steps:
  - "Selecionar uma fonte externa de dados como exemplo prático, utilizando informações meteorológicas públicas."
  - "Implementar a ingestão dos dados brutos, preservando o payload original e os metadados de execução."
  - "Organizar os dados em camadas progressivas (Bronze, Silver e Gold), separando dados brutos, dados padronizados e dados prontos para consumo."
  - "Aplicar transformações estruturais e validações básicas para garantir consistência e qualidade dos dados."
  - "Orquestrar o fluxo de execução para garantir processamento ordenado, reprodutível e observável"
  - "Disponibilizar os dados finais em formato analítico, facilitando consultas e reutilização."

resultHighlights: 
  - "Pipeline end-to-end funcional para ingestão e organização de dados externos"
  - "Separação clara de camadas analíticas, permitindo rastreabilidade e evolução controlada dos dados."
  - "Dados estruturados e persistidos em formato analítico, prontos para consumo em consultas e análises."
  - "Demonstração prática de como transformar dados externos brutos em ativos reutilizáveis."

resultImage: "/assets/images/cases/lakeflow-results.png"
resultImageAlt: "Fluxo de ingestão, organização e consumo de dados em camadas"
links:
  github: "https://github.com/smalldatalabbr/lakeflow"
---

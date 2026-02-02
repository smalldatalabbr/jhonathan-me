---
slug: "doclens"
title: "DocLens"
description: "Chatbot RAG baseado em documentos, com controle de escopo, rastreabilidade e mitigação de riscos."
heroImage: "/assets/images/cases/doclens.png"
stack: ["Python", "RAG", "Streamlit", "LLMs via API", "Responsible AI", "Governança de Informação"]

context: |
  Com a popularização dos chatbots baseados em Inteligência Artificial, esse tipo de sistema passou a ser amplamente utilizado para consulta de documentos, políticas internas, manuais operacionais e bases de conhecimento corporativas. Em especial, soluções baseadas em Retrieval-Augmented Generation (RAG) ganharam espaço por permitirem que respostas sejam geradas a partir de conteúdos específicos e controlados.
  Nesse cenário, o uso de chatbots em ambientes corporativos passou a exigir maior confiabilidade, previsibilidade e controle sobre o comportamento do sistema. Respostas fora de escopo ou inconsistentes com a documentação não representam apenas falhas técnicas, mas riscos operacionais e informacionais, especialmente em contextos sensíveis ou regulados. À medida que essas soluções se tornam mais comuns, cresce também a necessidade de mecanismos que garantam alinhamento entre resposta, fonte e escopo permitido.


challenge: |
  Sistemas de chatbot baseados em documentos vêm sendo cada vez mais utilizados para consultas a políticas internas, manuais operacionais e bases de conhecimento corporativas. No entanto, é comum que essas soluções apresentem comportamentos indesejados, como respostas fora de escopo, uso inadequado de fontes, exposição excessiva do conteúdo dos documentos ou falta de coerência entre a resposta gerada e a base consultada.
  Esses problemas reduzem a confiabilidade do sistema, dificultam sua auditoria e limitam seu uso em ambientes corporativos sensíveis, onde previsibilidade, rastreabilidade e controle de risco são requisitos fundamentais.


steps:
  - "Construção de um chatbot RAG funcional, com respostas baseadas exclusivamente na documentação disponível."
  - "Execução de testes adversariais para identificar limites, falhas e comportamentos inesperados."
  - "Mapeamento e categorização estruturada dos riscos observados nas respostas."
  - "Definição de regras claras de escopo e comportamento esperado, com base nos riscos identificados."
  - "Implementação de mecanismos de controle para bloquear, negar ou substituir respostas inadequadas."


resultHighlights: 
  - "Chatbot capaz de responder consultas com base exclusiva na documentação, mantendo rastreabilidade explícita das fontes utilizadas."
  - "Identificação sistemática de falhas comuns em sistemas conversacionais, como extrapolação de escopo, enumeração indevida de conteúdo e inconsistência entre resposta e fonte."
  - "Mitigação ativa de riscos por meio de regras explícitas de controle, com bloqueio ou substituição de respostas potencialmente problemáticas."
  - "Sistema conversacional com comportamento previsível, auditável e alinhado a boas práticas de uso responsável de Inteligência Artificial."


resultImage: "/assets/images/cases/doclens-results.png"
resultImageAlt: "Fluxo de funcionamento do chatbot DocLens com controle de escopo, fontes e guardrails"

links:
  github: "https://github.com/smalldatalabbr/doclens"
---
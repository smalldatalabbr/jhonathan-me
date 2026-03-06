export const siteConfig = {
  name: "Jhonathan Domingues",
  title: "Jhonathan Domingues | Analytics, Machine Learning & AI Systems",
  description:
    "Portfólio de Jhonathan Domingues com projetos de Data Science, Analytics Engineering e AI Systems aplicados a problemas reais de negócio.",
  social: {
    github: "https://github.com/smalldatalabbr",
    linkedin: "https://www.linkedin.com/in/jhonathandomingues/",
    email: "mailto:hello@jhonathan.me",
  },
};

export const homeContent = {
  title: "Olá, sou Jhonathan Domingues.",
   description:`Trabalho com dados, sistemas analíticos e modelos de machine learning aplicados a problemas reais de negócio.\n
Aqui você encontra provas de conceito (PoCs) e sistemas analíticos desenvolvidos no <strong>Small Data Lab</strong>. Os projetos exploram diferentes camadas do trabalho com dados, desde engenharia de pipelines e modelagem preditiva até aplicações de IA baseadas em documentos.`,
 
  buttons: {
    cases: {
      text: "Ver projetos",
      href: "/cases/",
    },
    about: {
      text: "Sobre o autor",
      href: "/sobre/",
    },
  },
  images: {
    light: "/assets/images/data-globe-light.svg",
    dark: "/assets/images/data-globe-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "Sobre | Jhonathan Domingues",
    description: "Trajetória, experiência e competências em Data Science, Analytics e Machine Learning.",
  },
  title: "Quem sou eu",
description:`Sou Jhonathan Domingues. Trabalho com dados, sistemas analíticos e machine learning aplicados a problemas reais de negócio.\n
Minha atuação combina análise exploratória, estatística aplicada e modelagem preditiva com foco em clareza analítica, rastreabilidade e suporte à tomada de decisão.\n
Antes de migrar para a área de dados, construí uma trajetória de mais de 15 anos em engenharia industrial, atuando em ambientes operacionais complexos com análise técnica, automação de processos e otimização de operações. Essa experiência consolidou uma base analítica sólida e influenciou diretamente minha forma atual de estruturar problemas, organizar dados e transformar análise em decisão.\n
    Atualmente, concentro minha experimentação técnica no Small Data Lab, um laboratório independente. Neste ambiente, desenvolvo provas de conceito (PoCs) de ponta a ponta: traduzo dores de negócio em arquiteturas analíticas, estruturo os dados e construo os modelos que sustentam a decisão final.`,
  skills: [
    "Python",
    "SQL",
    "PySpark",
    "Apache Airflow",
    "Machine Learning",
    "Estatística Aplicada",
    "Data Pipelines",
    "Modelagem de Dados",
    "Visualização de Dados",
  ],

  image: { src: "/assets/images/about/jhonathan.png", alt: "Foto de perfil" },

  education: {
    title: "Formação acadêmica",
    items: [
      { period: "2023 – 2024", course: "Pós-graduação em Ciência de Dados e Big Data", institution: "PUC Minas" },
      { period: "2019 – 2021", course: "Tecnólogo em Análise e Desenvolvimento de Sistemas", institution: "Estácio" },
    ],
  },

  experience: {
    title: "Experiência",
    items: [
      {
        period: "06/2025 – atual",
        position: "Cientista de Dados",
        company: "Small Data Lab",
        description: `Atuação em laboratório técnico independente voltado à experimentação aplicada em dados e machine learning.\n
Desenvolvo provas de conceito (PoCs) end-to-end que resolvem problemas reais de negócio. O escopo do meu trabalho abrange desde a curadoria e organização de dados em camadas analíticas até a modelagem preditiva e a comunicação dos resultados.\n
Cada projeto é desenhado para simular o rigor de um ambiente corporativo, com foco absoluto em clareza analítica, rastreabilidade técnica e suporte estratégico à tomada de decisão.`,
      },
    ],
  },

  connect: {
    title: "Vamos nos conectar",
    description:
      "Para conversar sobre dados, projetos ou oportunidades profissionais, fico à disposição. Entre em contato via",
    linkedin: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/jhonathandomingues",
    },
    email: {
      text: "e-mail",
      href: "mailto:hello@jhonathan.me",
    },
},
};

export const projectsContent = {
  meta: {
    title: "Cases | Jhonathan Domingues",
    description:
      "Projetos de Data Science, Analytics Engineering e AI Systems desenvolvidos no Small Data Lab."
  },
  title: "Cases",
  description: `Cada projeto deste portfólio foi desenvolvido no contexto do <strong>Small Data Lab</strong> e explora um problema real de negócio por meio de dados.
Os projetos exploram diferentes camadas de sistemas analíticos, desde infraestrutura de dados e engenharia analítica até modelagem preditiva e aplicações de IA.

Alguns focam em modelos e sistemas de decisão.
Outros mostram como estruturar dados e pipelines confiáveis para análise.
Há também experimentos com sistemas de IA baseados em documentos e recuperação de conhecimento.

Se preferir, você pode começar pela trilha que mais se aproxima do seu interesse.`,

  tracks: [
    {
      key: "data-science",
      label: "Data Science",
      description:
        "Modelos preditivos e sistemas de decisão aplicados a problemas reais de negócio.",
      anchor: "data-science",
    },
    {
      key: "analytics-engineer",
      label: "Data & Analytics Engineering",
      description:
        "Pipelines e camadas analíticas para estruturar dados, gerar métricas confiáveis e apoiar decisões.",
      anchor: "analytics-engineer",
    },
    {
      key: "ai-systems",
      label: "AI Systems",
      description:
        "Aplicações de IA com LLMs e documentos, com foco em controle e confiabilidade.",
      anchor: "ai-systems",
    },
  ] as const,

  projects: [
    {
      title: "LakeFlow",
      impact: "Arquitetura de pipeline analítico com camadas Bronze/Silver/Gold para ingestão e organização de dados externos.",
      description:
        "Pipeline analítico desenvolvido em Python e PySpark para ingestão recorrente, transformação e organização de dados em camadas analíticas, com orquestração via Airflow e foco em rastreabilidade, qualidade e reutilização.",
      image: "/assets/images/cases/lakeflow.png",
      href: "/cases/lakeflow/",
    stack: ["Python", "PySpark", "Apache Airflow", "Data Pipelines"],
      track: "analytics-engineer",
    },
    {
      title: "RetailLens BI",
      impact: "Camada analítica BI-ready para diagnóstico operacional e tomada de decisão em e-commerce.",
      description:
        "Produto analítico para e-commerce baseado em modelagem de dados em SQL e dashboards executivos em Power BI, com métricas consolidadas em uma camada analítica BI-ready voltada à consistência de indicadores e suporte à tomada de decisão.",
      image: "/assets/images/cases/retaillens-bi.png",
      href: "/cases/retaillens-bi/",
      stack: ["SQL", "Data Modeling", "Power BI", "Business Analytics"],
      track: "analytics-engineer",
    },
    {
      title: "DelayImpact",
      impact: "Diagnóstico do impacto de atrasos logísticos na satisfação do cliente em e-commerce.",
      description:
        "Análise exploratória e estatística aplicada para investigar como atrasos logísticos afetam a satisfação do cliente em e-commerce, identificando pontos críticos de deterioração da experiência e padrões regionais de sensibilidade ao atraso.",
      image: "/assets/images/cases/delayimpact.png",
      href: "/cases/delayimpact/",
      stack: ["Python", "SQL", "EDA", "Estatística Aplicada ", "Customer Analytics", "Visualização de Dados "],
      track: "analytics-engineer",
    },
    {
      title: "FraudWatch",
      impact: "Risk scoring e políticas de decisão para detecção de fraude.",
      description:
        "Modelo de risk scoring aplicado à detecção de fraude, com split temporal, governança analítica e definição de políticas de decisão para suporte estruturado à operação.",
      image: "/assets/images/cases/fraudwatch.png",
      href: "/cases/fraudwatch/",
      stack: ["Python", "Machine Learning", "LightGBM", "SHAP", "Risk Scoring"],
      track: "data-science",
    },
    {
      title: "CampaignSense",
      impact: "Priorização de clientes para campanhas baseada em propensão de resposta e retorno financeiro.",
      description:
        "Solução de CRM Analytics que estima a propensão de resposta de clientes e transforma scores analíticos em regras de priorização baseadas em retorno financeiro esperado.",
      image: "/assets/images/cases/campaignsense.png",
      href: "/cases/campaignsense/",
      stack: ["Python", "Machine Learning", "CRM Analytics", "Customer Segmentation", "Decision Strategy"],
      track: "data-science",
    },
{
  title: "DocLens",
  impact: "Chatbot RAG com guardrails e auditoria adversarial para controle seguro de sistemas baseados em LLM.",
  description:
    "Sistema baseado em RAG com auditoria adversarial e guardrails ativos para controle de escopo, rastreabilidade de respostas e mitigação de riscos em consultas sobre documentos.",
  image: "/assets/images/cases/doclens.png",
  href: "/cases/doclens/",
  stack: ["Python", "RAG", "LLMs", "AI Guardrails", "Adversarial Testing"],
  track: "ai-systems",
}

  ],
};


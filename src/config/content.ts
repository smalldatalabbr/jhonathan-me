export const siteConfig = {
  name: "Jhonathan Domingues",
  title: "Jhonathan Domingues | Cientista de Dados (Analytics, ML e GenAI)",
  description:
    "Portfólio de Jhonathan Domingues: cases e POCs em Ciência de Dados, Machine Learning e IA Generativa aplicadas a problemas reais.",
  social: {
    github: "https://github.com/smalldatalabbr",
    linkedin: "https://www.linkedin.com/in/jhonathandomingues/",
    email: "mailto:hello@jhonathan.me",
  },
};

export const homeContent = {
  title: "Olá, sou Jhonathan Domingues",
  description:
    "Atuo com Analytics, Machine Learning e GenAI na construção de soluções orientadas a problemas reais de negócio. Aqui você encontra provas de conceito e cases práticos, desenvolvidos para transformar dados em decisões.",
  buttons: {
    about: {
      text: "Sobre",
      href: "/sobre/",
    },
    cases: {
      text: "Cases",
      href: "/cases/",
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
    description: "Conheça minha trajetória, habilidades e formação em Ciência de Dados, Machine Learning e Analytics.",
  },
  title: "Quem sou eu",
  description:`Sou Jhonathan Domingues, profissional de dados com foco em análise, machine learning e construção de soluções orientadas a problemas reais de negócio. Sou formado em Análise e Desenvolvimento de Sistemas e pós-graduado em Ciência de Dados e Big Data.\n
Trago mais de 15 anos de experiência em engenharia industrial, atuando em ambientes complexos com análise técnica, automação de processos, elaboração de relatórios e suporte à tomada de decisão. Essa vivência consolidou uma base analítica sólida e influenciou diretamente minha forma atual de estruturar e utilizar dados de maneira estratégica.\n
Atualmente, desenvolvo provas de conceito no Small Data Lab, um laboratório pessoal de experimentação aplicada, onde estruturo problemas de negócio, organizo dados em camadas analíticas e desenvolvo soluções de ponta a ponta, da curadoria e análise exploratória à comunicação de insights para apoio à decisão.`,
  skills: [
    "Python",
    "SQL",
    "Estatística Aplicada",
    "Machine Learning",
    "Análise de Dados",
    "Modelagem de Dados",
    "Git/GitHub",
    "Visualização de Dados",
    "GenAI & LLM",
    

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
        description: `Atuação em laboratório de experimentação aplicada, desenvolvendo provas de conceito orientadas a problemas reais de negócio. Estruturação de soluções analíticas end-to-end, com organização de dados em camadas, curadoria em SQL, análises exploratórias guiadas e modelagem analítica para consumo por BI e decisão. Foco em clareza analítica, rastreabilidade e comunicação de resultados, simulando contextos reais de uso de dados em ambientes profissionais.`,
      },
    ],
  },

  connect: {
    title: "Vamos nos conectar",
    description:
      "Fique à vontade para entrar em contato para colaborações, troca de ideias ou oportunidades profissionais. Você pode me encontrar no",
    linkedin: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/jhonathandomingues/",
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
      "Hub de POCs e cases técnicos do Small Data Lab: análise, modelagem, machine learning e resultados.",
  },
  title: "Cases",
  description: `Este espaço reúne as provas de conceito (POCs) desenvolvidas no contexto do projeto Small Data Lab. Aqui são apresentados cases técnicos voltados à resolução de problemas reais com dados, envolvendo análise exploratória, tratamento e modelagem de dados, aplicação de machine learning e comunicação de resultados.
  Esta página funciona como um hub do portfólio, conectando cada POC a seus respectivos repositórios, notebooks e entregáveis técnicos.`,
  
  projects: [
    {
      title: "RetailLens BI",
      description:
        "Analytics executivo para tomada de decisão em e-commerce, com foco em performance logística e financeira.",
      image: "/assets/images/cases/retaillens-bi.png",
      href: "/cases/retaillens-bi/",
      stack: ["SQL", "Modelagem de Dados", "Power BI", "Business Analytics"],
    },
    {
      title: "DelayImpact",
      description:
        "Diagnóstico analítico do impacto do atraso logístico na satisfação do cliente em e-commerce.",
      image: "/assets/images/cases/delayimpact.png",
      href: "/cases/delayimpact/",
      stack: ["Python", "SQL", "EDA", "Análise Estatística", "Comunicação de Dados", "Visualização de Dados"],
    },
    {
      title: "FraudWatch",
      description:
        "Sistema de risk scoring e decisão baseado em Machine Learning, com foco em governança, avaliação temporal e suporte estruturado à decisão.",
      image: "/assets/images/cases/fraudwatch.png",
      href: "/cases/fraudwatch/",
      stack: ["Python", "Applied Machine Learning", "LightGBM", "SHAP", "Decision Modeling"]
    },
    {
      title: "CampaignSense",
      description:
        "Solução de CRM Analytics para otimização de campanhas de marketing, focada em priorização de clientes e maximização de retorno financeiro.",
      image: "/assets/images/cases/campaignsense.png",
      href: "/cases/campaignsense/",
      stack: ["Python", "CRM Analytics", "Profit Targeting", "Applied Machine Learning", "Decision Modeling", ]
    },    
    {
      title: "DocLens",
      description:
        "Chatbot RAG baseado em documentos, com controle de escopo, rastreabilidade e mitigação de riscos.",
      image: "/assets/images/cases/doclens.png",
      href: "/cases/doclens/",
      stack: ["Python", "RAG", "Streamlit", "LLMs via API", "Responsible AI", "Governança de Informação"],
    },

        
      ],
};


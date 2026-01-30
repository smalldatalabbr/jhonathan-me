// src/content/config.ts
import { defineCollection, z } from "astro:content";

const cases = defineCollection({
  type: "content",
  schema: z.object({
    // básicos (já existem no seu projeto)
    title: z.string(),
    description: z.string().optional(),

    // você já usa isso em alguns cases (mantém)
    date: z.string().optional(), // mantém como string pra não quebrar nada
    readTime: z.string().optional(),

    // você já tem "image" em alguns conteúdos (mantém)
    image: z.string().optional(),

    // você já tem stack (mantém)
    stack: z.array(z.string()).optional(),

    // ====== NOVO LAYOUT (slug page) ======
    // roteamento (obrigatório se seu getStaticPaths depender disso)
    slug: z.string().min(1).optional(),

    // hero (se você quiser reaproveitar 'image' como hero, pode deixar hero opcional)
    heroImage: z.string().optional(),

    // seções
    context: z.string().optional(),
    challenge: z.union([z.string(), z.array(z.string())]).optional(),
    steps: z.array(z.string()).optional(),

    resultHighlights: z.array(z.string()).optional(),
    resultImage: z.string().optional(),
    resultImageAlt: z.string().optional(),

    // CTA (opção A: só link variável)
    links: z
      .object({
        github: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { cases };

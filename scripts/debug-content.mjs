import { getCollection } from "astro:content";

const entries = await getCollection("cases");
console.log("cases:", entries.length);

for (const e of entries) {
  console.log("file:", e.id);
  console.log("slug(auto):", e.slug);
  console.log("data keys:", Object.keys(e.data));
  console.log("data.slug:", e.data?.slug);
}

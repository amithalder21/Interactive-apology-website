// Picks up whatever lives in src/assets/memories/ at build time and keys it by
// filename, so adding artwork never needs a code change. An empty folder is
// fine — every chapter falls back to generated art.

const files = import.meta.glob("../assets/memories/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const bySlug = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split("/").pop().replace(/\.[^.]+$/, ""),
    url,
  ])
);

export const memoryImage = (slug) => bySlug[slug] ?? null;

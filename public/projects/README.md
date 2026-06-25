# Project screenshots

Drop product screenshots here, then point each project at its image in
`src/data/projects.ts`:

```ts
{
  slug: "aigallery",
  title: "AIGallery",
  image: "/projects/aigallery.webp", // ← this file, served from /public
  ...
}
```

Until `image` is set, the cards and detail pages show a branded placeholder
(a gradient with the project's initial), so the layout always looks intentional.

**Tips**

- Prefer `.webp` (smaller). A 16:9 crop around **1600×900** looks crisp on retina.
- Use a real screenshot of the product UI — it's the strongest trust signal on the site.
- Filenames are up to you; just match whatever you put in `image`.

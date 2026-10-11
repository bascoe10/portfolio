# abass.dev

Personal site of Abass Sesay, built with [Astro](https://astro.build) and deployed to GitHub Pages at https://abass.dev.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

All copy — intro, links, experience, projects, education, toolkit — lives in `src/data/site.ts`. Add new projects at the top of the `projects` list; images go in `public/img/`.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it with GitHub Pages Actions. `public/CNAME` keeps the custom domain in every build. Repo **Settings → Pages → Source** must be set to **GitHub Actions**.

The writing lives separately at https://blog.abass.dev (bascoe10/GatsbyBlog).

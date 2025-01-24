# Progress report

**Version 1.0.17 : [Changelog](./CHANGELOG.md)** <!-- x-release-please-version -->

> This repo is a template repository to create your own progress report in Markdown.
> The Markdown will be compiled into a static website using [VitePress](https://vitepress.vuejs.org/).
> Creating a progress report is a requirement for the CFC of computer scientist applications development in Switzerland.

## How to use

1. Create a new repository using this template repository (click on the green button "Use this template").
2. Clone your new repository on your machine.
3. Edit your base information :
    - In `src/.vitpress/config.mts` :
        - Change the `base` property to your repository name (if you have set a custom repository name).
        - Change the `title` property with your name or pseudo.
        - Change the `socialLinks`property with your GitHub repository link.
        - Change the `editLink` with your repository name.
    - In `src/index.md` :
        - Change the `name` property with your name or pseudo.
4. Install dependencies and run the dev server :
    ```bash
    npm install
    npm run dev
    ```
5. Then you can make more changes to the Markdown content and see the result in your browser. Don’t forget to check [vitepress Markdown docs](https://vitepress.dev/guide/markdown).

## How to add content

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |


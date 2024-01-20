# Progress report

> This repo is a template repository to create your own progress report in markdown.
> The markdonw will be compiled into a static website using [VitePress](https://vitepress.vuejs.org/).
> The progress report is a requirement for the CFC of computer scientist applications development in Switzerland.

## How to use

1. Create a new repository using this template repository (click on the green button "Use this template").
2. Clone your new repository on your machine.
3. Edit your base information :
    - In `src/.vitpress/config.mts` :
        - Change the `base` property to your repository name (if you have set a custom repository name).
        - Change the `title` property with your name or pseudo.
        - Change the `socialLinks`property with your GitHub repository link.
    - In `src/index.md` :
        - Change the `name` property with your name or pseudo.
4. Install dependencies and run the dev server :
    ```bash
    npm install
    npm run dev
    ```

## How to add your content

## Deployment

Normally, you don't need to deploy your website. It will be automatically deployed by Github Pages when you push your changes to the `main` branch. You can access your website at the following address : `https://<your-github-username>.github.io/<your-repository-name>/`.
> You may need to activate Github Pages in your repository settings and wait a few minutes for the first build to be completed.
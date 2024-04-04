import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://lug-learn.netlify.app/",
  integrations: [
    starlight({
      title: "LUG-Learn",
      description:
        "Guides, Ressourcen und Referenzen rund um Anwendungsentwicklung, Systemintegration und andere IT-Themen.",
      social: {
        linkedin: "https://de.linkedin.com/company/lutzundgrub",
      },
      logo: {
        dark: "./src/assets/dark--line-md--cloud-braces-loop.svg",
        light: "./src/assets/light--line-md--cloud-braces-loop.svg",
      },
      customCss: ["./src/styles/global.css", "./src/fonts/font-face.css"],
      components: {
        Head: "./src/components/Head.astro",
      },
      editLink: {
        baseUrl: "https://github.com/BoilerplateSharp/LUG-Learn/edit/main",
      },
      sidebar: [
        {
          label: "Start",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Startseite",
              link: "/start/start",
            },
            {
              label: "Übersicht",
              link: "/start/overview",
            },
            {
              label: "Mithelfen",
              link: "/start/contribution",
            },
          ],
        },
        // Each subfolder inside /src/docs can be autogenerated like this.
        {
          label: "Git",
          autogenerate: { directory: "git" },
          badge: "New",
        },
        {
          label: "Dev-Setup",
          autogenerate: { directory: "devsetup" },
          badge: "New",
        },
        {
          label: "Astro",
          collapsed: true,
          autogenerate: { directory: "astro" },
        },
        {
          label: "C#",
          autogenerate: { directory: "csharp" },
          badge: "New",
        },
        {
          label: "Webentwicklung",
          autogenerate: { directory: "webentwicklung" },
          badge: "New",
        },
      ],
    }),
  ],
});

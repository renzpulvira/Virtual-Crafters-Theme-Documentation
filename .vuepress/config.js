module.exports = {
  title: "Virtual Crafters Theme",
  description: "Just playing around",
  dest: "public",
  themeConfig: {
    nav: [
      { text: "Getting Started", link: "/intro/getting_started.html" },
      { text: "Functions", link: "/functions/importing_files.html" }
    ],
    sidebar: {
      "/intro/": ["getting_started", "scss_files", "js_files"],
      "/functions/": ["importing_files"]
    }
  }
};

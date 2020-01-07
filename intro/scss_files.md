# The Scss Architecture

The architecture of our `scss` files is inspired by the [7-1 architecture](https://sass-guidelin.es/) by [Hugo Giraudel](https://hugogiraudel.com/)

Looking up the `css` folder we should see a `main.css` file that should get all of our partial files from the scss subfolders.

Here is the overview of the `css` folder

```bash
css/
├── main.css # Gets all our partial files
└── scss
    ├── base
    │   ├── _base.scss # Base configuration
    │   ├── _fonts.scss # Specifying local fonts
    │   ├── _mixins.scss # Global mixins
    │   └── _variables.scss # Global variables
    ├── components
    │   ├── _banners.scss
    │   ├── _buttons.scss
    │   └── _inputs.scss
    ├── layout
    │   ├── _footer.scss
    │   └── _header.scss
    ├── main.scss
    ├── pages
    │   ├── _404.scss
    │   ├── _about.scss
    │   ├── _contact.scss
    │   └── _home.scss
    └── vendors # All of our external libraries are located
        ├── bootstrap
        └── slick
```

Some files and folders are self explanatory especially if your familiar with the SMACSS style guide.

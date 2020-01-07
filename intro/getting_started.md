---
Sidebar: auto
---

# Getting started

The theme uses gulp to automate a lot of stuff such as _sass/js minifying_, _babel stuff_, _converting our scss to modern css_, _auto-reload_, _ftp-upload on change_ etc...

Here is a list of features that our theme has:

- BrowserSync - Sync file changes and interactions across many devices.
- Babel - convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
- Sass - Convert Sass/Scss files to css with sourcemaps and compress files using cssnano for modern compression.
- Autoprefixer - No need to add vendor prefixers, Autoprefixer does that for you(Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you.)
- Compressor/Optimizer - Optimize and compress images(Jpeg, pngs, gifs, svg).
- vinyl-ftp - Automatically upload file(s) to ftp.
- Uglify - Minify js code.

## Requirements

You need to have all this installed on your system:

1. [Nodejs](https://nodejs.org/en/)
2. [Npm](https://www.npmjs.com/)(often comes bundled with nodejs on install)
3. [Gulp](https://gulpjs.com/) installed globally
4. [Git](https://git-scm.com/)

## Installation

Clone the Virtual Crafters Theme Github repo on gitlab

```bash
git clone https://gitlab.com/vtl_gitlab/virtual-crafters-wordpress-theme.git
```

Next we need to install npm packages for our gulp

```bash
npm install
```

After that you are ready to start configuring your _gulpfile_ to sync to your ftp.

## Configuration

Before we start our Theme development, We need to configure our ftp credentials. open **gulpfile.js**.

```bash
├── 404.php
├── assets
├── classes
├── footer.php
├── functions.php
├── gulpfile.js  <---------
├── header.php
├── inc
├── index.php
├── killport
├── node_modules
├── package.json
├── package-lock.json
├── README.md
├── screenshot.png
├── singular.php
├── src
├── style.css
├── style-rtl.css
├── template-about.php
├── template-parts
└── templates

```

Look for the **ftpConfig** obj or "FTP Configuration" Comment on gulpfile.js and insert your ftp configuration.

```javascript
const ftpConfig = {
  host: "ftp.vtlcrafters.com",
  user: "developer@vc-preview.com",
  pass: "M@ur!c3M0ss2006",
  remoteFolder: "/renz/wp-content/themes/vtl",
  siteUrl: "http://vc-preview.com/renz/"
};
```

> **MAKE SURE TO PUT THE CORRECT REMOTEFOLDER**

gulp will overwrite the files, so make sure you put the remotefolder correctly.

## Usage

We should deploy our local development files to our ftp server before we tell gulp to watch our files as we write code. Open your terminal and go to our project folder

```bash
> cd virtual-crafters-wordpress-theme

> gulp deploy
```

Gulp will get all our local files and upload to our server.
The terminal should look similar to these:

```bash
[14:44:58] Using gulpfile ~/Documents/projects/company_projects/virtual-crafters-wordpress-theme/gulpfile.js
[14:44:58] Starting 'deploy'...
[14:44:58] CONN
[14:44:58] CONN
[14:44:58] CONN
[14:45:00] READY
[14:45:00] MLSD  /renz/wp-content/themes/vtl/assets/fonts/inter
[14:45:00] READY
[14:45:00] MLSD  /renz/wp-content/themes/vtl/assets/fonts
[14:45:00] READY
[14:45:00] MLSD  /renz/wp-content/themes/vtl/assets/images
[14:45:00] MLSD  /renz/wp-content/themes/vtl/src/css/scss
[14:45:00] DISC
[14:45:00] DISC
[14:45:01] MLSD  /renz/wp-content/themes/vtl/src/js/scripts
[14:45:01] CONN
[14:45:01] CONN
[14:45:01] MLSD  /renz/wp-content/themes/vtl/src/js
[14:45:01] CONN
[14:45:02] PUT   /renz/wp-content/themes/vtl/src/js/scripts/main.js
[14:45:02] READY
[14:45:02] MLSD  /renz/wp-content/themes/vtl/src/css
[14:45:02] READY
[14:45:02] MLSD  /renz/wp-content/themes/vtl/src/css/scss/base
[14:45:03] UP    100% /renz/wp-content/themes/vtl/src/js/scripts/main.js
[14:45:03] PUT   /renz/wp-content/themes/vtl/src/css/scss/main.scss
[14:45:03] PUT   /renz/wp-content/themes/vtl/src/css/scss/base/_fonts.scss
[14:45:03] CONN
[14:45:03] READY
[14:45:03] MLSD  /renz/wp-content/themes/vtl/src/css/scss/components
[14:45:03] PUT   /renz/wp-content/themes/vtl/src/css/scss/base/_variables.scss
[14:45:03] UP    100% /renz/wp-content/themes/vtl/src/css/scss/main.scss
[14:45:03] UP    100% /renz/wp-content/themes/vtl/src/css/scss/base/_fonts.scss
[14:45:03] MLSD  /renz/wp-content/themes/vtl/src/css/scss/layout
[14:45:03] UP    100% /renz/wp-content/themes/vtl/src/css/scss/base/_variables.scss
[14:45:04] MLSD  /renz/wp-content/themes/vtl/src/css/scss/pages
[14:45:04] DISC
[14:45:04] DISC
[14:45:04] PUT   /renz/wp-content/themes/vtl/src/css/scss/layout/_footer.scss
[14:45:04] CONN
[14:45:04] CONN
[14:45:04] READY
[14:45:04] PUT   /renz/wp-content/themes/vtl/src/css/scss/base/_mixins.scss
[14:45:04] MLSD  /renz/wp-content/themes/vtl/src/js/scripts/vendors
```

Finally, we should tell gulp to start watching our files on save.

```bash
> gulp
```

A local server will open, proxying our `siteUrl` and will automatically reload our browser and upload to ftp when we save new files.

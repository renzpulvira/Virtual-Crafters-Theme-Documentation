---
Sidebar: auto
---

# Importing Files

## Importing stylesheets, scripts etc

To import new scripts to our theme, specify the file and use `wp_enqueue_scripts/wp_enqueue_styles` on `register_scripts` function.

```php
function register_scripts()
{
  wp_enqueue_script('jquery');

  wp_enqueue_style('fontawesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/src/css/scss/vendors/bootstrap/bootstrap.css');
  wp_enqueue_script('bootstrap-js-bundle', get_template_directory_uri() . '/src/js/scripts/vendors/bootstrap/bootstrap.bundle.min.js');
  wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/src/js/scripts/vendors/bootstrap/bootstrap.js');

  // Sliders
  // wp_enqueue_style('slick-css', get_template_directory_uri() . '/src/css/scss/vendors/slick/slick.css'); wp_enqueue_script('slick-js', get_template_directory_uri() . '/src/js/scripts/vendors/slick/slick.js');

  // Main Custom
  wp_enqueue_script('main-scripts', get_template_directory_uri() . '/src/js/scripts/main.js');
  wp_enqueue_style('main-styles', get_template_directory_uri() . '/src/css/main.css');
}
add_action('wp_enqueue_scripts', 'register_scripts');
```

## Navigation

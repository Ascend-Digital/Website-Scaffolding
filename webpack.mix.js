/* eslint indent:0 */
/* global path */

let mix = require('laravel-mix');

/**
 * Below is some basic scaffolding for Laravel Mix
 *
 * If you wanted to compile assets to a WordPress theme, simply update the second
 * value of each chained method below to your WordPress theme or plugin. E.g:
 *
 *     mix.js('assets/js/app.js', 'src/wp-content/themes/twentytwenty/js')
 *      .sass('assets/sass/style.scss', 'src/wp-content/themes/twentytwenty')
 *
 * If you want to copy any files into your production environment - such as Font Awesome,
 * consider chaining the following method:
 *
 *     .copy('node_modules/font-awesome/fonts', '{destination_directory_here}')
 */

mix.js('assets/js/app.js', 'src/js')
   .sass('assets/sass/style.scss', 'src/css');

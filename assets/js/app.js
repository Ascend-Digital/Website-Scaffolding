require('es6-promise');

/**
 * If you're using a package like WordPress, you don't need to require jQuery as
 * part of this file because WordPress kindly loads it for you.
 *
 * If you do need jQuery, simply uncomment the line below
 */

// var jQuery = require('jquery');

/**
 * Instead of invoking WebFont on the front end, or pulling in stylesheets as part
 * of the <head> section of your page, consider instead loading it here
 */
// var WebFont = require('webfontloader');
//
// WebFont.load({
//     google: {
//         families: ['Open Sans:300,400,700']
//     }
// });

/**
 * This function allows you to use jQuery referenced as $ in a way where it
 * won't conflict with any other $ named functions or variables
 */
(function($) {

    $(document).ready(() => {
        console.log('Document ready.');
    });

})(jQuery);

/**

 * @file

 * A JavaScript file for the theme.

 *

 * In order for this JavaScript to be loaded on pages, see the instructions in

 * the README.txt next to this file.

 */

// JavaScript should be made compatible with libraries other than jQuery by

// wrapping it with an "anonymous closure". See:

// - https://drupal.org/node/1446420

// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

(function($, Drupal, window, document, undefined) {

  // To understand behaviors, see https://drupal.org/node/756722#behaviors

  Drupal.behaviors.travail = {

    attach : function(context, settings) {
      //remplacer les virgules par des div
      $('.item-list .content .field-item').each(function() {
        var text = $(this).html();
        text = text.replace(/\,/g, '</div><div>');
        $(this).html('<div>' + text + '</div>');
      });

      $('a.gallery').click(function() {
        var id = $(this).attr('data-id');
        $('.hidden').hide(600);
        $('#image' + id).show(800);

        return false;
      });
    }
  };
})(jQuery, Drupal, this, this.document);

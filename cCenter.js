/**
* Author: uienvy.com
* Plugin Site: http://uienvy.com/dev/plugins#cCenter
* Date: 11/14/11
* Time: 10:26 PM
* Center element vertically and horizontally
* @options el: containing element to center within;
* @use: jQuery(".centerCenter").centerCenter() - <div class="centerCenter" data-center-container="#my_element"></div>;
*

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* */
(function($){
    jQuery.fn.cCenter = function(){
        return this.each(function(i, e){
            var $this = jQuery(e),
                container = $this.attr('data-center-container'),
                cheight,
                cwidth;

            // If no containing element is specified with the data-center-container attribute, the body tag will be used
            if(!container){
                container = jQuery('body');
            }

            // Checking for data-center-contianer-height and width (automatically set within the plugin for resizing)
            if(!$this.attr('data-center-container-height') || !$this.attr('data-center-container-width')){

                // Doesnt exist?
                cheight = jQuery(container).outerHeight(),
                cwidth = jQuery(container).outerWidth();

            } else {

                // Esists? Get the values : )
                cheight = $this.attr('data-center-container-height'),
                cwidth = $this.attr('data-center-container-width');

            }

            // Add relative positioning to the containing element
            $(container).css('position','relative');

            var elheight = $this.outerHeight(),
                elwidth = $this.outerWidth(),
                top = cheight/2 - elheight/2,
                left = cwidth/2 - elwidth/2,
                dimensions = {
                    top: top,
                    left: left
                };

            // Create the function for the window resize event
            jQuery(window).resize(function() {
                var cheight = jQuery(container).outerHeight(),
                    cwidth = jQuery(container).outerWidth(),
                    top = cheight/2 - elheight/2,
                    left = cwidth/2 - elwidth/2,
                    opts = {
                        top: top,
                        left: left
                    };
                $this.attr('data-center-container-height', cheight);
                $this.attr('data-center-container-width', cwidth);
                var height = $this.attr('data-center-container-height'),
                    width = $this.attr('data-center-container-width');

                // Call positioning method
                csspos(opts);
            });

            // Creeate positioning method
            var csspos = function(opts){
                if(!opts){
                    opts = dimensions;
                }
                $this.css(opts);
            };

            // Kick off the plugin and center your elements
            csspos();
        });
    };
})(jQuery);
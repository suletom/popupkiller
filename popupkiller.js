// ==UserScript==
// @name    popup-killer
// @version  1
// @include *
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @grant    none
// ==/UserScript==
console.log("popup killer script started!");

window.addEventListener('load', function() {

    console.log("ready!");

    this.$ = this.jQuery = jQuery.noConflict(true);

    function dojob() {
        var el = document.elementFromPoint(1, 1);

        if ($(el).css('position') == 'fixed' && $(el).height() > 300) {

            console.log("popup killer script fired!");

            $(el).remove();
            $('body').css({
                'overflow': 'scroll'
            });
        }

        setTimeout(function() {
            dojob();
        }, 3000);
    }

    dojob();
    
}, false);

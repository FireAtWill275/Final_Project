(function () {
    'use strict';

    $(document).ready(function () {

       

        var slideDuration = 500; 

        function readMore(e) {
            console.log('readMore');
           	e.preventDefault();
            $('#posts .read-more').hide();
            $('#show-this-on-click').slideDown(slideDuration);
            $('#also-show-this-on-click').slideDown(slideDuration);
            $('#posts .read-less').show();
        }

        function readLess(e) {
            console.log('readLess');
            e.preventDefault();
            $('#posts .read-less').hide();
            $('#show-this-on-click').slideUp(slideDuration);
            $('#also-show-this-on-click').slideUp(slideDuration);
            $('#posts .read-more').show();
        }

        function learnMore(e) {
            console.log('learnMore');
            e.preventDefault();
            $('#sidebar .learn-more').hide();
            $('#learn-more-text').slideDown(slideDuration);
            $('#sidebar .learn-less').show();
        }
        function learnLess(e) {
            console.log('learnLess');
            e.preventDefault();
            $('#sidebar .learn-less').hide();
            $('#learn-more-text').slideUp(slideDuration);
            $('#sidebar .learn-more').show();
        }

        $('#posts .read-more').click(readMore);
        $('#posts .read-less').click(readLess);
        $('.learn-more').click(learnMore);
        $('.learn-less').click(learnLess);

  

    });
}());

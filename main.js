$(document).ready(function() {
    /* SMOOTH SCROLL */
    var $root = $('html,body');
    $('a[href*="#"]').on('click', function() {
        var self = $(this);
        //alert($(self.attr("href")));
        $root.animate({
            scrollTop:$(self.attr("href")).offset().top
        },500);
        return false;
    });
});

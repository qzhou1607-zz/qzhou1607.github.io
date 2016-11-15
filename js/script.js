$(document).ready(function() {
    //typed animation effect
    $(function(){
        $("#description").typed({
            strings: ["A Full-Stack Developer^500", "A Microfluidics Engineer^500", "A Quick Learner^500"],
            typeSpeed: 80,
            loop:true
        });
    });
    
    //smooth scroll
    var $root = $('html,body');
    $('a[href*="#"]').on('click', function() {
        var self = $(this);
        //alert($(self.attr("href")));
        $root.animate({
            scrollTop:$(self.attr("href")).offset().top
        },1000);
        return false;
    });
    
    //close nav bar dropdown menu after select
    // $(".navbar-right").find("a").on('click',function() {
    //     $(".navbar-collapse").collapse("hide");
    // });
});

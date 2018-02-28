//Smooth scrolling to first section

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        }
    });
});

//animate.css
$(document).ready(function() {
    //dog
    $("#dog").waypoint(function () {
        $('#dog').toggleClass('animated fadeInRight');
    }, {offset: '100%'});

    //payment
    $("#card-left").waypoint(function () {
        $('#card-left').toggleClass('animated fadeInRight');
    }, {offset: '100%'});
    $("#card-right").waypoint(function () {
        $('#card-right').toggleClass('animated fadeInLeft');
    }, {offset: '100%'});

    //Iphone
    //$(".iphone-section__img").waypoint(function () {
    //    $('.iphone-section__img').toggleClass('animated bounceInDown');
    //}, {offset: '100%'});
    $("#iphone-section__line1").waypoint(function () {
        $('#iphone-section__line1').toggleClass('animated fadeInRight');
    }, {offset: '100%'});
    $("#iphone-section__line2").waypoint(function () {
        $('#iphone-section__line2').toggleClass('animated fadeInRight');
    }, {offset: '100%'});
    $("#iphone-section__line3").waypoint(function () {
        $('#iphone-section__line3').toggleClass('animated fadeInRight');
    }, {offset: '100%'});
});

// remove animate css 768px



$(".iphone-section__img").waypoint(function () {
    $('.iphone-section__img').toggleClass('animated bounceInDown');
}, {offset: '100%'});
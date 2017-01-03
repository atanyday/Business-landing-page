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
    $(".iphone-img").waypoint(function () {
        $('.iphone-img').toggleClass('animated bounceInDown');
    }, {offset: '100%'});
    $("#iphone-section-first").waypoint(function () {
        $('#iphone-section-first').toggleClass('animated fadeInRight');
    }, {offset: '100%'});
    $("#iphone-section-second").waypoint(function () {
        $('#iphone-section-second').toggleClass('animated fadeInRight');
    }, {offset: '100%'});
    $("#iphone-section-third").waypoint(function () {
        $('#iphone-section-third').toggleClass('animated fadeInRight');
    }, {offset: '100%'});
});


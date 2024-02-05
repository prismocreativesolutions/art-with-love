$( ".about-hover" ).hover(
    function(e) {
        $( ".about-hover" ).css( "background-color", "#F1E4DB")
        $( ".about-menu" ).removeClass( "hidden" )
    }, function() {
        $( ".about-hover" ).css( "background-color", "")
        $( ".about-menu" ).addClass( "hidden" );
    }
)

$( ".brands" ).hover(
    function(e) {
        $( ".brands" ).css( "background-color", "#F1E4DB")
        $( ".brands-menu" ).removeClass( "hidden" )
    }, function() {
        $( ".brands" ).css( "background-color", "")
        $( ".brands-menu" ).addClass( "hidden" );
    }
)

$('.hero-banner').slick({
    // dots: true,
    prevArrow: ".prev-button",
    nextArrow: ".next-button",
});


$( ".drop-dawn" ).on( "click", function(e) {
    if ($( ".nav-curtain" ).hasClass( "active" )) {
        $( ".nav-curtain" ).removeClass( "active" )
        $( ".nav-curtain" ).css("height", "0");
    } else {
        $( ".nav-curtain" ).addClass( "active" )
        $(".mobile-main-nav").height(
            function(index, currentHeight) {
                $( ".nav-curtain" ).css("height", currentHeight+"px");
            }, 
        )
    }
});

var lastScroll = 0;

$(function () { 
    $(window).scroll(function(){
        var scrolltop = $(window).scrollTop();
        
        if(scrolltop > lastScroll) {
            $( ".header" ).addClass( "hide-header" )
            $( ".header" ).removeClass( "show-header" )
            console.log("scrolltop", scrolltop)
        } else {
            $( ".header" ).addClass( "show-header" )
            $( ".header" ).removeClass( "hide-header" )
            console.log("lastscroll", lastScroll)
        }

        lastScroll = scrolltop;
    })
} )


//Issue here the width does not change once the it has been set on ./style/style.css
$( ".lang-arrow-button" ).on( "click", function(e) {
    if ($( ".lang-nav" ).hasClass( "active" )) {
        $( ".lang-nav" ).removeClass( "active" )
        $( ".lang-nav" ).css("width", "0");
    } else {
        $( ".lang-nav" ).addClass( "active" )
        $( ".lang-list-container" ).width(
            function(index, currentWidth) {
                $( ".lang-nav" ).css("width", currentWidth+"px");
            }, 
        )
    }
} );
//Smooth Scroll

$(document).on('click', 'a', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500);
    }
});

//Animations
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#gameMenu"})
.setClassToggle("#gameMenu", "hashAnimation") // add class toggle
.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#Decks"})
.setClassToggle("#Decks", "hashAnimation2") // add class toggle
.addTo(controller);
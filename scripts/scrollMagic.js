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

var scene = new ScrollMagic.Scene({
    triggerElement: '#Decks'
})
.setClassToggle('#Decks', 'show')
.addTo(controller);
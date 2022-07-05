$(function() {
    $(".navbar a, footer a").on("click", function(event) {
        event.preventDefault();
        var hash = this.hash;

        $('body').animate({ scrollTop: $(hash).offset().top }, 900, function() { window.location.hash = hash; })
    });
})

$('.carousel').carousel()

$('.carousel').carousel({
    interval: 2000
})
$('#myCarousel').on('slide.bs.carousel', function() {
    // do something…
})
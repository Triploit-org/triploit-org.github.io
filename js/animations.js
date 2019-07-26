$(function() {
    var documentEl = $(document);
    var fadeElem = $(".content");

    documentEl.on("scroll", function() {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function() {
            var $this = $(this);
            var elemOffsetTop = $this.offset().top;

            if (currScrollPos > elemOffsetTop)
                $this.css("opacity", 1 - (currScrollPos-elemOffsetTop ))
        });
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);

    return false;
});
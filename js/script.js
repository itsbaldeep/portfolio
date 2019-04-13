$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        pagination: false,
        play: 3000
    });

    const typed = new Typed('.typed', {
        strings: ['Web Developer.', 'Graphic Designer.', 'Student.'],
        typeSpeed: 60,
        loop: true,
        showCursor: false
    });
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            938: { items: 4 }
        }
    });
    
    const skillsTopOffset = $('.skills-section').offset().top;
    const statsTopOffset = $('.stats-section').offset().top;
    let counting = true;

    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        if (counting && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $('.counter').each(function() {
                $(this).countup(parseInt($(this).text()));
                counting = false;
            });
        }
    });

    $('[data-fancybox]').fancybox();

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $('#filters a').click(function() {
        $('#filters .current').removeClass('current');
        $(this).addClass('current');
        
        const filter = $(this).attr('data-filter');
        $('.items').isotope({
            filter,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $('.copyright p').append((new Date).getFullYear());

})
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

})
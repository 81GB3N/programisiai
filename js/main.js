const daugiau = document.querySelector('.read_more_about');
const about = document.querySelector('.about');

// const about_height = about.clientTop;

daugiau.addEventListener('click', function() {
    about.scrollIntoView({behavior: "smooth"});
    
    document.querySelector('body').click();
    // body.click();
});

// const next = document.querySelector('.carousel-control-next');
// const prev = document.querySelector('.carousel-control-prev');

// next.addEventListener('click', function() {
//     body.click();
// });

// prev.addEventListener('click', function() {
//     body.click();
// });
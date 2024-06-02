const daugiau = document.querySelector('.read_more_about');
const about = document.querySelector('.about');

// const about_height = about.clientTop;
const body = document.querySelector('body');

daugiau.addEventListener('click', function() {
    console.log(about.clientHeight);

    // about.scrollTop = about.clientHeight;
    const height = about.clientHeight;
    
    // body.scrollBy(0, height);
    // document.querySelector('body').click();
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
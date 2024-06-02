const daugiau = document.querySelector('.read_more_about');
const about = document.querySelector('.about');

const body = document.querySelector('body');

daugiau.addEventListener('click', function() {
    console.log(about.clientHeight);
    about.scrollIntoView({behavior: "smooth"});

});
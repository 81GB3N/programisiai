const daugiau = document.querySelector('.read_more_about');
const about = document.querySelector('.about');

daugiau.addEventListener('click', function() {
    // console.log(about.clientHeight);
    about.scrollIntoView({behavior: "smooth"});

});

const uzsisakyk = document.querySelector('.uzsisakyk');
const uzsakyti_button = document.querySelector('.uzsakyti-button');

uzsisakyk.addEventListener('click', function() {
    // console.log(about.clientHeight);
    uzsakyti_button.scrollIntoView({behavior: "smooth"});

});

const title = document.querySelector('title');
document.addEventListener('DOMContentLoaded', ()=> {
    title.innerText = "Programisiai";
});


var swiper = new Swiper(".slider__container__services", {
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let nextBtn = document.getElementById('swiperBtnNext');
let prevBtn = document.getElementById('swiperBtnPrev');

nextBtn.onclick = () => {
    prevBtn.classList.remove('swiper-button-active');
    nextBtn.classList.add('swiper-button-active');
}

prevBtn.onclick = () => {
    nextBtn.classList.remove('swiper-button-active');
    prevBtn.classList.add('swiper-button-active');
}

var swiper_testimonials = new Swiper(".content__testimonials", {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let nextTestimonialsBtn = document.getElementById('swiperBtnTestimonialsNext');
let prevTestimonialsBtn = document.getElementById('swiperBtnTestimonialsPrev');


nextTestimonialsBtn.onclick = () => {
    prevTestimonialsBtn.classList.remove('swiper-button-active');
    nextTestimonialsBtn.classList.add('swiper-button-active');
}

prevTestimonialsBtn.onclick = () => {
    nextTestimonialsBtn.classList.remove('swiper-button-active');
    prevTestimonialsBtn.classList.add('swiper-button-active');
}
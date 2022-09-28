
var swiper = new Swiper(".slider__container__services", {
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let nextBtn = document.getElementById('swiperBtnNext');
let prevBtn = document.getElementById('swiperBtnPrev');

nextBtn.onclick = function () {
    prevBtn.classList.remove('swiper-button-active');
    nextBtn.classList.add('swiper-button-active');
}

prevBtn.onclick = function () {
    nextBtn.classList.remove('swiper-button-active');
    prevBtn.classList.add('swiper-button-active');
}
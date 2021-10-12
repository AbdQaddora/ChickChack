let currentTecSlid = 1;
document.querySelector(`.technologies .row:nth-of-type(${currentTecSlid})`).classList.add("active");
document.querySelector(` .TecController .indicator:nth-of-type(${currentTecSlid})`).classList.add("active");
document.querySelector(` .TecController2 .indicator:nth-of-type(${currentTecSlid})`).classList.add("active");

function TecSlidChanger(x) {
    document.querySelector(`.technologies .row:nth-child(${currentTecSlid})`).classList.remove("active");
    document.querySelector(` .TecController .indicator:nth-child(${currentTecSlid})`).classList.remove("active");

    currentTecSlid = x;

    document.querySelector(`.technologies .row:nth-child(${currentTecSlid})`).classList.add("active");
    document.querySelector(` .TecController .indicator:nth-child(${currentTecSlid})`).classList.add("active");
}

function TecSlidChangerMobile(x) {
    document.querySelector(`.technologies .row:nth-child(${currentTecSlid})`).classList.remove("active");
    document.querySelector(` .TecController2 .indicator:nth-child(${currentTecSlid})`).classList.remove("active");
    currentTecSlid = x;
    if (currentTecSlid < 5) {
        document.querySelector(` .TecController2`).style = `transform: translateX(-${180 * (currentTecSlid - 1)}px);`;
    } else {
        document.querySelector(` .TecController2`).style = `transform: translateX(-${180 * (currentTecSlid - 2) + 35}px);`;
    }


    document.querySelector(`.technologies .row:nth-child(${currentTecSlid})`).classList.add("active");
    document.querySelector(` .TecController2 .indicator:nth-child(${currentTecSlid})`).classList.add("active");
}

function mobileNavShow() {
    document.querySelector(".mobileNav").style = "left: 0vw;";
}

function mobileNavhide() {
    document.querySelector(".mobileNav").style = "left: -70vw;";
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

swiper.on('slideChange', function () {
    document.querySelector(".gridCounter").innerHTML = `0${this.activeIndex + 1}`;
});

var swiper2 = new Swiper(".mySwiper2", {
    effect: 'fade',
    speed: 300,
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".indecators",
        clickable: true,
        renderBullet: function (index, indicator) {
            return '<span class="' + indicator + '">' + "</span>";
        },
    },
    breakpoints: {
        992: {
            allowTouchMove: false
        }
    }
});

swiper2.on('slideChange', function () {
    if (swiper2.activeIndex == 2) {
        document.querySelector('.sliderSection .swiper-wrapper .swiper-slide:nth-child(3)').classList.add('fit');
    } else {
        document.querySelector('.sliderSection .swiper-wrapper .swiper-slide:nth-child(3)').classList.remove('fit');
    }
});
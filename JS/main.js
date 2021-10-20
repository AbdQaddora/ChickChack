let currentTecSlid = 1;
document.querySelector(`.technologies .row:nth-of-type(${currentTecSlid})`).classList.add("active");
document.querySelector(` .TecController .indicator:nth-of-type(${currentTecSlid})`).classList.add("active");
document.querySelector(` .TecController2 .indicator:nth-of-type(${currentTecSlid})`).classList.add("active");

setTimeout(() => {
    document.getElementById('vid2').play();
    document.getElementById('vid1').play();
}, 200);

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
    let movePx = 180;
    if (window.innerWidth > 480 && window.innerWidth < 550) {
        movePx = 160;
    } else if (window.innerWidth > 550 && window.innerWidth < 600) {
        movePx = 140;
    } else if (window.innerWidth > 600 && window.innerWidth < 650) {
        movePx = 120;
    } else if (window.innerWidth > 650 && window.innerWidth < 700) {
        movePx = 100;
    } else if (window.innerWidth > 700 && window.innerWidth < 750) {
        movePx = 80;
    } else if (window.innerWidth > 750 && window.innerWidth < 800) {
        movePx = 70;
    } else if (window.innerWidth > 800 && window.innerWidth < 850) {
        movePx = 60;
    } else {
        movePx = 40;
    }

    if (currentTecSlid < 5) {
        document.querySelector(` .TecController2`).style = `transform: translateX(-${movePx * (currentTecSlid - 1)}px);`;
    } else {
        document.querySelector(` .TecController2`).style = `transform: translateX(-${movePx * (currentTecSlid - 2) + 35}px);`;
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
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    spaceBetween: 30
});

document.querySelector(`.gridIndecator span:nth-child(${swiper.activeIndex + 1})`).classList.add("active");

swiper.on('slideChange', function () {
    document.querySelector(`.gridIndecator span:nth-child(${swiper.previousIndex + 1})`).classList.remove("active");
    document.querySelector(`.gridIndecator span:nth-child(${swiper.activeIndex + 1})`).classList.add("active");
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


if (window.innerWidth < 990) {
    document.querySelector('.sliderSection .swiper-wrapper .swiper-slide:nth-child(3)').style = "height:0px";
}
swiper2.on('slideChange', function () {
    if (window.innerWidth < 990) {
        if (swiper2.activeIndex == 2) {
            document.querySelector('.sliderSection .swiper-wrapper .swiper-slide:nth-child(3)').style = "height:auto";
            console.log("test");
        } else {
            console.log("test");
            document.querySelector('.sliderSection .swiper-wrapper .swiper-slide:nth-child(3)').style = "height:0px";
        }
    }
});
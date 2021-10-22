setTimeout(() => {
    document.getElementById('vid2').play();
    document.getElementById('vid1').play();
}, 200);

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


let arr = ['Augmented Reality', 'AI & Machine Learning', 'Dashboard', 'Virtual Services', '3D scaninng & modeling'];
var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + arr[index] + "</span>";
        },
    },
    breakpoints: {
        990: {
            allowTouchMove: false
        }
    }
});


function TecSlidChangerMobile() {
    currentTecSlid = swiper3.activeIndex + 1;
    let movePx = 200;
    if (window.innerWidth > 450 && window.innerWidth < 480) {
        movePx = 180;
    } else if (window.innerWidth > 480 && window.innerWidth < 550) {
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
    } else if (window.innerWidth > 850) {
        movePx = 40;
    }

    if (currentTecSlid < 5) {
        document.querySelector(`.TecController`).style = `transform: translateX(-${movePx * (currentTecSlid - 1)}px);`;
    } else {
        document.querySelector(`.TecController`).style = `transform: translateX(-${movePx * (currentTecSlid - 2) + 35}px);`;
    }
}

let allSlides = document.querySelectorAll(`.technologies .mySwiper3 .swiper-slide .row`)
allSlides.forEach((x) => {
    x.style = 'height: 0;';
});
document.querySelector(`.technologies .mySwiper3 .swiper-slide:nth-child(${swiper3.activeIndex + 1}) .row`).style = 'height: 100%;';
swiper3.on('slideChange', function () {
    allSlides.forEach((x) => {
        x.style = 'height: 0;';
    });
    document.querySelector(`.technologies .mySwiper3 .swiper-slide:nth-child(${swiper3.activeIndex + 1}) .row`).style = 'height: 100%;';
    if (window.innerWidth < 990) {
        TecSlidChangerMobile();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 990) {
        TecSlidChangerMobile();
    }
})
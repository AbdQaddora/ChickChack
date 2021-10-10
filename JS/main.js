let currentSlid = 1;
document.querySelector(`.sliderSection .row:nth-of-type(${currentSlid})`).classList.add("active");
document.querySelector(`.sliderSection .row .images .indicators .indicator:nth-of-type(${currentSlid})`).classList.add("active");

function slidChanger(x) {
    document.querySelector(`.sliderSection .row:nth-of-type(${currentSlid})`).classList.remove("active");
    document.querySelector(`.sliderSection .row:nth-of-type(${currentSlid}) .images .indicators .indicator:nth-of-type(${currentSlid})`).classList.remove("active");
    console.log(currentSlid);
    currentSlid = x;
    console.log(currentSlid);
    if (currentSlid > 2) {
        document.querySelector(`.topOval`).style = "display:block;";
        document.querySelector(`.circle`).style = "display:none;";
    } else {
        document.querySelector(`.topOval`).style = "display:none;";
        document.querySelector(`.circle`).style = "display:block;";
    }

    document.querySelector(`.sliderSection .row:nth-of-type(${currentSlid})`).classList.add("active");
    document.querySelector(`.sliderSection .row:nth-of-type(${currentSlid}) .images .indicators .indicator:nth-of-type(${currentSlid})`).classList.add("active");
}



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
    }else{
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

let gridSliderPosition = 0;
let currentGridSlid = 1;
function sliderMover() {
    if (gridSliderPosition < 200) {
        gridSliderPosition += 92;
        currentGridSlid += 1;
    }
    document.querySelector(".grid").style = `transform: translateX(-${gridSliderPosition}vw);`
    document.querySelector(".gridCounter").innerHTML = `0${currentGridSlid}`
}

function sliderMoverBack() {
    if (gridSliderPosition > 90) {
        gridSliderPosition -= 92;
        currentGridSlid -= 1;
    }
    document.querySelector(".grid").style = `transform: translateX(-${gridSliderPosition}vw);`
    document.querySelector(".gridCounter").innerHTML = `0${currentGridSlid}`
}
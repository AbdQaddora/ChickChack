let currentSlid = 1;
document.querySelector(`.sliderSection .row:nth-child(${currentSlid})`).classList.add("active");
document.querySelector(`.sliderSection .row:nth-child(${currentSlid}) .indicator:nth-child(${currentSlid})`).classList.add("active");

function slidChanger(x) {
    document.querySelector(`.sliderSection .row:nth-child(${currentSlid})`).classList.remove("active");
    document.querySelector(`.sliderSection .row:nth-child(${x}) .indicator:nth-child(${currentSlid})`).classList.remove("active");

    currentSlid = x;

    document.querySelector(`.sliderSection .row:nth-child(${currentSlid})`).classList.add("active");
    document.querySelector(`.sliderSection .row:nth-child(${currentSlid}) .indicator:nth-child(${currentSlid})`).classList.add("active");
}
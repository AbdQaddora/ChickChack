let currentSlid = 1;
document.querySelector(`.sliderSection .row:nth-child(${currentSlid})`).classList.add("active");
document.querySelector(`.sliderSection .row:nth-child(${currentSlid}) .indicator:nth-child(${currentSlid})`).classList.add("active");

function slidChanger(x) {
    document.querySelector(`.sliderSection .row:nth-child(${currentSlid})`).classList.remove("active");
    document.querySelector(`.sliderSection .row:nth-child(${x}) .indicator:nth-child(${currentSlid})`).classList.remove("active");

    currentSlid = x;
    if (currentSlid > 2) {
        document.querySelector(`.topOval`).style = "display:block;";
        document.querySelector(`.circle`).style = "display:none;";
    } else {
        document.querySelector(`.topOval`).style = "display:none;";
        document.querySelector(`.circle`).style = "display:block;";
    }

    document.querySelector(`.sliderSection .row:nth-child(${currentSlid})`).classList.add("active");
    document.querySelector(`.sliderSection .row:nth-child(${currentSlid}) .indicator:nth-child(${currentSlid})`).classList.add("active");
}S
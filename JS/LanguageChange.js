var theRequest = new XMLHttpRequest();
function fillContent() {
    theRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let content = JSON.parse(this.responseText);
            let nav = content.nav;
            navFill(nav);

            let sliderSection = content.sliderSection;
            headerFill(sliderSection);

            let grid = content.grid;
            gridFill(grid);
        }

    }
}

function navFill(nav) {
    var navItem = document.querySelectorAll(`.nav-links2 .nav-item .nav-link`);
    for (let index = 0; index < navItem.length; index++) {
        const element = navItem[index];
        element.innerHTML = nav.ul[index];
    }

    navItem = document.querySelectorAll(`.nav-links1 .nav-item .nav-link`);
    for (let index = 0; index < navItem.length - 2; index++) {
        const element = navItem[index];
        element.innerHTML = nav.ul[index];
    }

    document.querySelector(`.nav-btn .nav-item:nth-child(1) .nav-link`).innerHTML = nav.signIn;
    document.querySelector(`.nav-btn .nav-item:nth-child(2) .nav-link`).innerHTML = nav.joinNow;

    navItem[4].innerHTML = nav.signIn;
    navItem[5].innerHTML = nav.joinNow;

}

function headerFill(sliderSection) {
    let inner = "";
    sliderSection.forEach(element => {
        let slid = "";
        slid += `
        <div class="swiper-slide">
           <div class="row">
                <div class="content col-lg-7 wow animate__animated animate__fadeInLeft">
                <h2>${element.h2}
                    <span>${element.span1}</span>
                </h2>
        `;

        if (typeof element.span2 !== 'undefined') {
            if (typeof element.ul !== 'undefined') {
                let ulText = "";
                element.ul.forEach(e => {
                    ulText += `<li>${e}</li>`;
                });

                slid += `
                <p class="hasUlAftter"><span>${element.span2}</span></br></p>
                <ul>
                    ${ulText}
                </ul>`;
            } else {
                slid += `
                <p>
                    <span>${element.span2}</span></br>
                    ${element.p}
                </p>`
            }
        } else {
            if (typeof element.ul === 'undefined') {
                slid += `<p>${element.p}</p>`
            }
        }

        slid += ` 
                        <a href="" class="btn main_back">${element.btn}</a>
                    </div>
                    <div class="col-lg-5">
                            <div class="images">
                                <div class="indecators"></div>
                                <div class="img" style="background-image: url(./images/header/${element.img});"></div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        console.log(slid);
        inner += slid;
    });
    document.querySelector(`.sliderSection .mySwiper2 .swiper-wrapper`).innerHTML = inner;
}

function gridFill(grid){

}

function changeLanguge() {
    // document.querySelector("body").style = "text-align:right;";
    // theRequest.open(
    //     "GET",
    //     "./arabic.json",
    //     true
    // );
    theRequest.open(
        "GET",
        `./JS/JSON/english.json`,
        true
    );

    theRequest.send();
}

changeLanguge();
fillContent();
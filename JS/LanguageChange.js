var theRequest = new XMLHttpRequest();
let tecControllerContentArr = [];
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

            let technologies = content.technologies;
            techFill(technologies);

            tecControllerContentArr = content.tecController;

            let about = content.about;
            aboutFill(about);

            let download = content.download;
            downloadFill(download);

            let contact = content.contact;
            contactFill(contact);
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
        inner += slid;
    });
    document.querySelector(`.sliderSection .mySwiper2 .swiper-wrapper`).innerHTML = inner;
}

function gridFill(grid) {
    let allInner = [];
    grid.forEach((element) => {
        let innerDiv = "";
        innerDiv += `
        <h3>${element.h3}<span>${element.span1}</span></h3>
        `;

        if (element.p !== undefined) {
            innerDiv += `<p>${element.p}</p> `;
        }

        if (element.ul !== undefined) {
            innerDiv += "<ul>";
            element.ul.forEach((e) => {
                innerDiv += `<li>${e}</li>`;
            });
            innerDiv += "</ul>";
        }

        innerDiv += `<p><span>${element.span2}</span></p>
        <a class="main_back">${element.a}${element.arrow}</a>`;
        allInner.push(innerDiv);
    });

    let inner = ""
    allInner.forEach((e) => {
        inner += `  <div class="swiper-slide">
                        <div>
                        ${e}
                        </div>
                    </div>`;
    });

    document.querySelector(`.hiddenOnPC.gridSwiper .swiper-wrapper`).innerHTML = inner;
    inner = "";

    allInner.forEach((e) => {
        inner += `  <div class="swiper-slide">
                        <div>
                        ${e}
                        </div>
                    </div>`;
    });

    document.querySelector(`.grid.hiddenOnMobile div:nth-child(1)`).innerHTML = allInner[0];
    document.querySelector(`.grid.hiddenOnMobile div:nth-child(2)`).innerHTML = allInner[1];
    document.querySelector(`.grid.hiddenOnMobile div:nth-child(3)`).innerHTML = `<div>${allInner[2]}</div>`;
    document.querySelector(`.grid.hiddenOnMobile div:nth-child(4)`).innerHTML = `<div>${allInner[3]}</div>`;
}

function techFill(technologies) {
    let inner = ``;
    technologies.forEach((element) => {
        let slid = '';
        slid += `<div class="swiper-slide">
                     <div class="row">
                         <div class="content col-md-6">`;
        if (element.span1 !== undefined) {
            slid += `<h2>${element.h2}<span>${element.span1}</span></h2>`;
        } else {
            slid += `<h2>${element.h2}</h2>`;
        }

        slid += `<div>
                    <p>${element.p}</p> 
                    <ul>`;
        element.ul.forEach((e) => {
            slid += `<li>${e}</li>`;
        });

        slid += `</ul>
                 </div>
            <a href="" class="btn main_back">${element.ReadMore}</a>
            </div>
            <div class="images col-md-6">`

        if (element.video !== undefined) {
            slid += `<video autoplay muted loop width="100%" id="vid2">
                        <source src="${element.video}" type="video/mp4" />
                    </video>`;
        } else {
            slid += `<div class="img" style="background-image: url(./images/technologies/${element.img}");></div>`;
        }

        slid += `</div></div></div>`;
        inner += slid;
    });

    document.querySelector(`.technologies .mySwiper3 .swiper-wrapper`).innerHTML = inner;
}

function aboutFill(about) {
    document.querySelector(`#about h2`).innerHTML = about.h2;
    document.querySelector(`#about .content p`).innerHTML = about.p;
}

function downloadFill(download) {
    document.querySelector(`.download h2`).innerHTML = download.h2;
    document.querySelector(`.download div a:nth-child(1)`).innerHTML = download.img1;
    document.querySelector(`.download div a:nth-child(2)`).innerHTML = download.img2;
    document.querySelector(`.download div a:nth-child(3)`).innerHTML = download.img3;
    document.querySelector(`.download div a:nth-child(4)`).innerHTML = download.img4;
}

function contactFill(contact) {
    let theForm = contact.theForm;
    document.querySelector(`.contact #contact h3`).innerHTML = theForm.h3;
    document.querySelector(`.contact #contact h2`).innerHTML = theForm.h2;
    document.querySelector(`.contact #contact p`).innerHTML = theForm.p;
    document.querySelector(`.contact #contact input[type="email"]`).setAttribute('placeholder', theForm.email);
    document.querySelector(`.contact #contact input[type="text"]`).setAttribute('placeholder', theForm.phone);
    document.querySelector(`.contact textarea`).setAttribute('placeholder', theForm.textArea);
    document.querySelector(`.contact button`).innerHTML = theForm.btn;
    let card = contact.card;
    document.querySelector(`.contact .myCard h2`).innerHTML = card.h2;
    document.querySelector(`.contact .myCard p`).innerHTML = card.p;
    document.querySelector(`.innerCard:nth-of-type(1) h3`).innerHTML = card.innerCard1.title;
    document.querySelector(`.innerCard:nth-of-type(2) h3`).innerHTML = card.innerCard2.title;
    document.querySelector(`.innerCard:nth-of-type(3) h3`).innerHTML = card.innerCard3.title;

    document.querySelector(`.innerCard:nth-of-type(1) div span:nth-child(1)`).innerHTML = card.innerCard1.e1;
    document.querySelector(`.innerCard:nth-of-type(2) div span:nth-child(1)`).innerHTML = card.innerCard2.e1;
    document.querySelector(`.innerCard:nth-of-type(3) p`).innerHTML = card.innerCard3.p;

    document.querySelector(`.innerCard:nth-of-type(1) div span:nth-of-type(2)`).innerHTML = card.innerCard1.e2;
    document.querySelector(`.innerCard:nth-of-type(2) div span:nth-of-type(2)`).innerHTML = card.innerCard2.e2;
}


function changeLanguge() {
    let luanguage = "ar";
    if (luanguage = "ar") {
        document.querySelector("body").setAttribute("dir", "rtl");
        document.querySelector("body").style = "font-family:Helvetica;";
        document.querySelector("html").style = "font-size:18px;";
        theRequest.open(
            "GET",
            "./JS/JSON/arabic.json",
            true
        );
    } else if (luanguage = "en") {
        document.querySelector("body").setAttribute("dir", "ltr");
        document.querySelector("body").style = "font-family:'Poppins', sans-serif;";
        document.querySelector("html").style = "font-size:16px;";
        theRequest.open(
            "GET",
            `./JS/JSON/english.json`,
            true
        );
    }

    theRequest.send();
}

changeLanguge();
fillContent();

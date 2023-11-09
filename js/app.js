// 명함 클릭시 나오게 하는 js
const businesscard = document.querySelector(".businesscard");
const business = document.querySelector(".business");

businesscard.addEventListener("click", function(){
    business.classList.toggle("a1"),
    businesscard.classList.toggle("a12");
})
// 명함 클릭시 나오게 하는 js


// 스타일종류 클릭시 나오게 하는 js
const button11 = document.querySelector(".button11");
const selectstyle = document.querySelector(".selectstyle");

button11.addEventListener("click", function(){
    selectstyle.classList.toggle("a11");
    button11.classList.toggle("a12");
})
// 스타일종류  클릭시 나오게 하는 js


// 자동 사진 넘김
var slideIndexA = 0;
    showSlidesA();

    function showSlidesA() {
        var i;
        var slidesA = document.getElementsByClassName("mySlidesA");
       
        for (i = 0; i < slidesA.length; i++) {
            slidesA[i].style.display = "none";
        }
        slideIndexA++;
        if (slideIndexA > slidesA.length) {
            slideIndexA = 1
        }
        slidesA[slideIndexA - 1].style.display = "block";
    
        setTimeout(showSlidesA, 2000); // 2초마다 이미지가 체인지
    }
// 자동 사진 넘김


//swiper 관련
const swiper = new Swiper(".my-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        },
    })
//swiper 관련




// 버튼 클릭시 해당 페이지로 자동으로 내려가기
let but1 = document.querySelector(".button1");
let but2 = document.querySelector(".button2");
let but3 = document.querySelector(".button3");
let buttop = document.querySelector(".gotop>div");

let sec1 = document.querySelector(".main-sec1");
let sec2 = document.querySelector(".main-sec2");
let sec3 = document.querySelector(".main-sec6");
let topp = document.querySelector(".header-sec1");

but1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: sec1.offsetTop, behavior: "smooth" })
})

but2.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: sec2.offsetTop+100, behavior: "smooth" })
})

but3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: sec3.offsetTop-50, behavior: "smooth" })
})

buttop.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: topp.offsetTop, behavior: "smooth" })
})
// 버튼 클릭시 해당 페이지로 자동으로 내려가기



// 글자들의 자동 색 변경

const changeB = document.querySelector(".main-sec1>div>h2:last-of-type");
const changeC = document.querySelector(".main-sec1>div>h2:last-of-type>a");

const changeE = document.querySelector(".footer>div:last-of-type>a:last-of-type");


changeB.classList.toggle("active111");
changeC.classList.toggle("active111");

changeE.classList.toggle("active111");

setInterval(()=>{

    changeB.classList.toggle("active111"),
    changeC.classList.toggle("active111"),

    changeE.classList.toggle("active111")
}, 1000)
// 글자들의 자동 색 변경




//문단이 옆에서 나타나기
const sections = document.querySelectorAll(".section");

function scrollHandler(){
    for(let i = 0;i < sections.length; i++){
        if(sections[i].offsetTop - 900 <= window.pageYOffset){
            sections[i].classList.add("active")
        }
    }
}

window.addEventListener("load", scrollHandler)
window.addEventListener("scroll", scrollHandler)
//문단이 옆에서 나타나기
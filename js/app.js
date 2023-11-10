// 명함 클릭시 나오게 하는 js
const onoffbut = document.querySelector(".onoffbut");
const business1 = document.querySelector(".business");

onoffbut.addEventListener("click", function(){
    onoffbut.classList.toggle("active1"),
    business1.classList.toggle("active2")
})
// 명함 클릭시 나오게 하는 js


// 리틀박스 클릭시 나오게 하는 js
const boxbut = document.querySelector(".littleBox");
const boxlist = document.querySelector(".boxlist");

boxbut.addEventListener("click", function(){
    boxbut.classList.toggle("active1"),
    boxlist.classList.toggle("active4")
})
// 리틀박스 클릭시 나오게 하는 js


// 자동 사진 넘김
var slideIndexA = 0;
    showSlidesA();

    function showSlidesA() {
        var i;
        var slidesA = document.getElementsByClassName("mySlidesA");
       
        for (i = 0; i < slidesA.length; i++) {
            slidesA[i].style.display = "none"
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

// 글자들의 자동 색 변경
const changeA = document.querySelector(".business>a>h6>span");
const changeB = document.querySelector(".main-sec1>h2:last-of-type");
const changeC = document.querySelector(".main-sec1>h2:last-of-type>a");
const changeE = document.querySelector(".footer>div:last-of-type>a:last-of-type");

changeA.classList.toggle("active3");
changeB.classList.toggle("active3");
changeC.classList.toggle("active3");
changeE.classList.toggle("active3");

setInterval(()=>{
    changeA.classList.toggle("active3"),
    changeB.classList.toggle("active3"),
    changeC.classList.toggle("active3"),
    changeE.classList.toggle("active3")
}, 1000)
// 글자들의 자동 색 변경


// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기
const but1 = document.querySelector(".button1");
const but2 = document.querySelector(".button2");
const but3 = document.querySelector(".button3");
const buttop = document.querySelector(".gotop");

const littlebut1 = document.querySelector(".boxlist-1");
const littlebut2 = document.querySelector(".boxlist-2");
const littlebut3 = document.querySelector(".boxlist-3");

const sec1 = document.querySelector(".fixed");
const sec2 = document.querySelector(".main-sec2");
const sec3 = document.querySelector(".main-sec6");
const topp = document.querySelector(".header");

const littlesec1 = document.querySelector(".onoffbut");
const littlesec2 = document.querySelector(".main-sec2 > h1");
const littlesec3 = document.querySelector(".main-sec6 >h3");

but1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: sec1.offsetTop, behavior: "smooth" })
})

but2.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: sec2.offsetTop, behavior: "smooth" })
})

but3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: sec3.offsetTop-50, behavior: "smooth" })
})

buttop.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: topp.offsetTop, behavior: "smooth" })
})

littlebut1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlesec1.offsetTop, behavior: "smooth" })
})

littlebut2.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlesec2.offsetTop, behavior: "smooth" })
})

littlebut3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlesec3.offsetTop-50, behavior: "smooth" })
})
// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기






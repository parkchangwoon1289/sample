// 리틀박스 클릭시 하위메뉴박스 토글로 나오게 하는 js
const boxbut = document.querySelector(".littleBox>div");
const boxlist = document.querySelector(".boxlist");

boxbut.addEventListener("click", function(){
    boxbut.classList.toggle("active1"),
    boxlist.classList.toggle("active2")
})
// 리틀박스 클릭시  하위메뉴박스 토글로 나오게 하는 js


// 리틀박스 메뉴 클릭시 리틀박스 사라지게 하는 js
const boxbut11 = document.querySelector(".boxlist-1");
const boxbut22 = document.querySelector(".boxlist-2");

const boxlist00 = document.querySelector(".boxlist");

boxbut11.addEventListener("click", function(){
    boxlist00.classList.remove("active2"),
    boxbut.classList.toggle("active1")
})
boxbut22.addEventListener("click", function(){
    boxlist00.classList.remove("active2"),
    boxbut.classList.toggle("active1")
})
// 리틀박스 메뉴 클릭시 리틀박스 사라지게 하는 js


// // 자동 사진 넘김
// var slideIndexA = 0;
//     showSlidesA();

//     function showSlidesA() {
//         var i;
//         var slidesA = document.getElementsByClassName("mySlidesA");
       
//         for (i = 0; i < slidesA.length; i++) {
//             slidesA[i].style.display = "none"
//         }
//         slideIndexA++;
//         if (slideIndexA > slidesA.length) {
//             slideIndexA = 1
//         }
//         slidesA[slideIndexA - 1].style.display = "block";
    
//         setTimeout(showSlidesA, 2000); // 2초마다 이미지가 체인지
//     }
// // 자동 사진 넘김


// //swiper 관련
// const swiper = new Swiper(".my-swiper", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//         pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//         },
//     })
// //swiper 관련

// 글자들의 자동 색 변경
const changeA = document.querySelector(".ex1");
const changeB = document.querySelector(".ex2");
const changeC = document.querySelector(".ex3");
const changeD = document.querySelector(".ex4");
const changeE = document.querySelector(".ex5");

changeA.classList.toggle("act1");
changeB.classList.toggle("act2");
changeC.classList.toggle("act3");
changeD.classList.toggle("act4");
changeE.classList.toggle("act5");

setInterval(()=>{
    changeA.classList.toggle("act1"),
    changeB.classList.toggle("act2"),
    changeC.classList.toggle("act3"),
    changeD.classList.toggle("act4"),
    changeE.classList.toggle("act5")
}, 1000)
// 글자들의 자동 색 변경


// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기
const but1 = document.querySelector(".button1");
const but2 = document.querySelector(".button2");
const buttop = document.querySelector(".gotop>div>div");

const littlebut1 = document.querySelector(".boxlist-1");
const littlebut2 = document.querySelector(".boxlist-2");


const but11 = document.querySelector(".main-sec6");
const but22 = document.querySelector(".main-sec1");
const topp = document.querySelector(".header");

const littlebut11 = document.querySelector(".main-sec6>div");
const littlebut22 = document.querySelector(".main-sec1>div");


but1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: but11.offsetTop, behavior: "smooth" })
})
but2.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: but22.offsetTop, behavior: "smooth" })
})
buttop.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: topp.offsetTop, behavior: "smooth" })
})


littlebut1.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlebut11.offsetTop, behavior: "smooth" })
})
littlebut2.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: littlebut22.offsetTop, behavior: "smooth" })
})
// 웹페이지에서 버튼 클릭시 해당 페이지로 자동으로 내려가기






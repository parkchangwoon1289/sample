
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




// 버튼 클릭시 해당 페이지로 자동으로 내려가기

let but3 = document.querySelector(".button3");
let buttop = document.querySelector(".gotop>div");

let sec3 = document.querySelector(".main-sec6");
let topp = document.querySelector(".header-sec1");

but3.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: sec3.offsetTop-100, behavior: "smooth" })
})

buttop.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: topp.offsetTop, behavior: "smooth" })
})


// 버튼 클릭시 해당 페이지로 자동으로 내려가기
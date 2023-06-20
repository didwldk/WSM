// function sayhello(){
//     alert("안녕");
// }
// sayhello();

//1. HTML -> JS
// 햄버거 메뉴 -> navToggleDiv
// 햄버거 메뉴 i -> navToggleI
// /nav-list -> navListUl
// const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

//2. Event Handling
// nav_toggle.onclick = () => alert("밤톨주먹밥과 브로꼬리");//function 제외하며 간략화(람다식) and 중괄호 생략(1개일 때)
// nav_toggle.onclick = alert("안녕"); // 바로 실행

nav_toggle.onclick = () => {
    // 햄버거 메뉴 클릭 -> 햄버거 메뉴 i "bi bi-list" <-> X "bi bi-x-lg"
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    // 햄버거 메뉴 클릭 -> .nav-list에 .show-menu 보여주기 <-> 안보여주기
    navListUl.classList.toggle("show-menu");
}

//_____________________________________________________________________
//HTML -> JS

//1. id
// const navToggleDiv = document.getElementById("nav_toggle");
// nav_toggle; // JS 변수 규칙은 지켜야 함
//2. class
// const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];
//3. tag
//const navToggleDiv = document.getElementsByTagName("div")[0];
//4. querySelector, querySelectorAll
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelectorAll(".nav_toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];
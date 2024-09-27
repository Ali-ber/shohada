const body = document.querySelector(".body");
const menuHeader = document.querySelector(".menuHeader");
const backMenuHeader = document.querySelector(".backMenuHeader");
const checkbox = document.querySelector("#checkbox2");
const themeToggle = document.querySelector(".input");
const content = document.querySelector(".content");
const down = document.querySelector("#down");

const td = document.querySelectorAll("td");

themeToggle.checked = false;
checkbox.checked = false;
function toggleMenu() {
    if (checkbox.checked == false) {
        menuHeader.style.width = "60px";
        backMenuHeader.style.backgroundColor = "none";
        backMenuHeader.style.transition = "all 0.75s";
        backMenuHeader.style.display = "none";
    }else{
        menuHeader.style.width = "140px";
        backMenuHeader.style.backgroundColor = "#f5ab356c";
        backMenuHeader.style.transition = "all 0.75s";
        backMenuHeader.style.display = "block";
    }
}
function themeToggleBody() {
    if (themeToggle.checked == false) {
        body.style.backgroundColor = "#ffffff";
        body.style.transition = "all 1s";
    }else{
        body.style.backgroundColor = "#373737";
        body.style.transition = "all 1s";
    }
}
function downUp(){
    if (content.style.paddingBottom == "400px") {
        content.style.paddingBottom = "0px";
        down.style.transform = "rotate(0deg)";
    }else{
        content.style.paddingBottom = "400px";
        down.style.transform = "rotate(180deg)";
    }
}
function contentHover() {
    content.style.paddingBottom = "400px";
    down.style.transform = "rotate(180deg)";
}
function normal() {
    content.style.paddingBottom = "0px";
    down.style.transform = "rotate(0deg)";
}

const dutyLi = document.querySelectorAll('.dutyLi');
  function waitLi(){
    dutyLi.forEach((item) =>
    item.classList.remove('dutyLi'));
    this.classList.add('wait');
  }
  dutyLi.forEach((item) =>
  item.addEventListener('click',waitLi));

  
// const date = new Date;

// const myArray = date.toLocaleString("fa-IR", { dateStyle: "medium" }).split(" ", 3);
// alert(myArray[0]); //روز
// alert(myArray[1]); //ماه
// //alert(myArray[2]); //سال
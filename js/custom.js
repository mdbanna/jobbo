const selected = document.querySelector(".selected");
const selectedSpan = document.querySelector(".selected span");
const optionContainer = document.querySelector(".option-container");
const opsionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionContainer.classList.toggle("active");
});

opsionsList.forEach(o => {
    o.addEventListener("click", () => {
        selectedSpan.innerHTML = o.querySelector("label").innerHTML;
        optionContainer.classList.remove("active");
    });
});




$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
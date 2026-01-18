// let contanair =document.querySelector(".contanair");
let icon =document.querySelector(".search-icon");
let iconIn =document.querySelector(".icon-in");
let input =document.querySelector("input");
let nike =document.querySelector(".nike-search");

// document.getElementById("contan").addEventListener("mouseout", function() {
//     contanair.classList.remove("hide");
// });

// document.getElementById("contan").addEventListener("mouseleave", function() {
//     contanair.classList.add("hide");
// });

icon.addEventListener("mousemove", event => {
    event.target.style.backgroundColor ="#d6d6d6";
    iconIn.style.backgroundColor ="#d6d6d6"
    input.style.backgroundColor ="#e9e4e4";
    nike.style.backgroundColor ="#e9e4e4";
});

icon.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor ="#ededed";
    iconIn.style.backgroundColor ="#ededed"
    input.style.backgroundColor ="#ededed";
    nike.style.backgroundColor ="#ededed";
});

input.addEventListener("mousemove", event => {
    event.target.style.backgroundColor ="#d8d8d8";
    nike.style.backgroundColor ="#d8d8d8";
});

input.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor ="#ededed";
    nike.style.backgroundColor ="#ededed";
});

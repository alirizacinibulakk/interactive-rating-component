const divOne = document.querySelector(".rate-container")
const divTwo = document.querySelector(".thank-you")
const submitBtn = document.querySelector(".btn-submit")
const buttons = document.querySelectorAll(".btn")
const myRating = document.querySelector(".rating")

function pressOfButton(){
    divOne.style.display = "none";
    divTwo.classList.remove("div-off");
}
submitBtn.addEventListener("click", pressOfButton);

for (const button of buttons) {
    button.addEventListener('click', () => {
        myRating.innerText = button.innerText
    });
}

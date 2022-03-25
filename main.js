const checkInput = document.querySelector(".inputField input");
const checkButton = document.querySelector(".inputField button");
const response = document.querySelector(".response");
let filterInput;
checkButton.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    response.style.display = "block";
    if(filterInput != reverseInput) {
        return response.innerHTML = `No, <span>'${checkInput.value}'</span> isn't a palindrome!`;
    }else{
        response.innerHTML = `Yes, <span>'${checkInput.value}'</span> is a palindrome!`;
    }
    });
checkInput.addEventListener("keyup", () => {
    filterInput = checkInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkButton.classList.add("active");
    }
    response.style.display = "none";
    checkButton.classList.remove("active");
});
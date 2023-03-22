const ratings = document.querySelectorAll(".number");
let selectedRating = null;
let selectedValue = null;
const submitBtn = document.querySelector(".rtncontainer__btn");
const ratingComponent = document.querySelector(".rating");
const thankyouComponent = document.querySelector(".thankyou");

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        if (selectedRating) {
            selectedRating.classList.remove("selected");
        }
        rating.classList.toggle("selected");
        selectedRating = rating;
        selectedValue = rating.innerHTML;
    });
});

submitBtn.addEventListener("click", () => {
    if (selectedValue) {
        ratingComponent.classList.add("hidden");
        document.querySelector(".tycontainer__selected__rating").innerHTML = selectedValue;
        thankyouComponent.classList.remove("hidden");
    };
});

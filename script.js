const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

const stars = document.querySelectorAll(".stars button");
const ratingInput = document.getElementById("rating");

stars.forEach(function(star) {
    star.addEventListener("click", function () {
        const rating = star.getAttribute("data-rating");
        ratingInput.value = rating;

        stars.forEach(function(s) {
           s.classList.remove("selected");
        });

        for (let i = 0; i < rating; i++) {
            stars[i].classList.add("selected");
        }
        /*document.getElementById("rating").value = rating;*/
        console.log("Rating selected: " + rating + " stars");
    });
});

// number count for stats, using jQuery animate

const stars = document.querySelectorAll(".star-rating input[type='radio']");

stars.forEach((star) => {
    star.addEventListener("change", (e) => {
        const rating = e.target.value;
        console.log(`User rated ${rating} stars!`); // You can customize this behavior
    });
});



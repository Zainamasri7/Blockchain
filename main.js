// You can add interactive JavaScript here if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
});
// You can add interactive JavaScript here if needed
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.getElementById('getStarted');
    getStartedButton.addEventListener('click', function() {
        alert('Thank you for getting started with us!');
    });
});
/* JavaScript for Mobile Menu */
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger-menu");
    const nav = document.getElementById("nav-menu");
    burger.addEventListener("click", function() {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    });
});

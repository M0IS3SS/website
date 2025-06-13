const slides = [
    {   
        title: 'Programming Project',
        img: "images/Personal Logo.png",
        desc: "This project was from my CSE 24 class. It was a group project where we had to create a simple paint application in C++ using a custom GUI library called bobcatUI and GraphGL"
    },
    {   
        title: 'Tic Tac Toe',
        img: "images/linkedin.png",
        desc: "This was a project I did on my own. It is a simple tic tac toe game that I created using React."
    },
    {
        title: 'Login Page',
        img: "images/Projects Page.png",
        desc: "This is a simple login page that I created using react"
    }
];

let currentSlide = 0;

function showSlide(index) {
    const img = document.getElementById("slideshow-img");
    const desc = document.getElementById("slideshow-desc");
    const title = document.getElementById("slideshow-title");
    img.src = slides[index].img;
    desc.textContent = slides[index].desc;
    title.textContent = slides[index].title;
}

function nextImage() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevImage() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the first slide when the page loads
window.onload = function() {
    showSlide(currentSlide);
};
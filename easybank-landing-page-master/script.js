const mobile_nav = document.querySelector(".menu");

const nav_header = document.querySelector(".navbar-info");

const togglenavbar = () => {
    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click", () => togglenavbar());
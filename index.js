const navbar = document.querySelector(".header__navbar__flex");
const menuList = document.querySelectorAll(".navbar-menu-list");
const logoTransparent = document.querySelector(".trax-image");
const logoBlack = document.querySelector(".trax-image2");

document.addEventListener("scroll", () => {

    if (window.scrollY > 250) {
        navbar.style.backgroundColor = "white";
        menuList.forEach(element => {
            element.style.color = "black";
            element.style.fontWeight = "900";
        });
        logoTransparent.style.display = "none";
        logoBlack.style.display = "block";
        navbar.style.transform = "translateY(0)";
        navbar.style.position = "fixed";
    }
    else {

        if (window.scrollY > 100) {
            navbar.style.transform = "translateY(-100px)";
        }
        else {
            navbar.style.position = "static";
            navbar.style.backgroundColor = "black";
            menuList.forEach(element => {
                element.style.color = "white";
            });
            logoTransparent.style.display = "block";
            logoBlack.style.display = "none";
            navbar.style.transform = "translateY(0)";
        }
    }
})
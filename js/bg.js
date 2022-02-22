function burgerMenu() {
    let menu = document.querySelector('.bg-nav-mn');
    let button = menu.querySelector('.bg-menu-bttn');
    let links = menu.querySelectorAll('.bg-menu-item');
    let overlay = menu.querySelector('.bg-space-close');
    
      button.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });
    [].forEach.call(links, function (el) {
        el.addEventListener("click", () => toggleMenu());
    });
    overlay.addEventListener("click", () => toggleMenu());


    function toggleMenu() {
        menu.classList.toggle("bg-head-active");
        if (menu.classList.contains("bg-head-active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }
}
burgerMenu();
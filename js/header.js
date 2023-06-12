/** Close menu mobile when click in menu link */
window.linkCloseMenuMobile = function () {
    const btnMobile = document.querySelector("#btn-mobile");

    window.toggleMenuMobile(btnMobile, true);
}

/** Toggle menu mobile */
window.toggleMenuMobile = function (el, link = false) {
    const nav = document.querySelector("#header-menu");
    let active;

    nav.classList.toggle("active");
    el.classList.toggle("active");
    active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);

    if (active && !link) {
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";  // IE
    }

    else {
        document.documentElement.style.overflow = "initial";
        document.body.scroll = "yes";  // IE
    }
}
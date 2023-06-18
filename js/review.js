/** My rating */
window.leaveAReview = function (el) {
    const selectedStar = $(el).attr("id").split("-")[3];
    const icons = document.querySelectorAll("[data-review-star]");

    // Activate selected star and the previous
    for (let i = selectedStar; i > 0; i--) {
        if (icons[i - 1].classList.contains("active")) $(`#${icons[i - 1].id} .add-star`)[0].beginElement();
    }

    // Desactivate the next stars from selected
    for (let i = selectedStar; i < icons.length; i++) {
        if (!icons[i].classList.contains("active")) $(`#${icons[i].id} .remove-star`)[0].beginElement();
    }
}

/** Activate star when mouse over */
window.starHoverActive = function (el) {
    const selectedStar = $(el).attr("id").split("-")[3];
    const icons = document.querySelectorAll("[data-review-star]");

    // Activate selected star and the previous
    for (let i = selectedStar; i > 0; i--) {
        $(`#${icons[i - 1].id}`).addClass("active");
    }
}

/** Desactivate star when mouse leave */
window.starHoverInactive = function (el) {
    const selectedStar = $(el).attr("id").split("-")[3];
    const icons = document.querySelectorAll("[data-review-star]");

    // Activate selected star and the previous
    for (let i = selectedStar; i > 0; i--) {
        $(`#${icons[i - 1].id}`).removeClass("active");
    }
}
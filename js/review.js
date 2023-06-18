/** My rating */
window.leaveAReview = function (el) {
    const selectedStar = $(el).attr("id").split("-")[3];
    const icons = document.querySelectorAll("[data-review-star]");

    if ($(el).hasClass("selected")) {
        const iconsSelected = document.querySelectorAll("[data-review-star].selected");
        const lastIconSelected = $.map(iconsSelected, function (icon) {
            return $(icon).attr("id").split("-")[3];
        });

        // Desactivate the star and the previous
        if ($(el).attr("id").split("-")[3] === lastIconSelected[lastIconSelected.length - 1]) {
            for (let i = selectedStar; i > 0; i--) {
                $(`#${icons[i - 1].id} .remove-star`)[0].beginElement();
                $(`#${icons[i - 1].id}`).removeClass("selected");
            }
        }

        // Desactivate the next stars from selected
        for (let i = selectedStar; i < icons.length; i++) {
            $(`#${icons[i].id} .remove-star`)[0].beginElement();
            $(`#${icons[i].id}`).removeClass("selected");
        }
    }

    else {
        // Activate selected star and the previous
        for (let i = selectedStar; i > 0; i--) {
            $(`#${icons[i - 1].id} .add-star`)[0].beginElement();
            $(`#${icons[i - 1].id}`).addClass("selected");
        }

        // Desactivate the next stars from selected
        for (let i = selectedStar; i < icons.length; i++) {
            $(`#${icons[i].id} .remove-star`)[0].beginElement();
            $(`#${icons[i].id}`).removeClass("selected");
        }
    }
}

/** Activate star when mouse over */
window.starHoverActive = function (el) {
    const selectedStar = $(el).attr("id").split("-")[3];
    const icons = document.querySelectorAll("[data-review-star]");

    // Activate selected star and the previous
    for (let i = selectedStar; i > 0; i--) {
        $(`#${icons[i - 1].id}`).addClass("activeHover");
    }
}

/** Desactivate star when mouse leave */
window.starHoverInactive = function (el) {
    const selectedStar = $(el).attr("id").split("-")[3];
    const icons = document.querySelectorAll("[data-review-star]");

    // Activate selected star and the previous
    for (let i = selectedStar; i > 0; i--) {
        $(`#${icons[i - 1].id}`).removeClass("activeHover");
    }
}
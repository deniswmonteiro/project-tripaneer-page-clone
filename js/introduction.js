/** Add/remove trip from favorites list */
window.setFavorite = function (el) {
    const iconHeart = $(el).children()[0];
    const qtyPeopleInterest = $(".dm-qty-people").text();

    $(iconHeart).toggleClass("active");

    // Toast
    const toastBody = document.querySelector("#dm-favorite-toast .toast-body span");
    const toastLiveExample = document.querySelector("#dm-favorite-toast");

    bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();

    if ($(iconHeart).hasClass("active")) {
        // Add trip to favorites list
        $("#add-favorite")[0].beginElement();

        $(".dm-qty-people").text(function () {
            return Number(qtyPeopleInterest) + 1
        });

        $(toastBody).text("added to");
    }

    else {
        // Remove trip to favorites list
        $("#remove-favorite")[0].beginElement();

        $(".dm-qty-people").text(function () {
            return Number(qtyPeopleInterest) - 1;
        });

        $(toastBody).text("removed from");
    }
}
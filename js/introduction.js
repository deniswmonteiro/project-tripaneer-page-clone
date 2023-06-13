window.setFavorite = function (el) {
    const iconHeart = $(el).children()[0];
    const qtyPeopleInterest = $(".dm-qty-people").text();

    // Toast
    const toastBody = document.querySelector("#dm-favorite-toast .toast-body span");
    const toastLiveExample = document.querySelector("#dm-favorite-toast");

    bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();

    $(iconHeart).toggleClass("active");

    if ($(iconHeart).hasClass("active")) {
        $("#add-favorite")[0].beginElement();
        $(".dm-qty-people").text(function () {
            return Number(qtyPeopleInterest) + 1
        });

        $(toastBody).text("added to");
    }

    else {
        $("#remove-favorite")[0].beginElement();
        $(".dm-qty-people").text(function () {
            return Number(qtyPeopleInterest) - 1;
        });

        $(toastBody).text("removed from");
    }
}
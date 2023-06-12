window.setFavorite = function (el) {
    const iconHeart = $(el).children()[0];
    const qtyPeopleInterest = $(".ct-qty-people").text();

    // Toast
    const toastBody = document.querySelector("#ct-favorite-toast .toast-body span");
    const toastLiveExample = document.querySelector("#ct-favorite-toast");

    bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();

    $(iconHeart).toggleClass("active");

    if ($(iconHeart).hasClass("active")) {
        $("#add-favorite")[0].beginElement();
        $(".ct-qty-people").text(function () {
            return Number(qtyPeopleInterest) + 1
        });

        $(toastBody).text("added to");
    }

    else {
        $("#remove-favorite")[0].beginElement();
        $(".ct-qty-people").text(function () {
            return Number(qtyPeopleInterest) - 1;
        });

        $(toastBody).text("removed from");
    }
}
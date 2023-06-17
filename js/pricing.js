document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const sevenDaysFromToday = new Date();

    sevenDaysFromToday.setDate(today.getDate() + 7);

    $("#dm-arrival-date-input").daterangepicker({
        "maxSpan": {
            "days": 7
        },
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "startDate": today,
        "endDate": sevenDaysFromToday,
        "minDate": today,
        "opens": "center",
        "autoApply": true,
        "linkedCalendars": true,
    });
});

/** Change background when a package is selected */
window.changePackageBackground = function (el) {
    const formGroups = document.querySelectorAll("#dm-package .form-group");

    formGroups.forEach((group) => group.classList.remove("dm-active"));
    el.closest(".form-group").classList.add("dm-active");
}
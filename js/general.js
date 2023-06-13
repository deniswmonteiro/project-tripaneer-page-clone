/** Hide/show content from accordion */
window.toggleCollapse = function (el) {
    const btnIcon = document.querySelector(`#${el.parentNode.id} i`);
    const btnText = document.querySelector(`#${el.parentNode.id} span`);
    const accordionHeader = document.querySelectorAll("#dm-accordion-trip-description .accordion-button");
    const accordionBody = document.querySelectorAll("#dm-accordion-trip-description .accordion-collapse");

    // Handle button content
    if (btnIcon.classList.contains("bi-dash-lg")) {
        btnIcon.classList.remove("bi-dash-lg");
        btnIcon.classList.add("bi-plus-lg");
        btnText.innerText = "Expand All";
    }

    else {
        btnIcon.classList.remove("bi-plus-lg");
        btnIcon.classList.add("bi-dash-lg");
        btnText.innerText = "Hide All";
    }

    // Accordion header
    accordionHeader.forEach((header) => {
        header.classList.toggle("collapsed");

        if (header.classList.contains("collapsed")) header.setAttribute("aria-expanded", false);
        else header.setAttribute("aria-expanded", true);
    });

    // Accordion body
    accordionBody.forEach((body) => body.classList.toggle("show"));
}
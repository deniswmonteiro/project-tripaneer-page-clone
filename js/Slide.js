import Timeout from "./Timeout.js";

class Slide {
    constructor(containerId, slidesId, controlsId, time = 3000) {
        this.container = document.querySelector(`#${containerId}`);
        this.slides = Array.from(document.querySelectorAll(`#${slidesId} > *`));
        this.controls = document.querySelector(`#${controlsId}`);
        this.time = time;

        this.index = 0;
        this.slide = this.slides[this.index];
        this.timeout = null;
        this.paused = false;
        this.thumbItems = null;
        this.thumb = null;

        this.init();
    }

    hide(elem) {
        elem.classList.remove("active");
    }

    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];

        if (this.thumbItems) {
            this.thumb = this.thumbItems[this.index];
            this.thumbItems.forEach((thumb) => thumb.classList.remove("active"));
            this.thumb.classList.add("active");
        }

        this.slides.forEach((slide) => this.hide(slide));
        this.slide.classList.add("active");
        this.auto(this.time);
    }

    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);

        if (this.thumb) this.thumb.style.animationDuration = `${time}ms`;
    }

    prev() {
        if (this.paused) return;

        const prev = (this.index) > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }

    next() {
        if (this.paused) return;

        const next = (this.index + 1 < this.slides.length) ? this.index + 1 : 0
        this.show(next);
    }

    pause() {
        document.body.classList.add("paused");

        this.pausedTimeout = new Timeout(() => {
            this.timeout?.pause();
            this.paused = true;
            this.thumb?.classList.add("paused");
        }, 300);
    }

    continue() {
        document.body.classList.remove("paused");

        this.pausedTimeout?.clear();

        if (this.paused) {
            this.paused = false;
            this.timeout?.continue();
            this.thumb?.classList.remove("paused");
        }
    }

    configControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");

        this.controls.appendChild(prevButton);
        this.controls.appendChild(nextButton);

        this.controls.addEventListener("pointerdown", () => this.pause());
        document.addEventListener("pointerup", () => this.continue());
        document.addEventListener("touchend", () => this.continue());

        prevButton.innerText = "Previous";
        nextButton.innerText = "Next";

        prevButton.addEventListener("pointerup", () => this.prev());
        nextButton.addEventListener("pointerup", () => this.next());
    }

    configThumbItems() {
        const thumbContainer = document.createElement("div");

        thumbContainer.id = "ct-slide-thumb";

        for (let i = 0; i < this.slides.length; i++) {
            thumbContainer.innerHTML += "<span><span class='ct-thumb-item'></span></span>";
        }

        this.controls.appendChild(thumbContainer);
        this.thumbItems = Array.from(document.querySelectorAll(".ct-thumb-item"));
    }

    init() {
        this.configControls();
        this.configThumbItems();
        this.show(this.index);
    }
}

new Slide("ct-slide", "ct-slide-elements", "ct-slide-controls");
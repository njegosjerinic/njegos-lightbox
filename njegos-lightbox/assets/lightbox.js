document.addEventListener("click", (e) => {
  const images = [...document.querySelectorAll(".wp-block-image img")];

  const clickedImage = e.target.closest(".wp-block-image img");

  if (!clickedImage) return;

  let overlay = document.querySelector("#njegos-lightbox");

  const currentIndex = images.indexOf(clickedImage);
  let activeIndex = currentIndex;

  if (!overlay) {
    overlay = document.createElement("div");
    const leftArrow = document.createElement("div");
    const rightArrow = document.createElement("div");

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    leftArrow.className = "leftArrow";
    rightArrow.className = "rightArrow";

    leftArrow.innerHTML = "<";
    rightArrow.innerHTML = ">";

    overlay.id = "njegos-lightbox";

    const lightboxImage = document.createElement("img");

    overlay.appendChild(lightboxImage);
    overlay.appendChild(leftArrow);
    overlay.appendChild(rightArrow);

    document.body.appendChild(overlay);

    leftArrow.addEventListener("click", (e) => {
      e.stopPropagation();

      activeIndex--;

      if (activeIndex <= 0) {
        activeIndex = images.length - 1;
      }

      lightboxImage.src = images[activeIndex].src;
    });

    rightArrow.addEventListener("click", (e) => {
      e.stopPropagation();

      activeIndex++;

      if (activeIndex >= images.length) {
        activeIndex = 0;
      }

      lightboxImage.src = images[activeIndex].src;
    });

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      document.body.classList.remove("lightbox-open");
    });

    overlay.addEventListener(
      "touchstart",
      (event) => {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
      },
      false,
    );

    overlay.addEventListener(
      "touchend",
      (event) => {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGestures();
      },
      false,
    );

    function handleGestures() {
      //Swipe right to go left
      if (touchendX > touchstartX) {
        activeIndex--;

        if (activeIndex <= 0) {
          activeIndex = images.length - 1;
        }

        lightboxImage.src = images[activeIndex].src;
      }
      //Swipe left to go right
      if (touchendX < touchstartX) {
        activeIndex++;

        if (activeIndex >= images.length) {
          activeIndex = 0;
        }

        lightboxImage.src = images[activeIndex].src;
      }
    }
  }

  const lightboxImage = overlay.querySelector("img");

  lightboxImage.src = clickedImage.src;

  overlay.classList.add("active");
  document.body.classList.add("lightbox-open");
});

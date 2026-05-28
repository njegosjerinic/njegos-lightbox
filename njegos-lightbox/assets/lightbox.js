document.addEventListener("click", (e) => {
  const img = e.target.closest(".wp-block-image img");

  if (!img) return;

  let overlay = document.querySelector("#njegos-lightbox");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "njegos-lightbox";

    const lightboxImage = document.createElement("img");

    overlay.appendChild(lightboxImage);

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  }

  const lightboxImage = overlay.querySelector("img");

  lightboxImage.src = img.src;

  overlay.classList.add("active");
});

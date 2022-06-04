import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryRef = document.querySelector(".gallery");

function createMarkup(item) {
  return galleryRef.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </div>`
  );
}
galleryItems.map(createMarkup);

galleryRef.addEventListener("click", onClickOpenModal);

function onClickOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(`
    <img width="1400" height="900" src="${event.target.dataset.source}">
`);
  modal.show();

  function onEscCloseModal(event) {
    if (event.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onEscCloseModal);
    }
  }
  window.addEventListener("keydown", onEscCloseModal);
} 

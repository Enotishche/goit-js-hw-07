import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryList = makeBigGalleryImg(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryList);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onShow: (instance) => {
      document.addEventListener("keydown", onKeyDown);
    },
    onClose: (instance) => { document.removeEventListener("keydown", onKeyDown); },
  });
  instance.show();

  function onKeyDown(event) {
    if (event.key === "Escape") {
      instance.close();
    }
    
  }
});
  function makeBigGalleryImg(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join(" ");

  }




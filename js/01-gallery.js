import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onMakeBigPic);



const galleryList = galleryItems.map(({ preview, original, description }) => {
  return`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join(" ");

galleryEl.insertAdjacentHTML("beforeend", galleryList);

let instance
function onMakeBigPic (event) {
    event.preventDefault();
    if (event.currentTarget === event.target) { return; }
    instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    instance.show()
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
    if (event.key === "Escape") {
        instance.close()
        window.removeEventListener("keydown", onKeyDown)
        
    }
    
} 




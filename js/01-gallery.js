import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
let instance;

gallery.insertAdjacentHTML("afterbegin", createGalleryItemsMarkup(galleryItems));

gallery.addEventListener('click', onGalleryClick);
document.addEventListener('keydown', onDocumentKeyDown);

function createGalleryItemsMarkup (galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join('')
}

function onGalleryClick(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains('gallery__image')) {
    return;
  };
  
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
  `);

  instance.show();
}

function onDocumentKeyDown(event) {
  if (event.code === 'Escape') {    
    instance.close();    
  }
}


console.log(galleryItems);



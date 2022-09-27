import SimpleLightbox from 'simplelightbox';

// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css'; // Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(item => {
    const itemEl = `<a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                    </a>`;
    return itemEl;
  })
  .join('');
galleryContainerEl.insertAdjacentHTML('beforeend', galleryElements);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

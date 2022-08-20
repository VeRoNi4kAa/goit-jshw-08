// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const createMarkup = ({ original, preview, description }) => {
    return `<div class="gallery__item"><a href=${original} class="gallery__link">
  <img class="gallery__image" src=${preview} alt=${description} />
</a></div>
`;
};

const markup = galleryItems.map((item) => createMarkup(item)).join('');
const renderMarkup = (strings) => {
    galleryRef.insertAdjacentHTML('beforeend', strings);
};
renderMarkup(markup);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 500,
});

console.log(SimpleLightbox)
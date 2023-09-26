import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector(".gallery")
function createGallery (items){
    return items
    .map((item)=>`<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`)
 .join("");
}

const addGallery = createGallery(galleryItems);

galleryContainer.innerHTML = addGallery

function action (imgAction){
    imgAction.preventDefault()
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' , captionDelay: 100 });
console.log(galleryItems);

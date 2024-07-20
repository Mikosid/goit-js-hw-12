import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.js-loader'),
  loadmore: document.querySelector('.loadmore-button'),
};

const galleryBigImage = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.8,
  scrollZoom: false,
});

galleryBigImage.on('show.simplelightbox', function () {});

iziToast.settings({
  timeout: 2500,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
  titleSize: 25,
  messageSize: 25,
  backgroundColor: 'rgba(255, 182, 66, 0.8)',
});

function renderCard(imageData) {
  return imageData
    .map(
      el =>
        `<li class="card">
            <a href="${el.largeImageURL}" class="big gallery-link">
              <img
                src="${el.previewURL}"
                alt="${el.tags}"
                title="${el.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${el.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${el.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${el.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${el.downloads}</p>
              </li>
            </ul>
          </li>`
    )
    .join('');
}

export function handlerError(error) {
  refs.loader.classList.remove('loader');
  switch (error) {
    case 'outdata':
      iziToast.warning({
        title: 'Error',
        message: 'Введіть данні для пошуку!',
      });
      break;
    case 'nodata':
      iziToast.warning({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      break;
    default:
      iziToast.error({
        title: 'Error',
        message: 'Щось пішло не так. Ми працюемо над вирішенням питання!',
      });
      break;
  }
}

export function scrollCard() {
  const heightImageCard = document
    .querySelector('.card')
    .getBoundingClientRect().height;

  window.scrollBy({
    left: 0,
    top: Math.ceil(heightImageCard * 2),
    behavior: 'smooth',
  });
}

export function addImage(image) {
  refs.loader.classList.remove('loader');
  refs.gallery.insertAdjacentHTML('beforeend', renderCard(image));
  galleryBigImage.refresh();
}

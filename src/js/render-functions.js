import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

export function createCard(image) {
  return `
    <div class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery-link">
        <img src="${image.webformatURL}" alt="${
    image.tags
  }" class="gallery-image" />
      </a>
      <div class="item-info-block">
        ${createInfo('Likes', image.likes)}
        ${createInfo('Views', image.views)}
        ${createInfo('Comments', image.comments)}
        ${createInfo('Downloads', image.downloads)}
      </div>
    </div>
  `;
}

function createInfo(label, value) {
  return `
    <div class="block">
      <p class="title">${label}</p>
      <p class="amount">${value}</p>
    </div>
  `;
}

export function updateGallery(images) {
  const galleryListEl = document.querySelector('.gallery');

  const cardsHTML = images.map(image => createCard(image)).join('');
  galleryListEl.insertAdjacentHTML('beforeend', cardsHTML);
}

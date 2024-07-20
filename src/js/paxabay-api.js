import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const searchSettings = {
  key: '44836601-5a8b44801a2932315159889f0',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
  page: 1,
};

export async function fetchImage() {
  const response = await axios.get('/', { params: searchSettings });
  return response.data;
}

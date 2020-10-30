import axios from 'axios';

const API_KEY = process.env.VUE_APP_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

export const search = (query) => {
  return axios.get(BASE_URL + 's=' + query).then(({ data }) => data);
};

export default { search };

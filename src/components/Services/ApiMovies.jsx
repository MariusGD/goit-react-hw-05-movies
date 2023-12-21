import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'c27da5b3c1277e1c1476fa1a07679672';

axios.defaults.baseURL = BASE_URL;

const fetchTrends = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    throw error;
  }
};

const fetchMovie = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: KEY,
      },
    });
    return data;
  } catch (error) {
    console.error(
      `Error fetching movie details for ID ${movieId}:`,
      error.message
    );
    throw error;
  }
};

const fetchMovies = async query => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: {
        api_key: KEY,
        query,
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    throw error;
  }
};

const fetchCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
      },
    });
    return data;
  } catch (error) {
    console.error(
      `Error fetching cast for movie ID ${movieId}:`,
      error.message
    );
    throw error;
  }
};

const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
      },
    });
    return data;
  } catch (error) {
    console.error(
      `Error fetching reviews for movie ID ${movieId}:`,
      error.message
    );
    throw error;
  }
};

export { fetchTrends, fetchMovie, fetchMovies, fetchCast, fetchReviews };

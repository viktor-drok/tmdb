import axios from "axios";

const API_KEY = "507f4b30fdd119bf598a1f7b390f0f29";
const BASE_URL = 'https://api.themoviedb.org/3/';

const PATH_TRENDING_MOVIE = 'movie/popular'; // - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
const PATH_NOW_PLAYING_MOVIE = 'movie/now_playing';
const PATH_UPCOMING_MOVIE = 'movie/upcoming';
const PATH_TOP_RATED_MOVIE = 'movie/top_rated';

const PATH_TRENDING_TV = 'tv/popular';
const PATH_ON_AIR_TV = 'tv/on_the_air';
const PATH_TOP_RATED_TV = 'tv/top_rated';
const PATH_AIRING_TV = 'tv/airing_today';

const PATH_SEARCH = 'search/movie'; // - пошук фільму за ключовим словом на сторінці фільмів.
const PATH_MOVIE_DETAILS = 'movie'; // - запит повної інформації про фільм для сторінки кінофільму.
const PATH_TVSHOW_DETAILS = 'tv';

const PATH_CREDITS = 'credits'; // - запит інформації про акторський склад для сторінки кінофільму.
const PATH_REVIEWS = 'reviews'; // - запит оглядів для сторінки кінофільму.

const PATH_VIDEOS = 'videos'; // - запит оглядів для сторінки кінофільму.


const fetchPath = path => axios.get(path).then(r => r.data);

//--------------- MOVIE QUERIES

export const fetchPopularMovies = () => fetchPath(`${BASE_URL + PATH_TRENDING_MOVIE}?api_key=${API_KEY}`);

export const fetchNowPlayingMovies = () => fetchPath(`${BASE_URL + PATH_NOW_PLAYING_MOVIE}?api_key=${API_KEY}`);

export const fetchUpcomingMovies = () => fetchPath(`${BASE_URL + PATH_UPCOMING_MOVIE}?api_key=${API_KEY}`);

export const fetchTopRatedMovies = () => fetchPath(`${BASE_URL + PATH_TOP_RATED_MOVIE}?api_key=${API_KEY}`);

// https://api.themoviedb.org/3/movie/{movie_id}/videos
export const fetchMoviesVideos = movieId => fetchPath(`${BASE_URL + PATH_MOVIE_DETAILS}/${movieId}/${PATH_VIDEOS}?api_key=${API_KEY}`);

//---------------- TV SHOWS QUERIES

export const fetchPopularTv = () => fetchPath(`${BASE_URL + PATH_TRENDING_TV}?api_key=${API_KEY}`);

export const fetchOnAirTv = () => fetchPath(`${BASE_URL + PATH_ON_AIR_TV}?api_key=${API_KEY}`);

export const fetchTopRatedTv = () => fetchPath(`${BASE_URL + PATH_TOP_RATED_TV}?api_key=${API_KEY}`);

export const fetchAiringTv = () => fetchPath(`${BASE_URL + PATH_AIRING_TV}?api_key=${API_KEY}`);

export const fetchTvShowData = movieId => fetchPath(`${BASE_URL + PATH_TVSHOW_DETAILS}/${movieId}?api_key=${API_KEY}`);

export const fetchTvShowCredits = movieId => fetchPath(`${BASE_URL + PATH_TVSHOW_DETAILS}/${movieId}/${PATH_CREDITS}?api_key=${API_KEY}`).then(r => r.cast);

//----------------

export const fetchFilmData = movieId => fetchPath(`${BASE_URL + PATH_MOVIE_DETAILS}/${movieId}?api_key=${API_KEY}`);

export const fetchFilmCredits = movieId => fetchPath(`${BASE_URL + PATH_MOVIE_DETAILS}/${movieId}/${PATH_CREDITS}?api_key=${API_KEY}`).then(r => r.cast);

export const fetchFilmList = ({ query = 'trending', page = 1 }) => fetchPath(`${BASE_URL + PATH_SEARCH}?api_key=${API_KEY}&query=${query}&page=${page}`);

export const fetchFilmReviews = movieId => fetchPath(`${BASE_URL + PATH_MOVIE_DETAILS}/${movieId}/${PATH_REVIEWS}?api_key=${API_KEY}`).then(r => r.results);


// export const fetchFilmDiscussion = movieId => fetchPath(`https://www.themoviedb.org/${PATH_MOVIE_DETAILS}/${movieId}/remote/social_panel/discussions`).then(r => r.results);
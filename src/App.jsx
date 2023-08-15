import "./App.css";

import "swiper/css";
import "swiper/css/scrollbar";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import MoviePopular from "./components/movie/MoviePopular";
import MovieNowPlaying from "./components/movie/MovieNowPlaying";
import MovieTopRated from "./components/movie/MovieTopRated";
import MovieUpcoming from "./components/movie/MovieUpcoming";
import Movie from "./components/Movie";
import TvPopular from "./components/TvShows/TvPopular";
import TvOnAir from "./components/TvShows/TvOnAir";
import TvTopRated from "./components/TvShows/TvTopRated";
import TvAiring from "./components/TvShows/TvAiring";
import TvShow from "./components/TvShow";

function App() {
	return (
		<Routes>
			<Route path={process.env.PUBLIC_URL} element={<Layout />}>
				<Route index element={<MoviePopular />} />
				<Route path=":id" element={<Movie />} />

				<Route path="movies/popular" element={<MoviePopular />} />
				<Route path="movies/popular/:id" element={<Movie />} />
				<Route path="movies/nowplaying" element={<MovieNowPlaying />} />
				<Route path="movies/nowplaying/:id" element={<Movie />} />
				<Route path="movies/topraited" element={<MovieTopRated />} />
				<Route path="movies/topraited/:id" element={<Movie />} />
				<Route path="movies/upcoming" element={<MovieUpcoming />} />
				<Route path="movies/upcoming/:id" element={<Movie />} />

				<Route path="tvshows/popular" element={<TvPopular />} />
				<Route path="tvshows/popular/:id" element={<TvShow />} />
				<Route path="tvshows/ontv" element={<TvOnAir />} />
				<Route path="tvshows/ontv/:id" element={<TvShow />} />
				<Route path="tvshows/topraited" element={<TvTopRated />} />
				<Route path="tvshows/topraited/:id" element={<TvShow />} />
				<Route path="tvshows/airingtoday" element={<TvAiring />} />
				<Route path="tvshows/airingtoday/:id" element={<TvShow />} />
			</Route>
		</Routes>
	);
}

export default App;

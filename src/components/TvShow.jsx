import Box from "@mui/material/Box";

import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchTvShowCredits, fetchTvShowData } from "../services/fetchData";
import AllMovieSchema from "./AllMovieSchema";
// import useCustomQueries from "../services/useCustomQueries";

const TvShow = () => {
	const { id } = useParams();

	// const queries = [
	// 	{ queryKey: ["actor"], queryFn: () => fetchFilmCredits(id) },
	// 	{ queryKey: ["movie", id], queryFn: () => fetchFilmData(id) },
	// ];

	// const [movieQuery, actorQuery] = useCustomQueries(queries);

	// console.log(movieQuery?.data, actorQuery.data);

	const [actorQuery, movieQuery] = useQueries({
		queries: [
			{ queryKey: ["actorTvShow"], queryFn: () => fetchTvShowCredits(id) },
			{ queryKey: ["tvShow", id], queryFn: () => fetchTvShowData(id) },
		],
	});

	if (movieQuery.isLoading) {
		return <span>Loading...</span>;
	}

	if (movieQuery.isError) {
		return <span>Error: {movieQuery.error.message}</span>;
	}

	return (
		<Box position="relative">
			<AllMovieSchema
				movieBackdrop={movieQuery?.data.backdrop_path}
				moviePoster={movieQuery?.data.poster_path}
				movieTitle={movieQuery?.data.title}
				movieReleaseDate={movieQuery.data?.release_date}
				movieGenres={movieQuery?.data.genres}
				movieRunTime={movieQuery?.data.runtime}
				movieOverview={movieQuery?.data.overview}
				movieTagline={movieQuery?.data.tagline}
				movieVoteAvarage={movieQuery?.data.vote_average}
				actorData={actorQuery?.data}
			/>
		</Box>
	);
};
export default TvShow;

import { useQuery } from "@tanstack/react-query";
import AllPagesSchema from "../AllPagesSchema";
import { fetchNowPlayingMovies } from "../../services/fetchData";

const MovieNowPlaying = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["nowPlayingMovies"],
		queryFn: fetchNowPlayingMovies,
		keepPreviousData: true,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div>
			<h4>Now Playing Movies</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default MovieNowPlaying;

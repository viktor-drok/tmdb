import { useQuery } from "@tanstack/react-query";

import AllPagesSchema from "../AllPagesSchema";
import { fetchTopRatedMovies } from "../../services/fetchData";

const MovieTopRated = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["topRatedMovies"],
		queryFn: fetchTopRatedMovies,
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
			<h4>Top Raited Movies</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default MovieTopRated;

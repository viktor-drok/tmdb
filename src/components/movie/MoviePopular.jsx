import { useQuery } from "@tanstack/react-query";

import { fetchPopularMovies } from "../../services/fetchData";
import AllPagesSchema from "../AllPagesSchema";

const MoviePopular = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["popularMovies"],
		queryFn: fetchPopularMovies,
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
			<h4>Popular Movies</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default MoviePopular;

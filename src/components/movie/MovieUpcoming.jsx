import { useQuery } from "@tanstack/react-query";

import AllPagesSchema from "../AllPagesSchema";
import { fetchUpcomingMovies } from "../../services/fetchData";

const MovieUpcoming = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["upcomingMovies"],
		queryFn: fetchUpcomingMovies,
		keepPreviousData: true,
		suspense: true,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div>
			<h4>Upcoming Movies</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default MovieUpcoming;

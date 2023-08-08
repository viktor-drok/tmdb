import { useQuery } from "@tanstack/react-query";

import AllPagesSchema from "../AllPagesSchema";
import { fetchTopRatedTv } from "../../services/fetchData";

const TvTopRated = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["tvTopRated"],
		queryFn: fetchTopRatedTv,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div>
			<h4>Top Raited TV Shows</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default TvTopRated;

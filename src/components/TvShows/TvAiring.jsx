import { useQuery } from "@tanstack/react-query";

import AllPagesSchema from "../AllPagesSchema";
import { fetchAiringTv } from "../../services/fetchData";

const TvAiring = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["tvAiring"],
		queryFn: fetchAiringTv,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div>
			<h4>Airing TV Shows</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default TvAiring;

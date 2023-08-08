import { useQuery } from "@tanstack/react-query";

import { fetchPopularTv } from "../../services/fetchData";
import AllPagesSchema from "../AllPagesSchema";

const TvPopular = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["tvPopular"],
		queryFn: fetchPopularTv,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}
	return (
		<div>
			<h4>Popular TV Shows</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default TvPopular;

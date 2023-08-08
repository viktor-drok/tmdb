import { useQuery } from "@tanstack/react-query";
import AllPagesSchema from "../AllPagesSchema";
import { fetchOnAirTv } from "../../services/fetchData";

const TvOnAir = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["tvOnAir"],
		queryFn: fetchOnAirTv,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div>
			<h4>On Air Tv Shows</h4>
			<AllPagesSchema data={data} />
		</div>
	);
};
export default TvOnAir;

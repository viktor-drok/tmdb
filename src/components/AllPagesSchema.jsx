import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";
import Raiting from "./Raiting";
import { useNavigate } from "react-router-dom";

const AllPagesSchema = ({ data, isLoading }) => {
	const navigate = useNavigate();

	const handleCardClick = id => {
		navigate(id.toString());
	};

	return (
		<Container>
			<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mt={2} justifyContent="center">
				{data.results.map((movie, i) => (
					<Box key={i}>
						<Card sx={{ maxWidth: 175, height: "100%" }}>
							<CardActionArea onClick={() => handleCardClick(movie.id)}>
								<CardMedia
									sx={{ objectFit: "contain" }}
									component="img"
									image={
										movie.poster_path === null
											? "https://placehold.co/175"
											: `https://image.tmdb.org/t/p/original${movie.poster_path}`
									}
								/>
							</CardActionArea>
							<CardContent sx={{ position: "relative", marginTop: "15px" }}>
								<Box style={{ position: "absolute", top: -35, left: 15 }}>
									<Raiting vote_average={movie.vote_average} size={40} />
								</Box>
								<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
									{movie.title || movie.name}
								</Typography>
								<Typography variant="body2" textOverflow="clip">
									{movie.release_date || movie.first_air_date}
								</Typography>
							</CardContent>
						</Card>
					</Box>
				))}
			</Stack>
		</Container>
	);
};
export default AllPagesSchema;

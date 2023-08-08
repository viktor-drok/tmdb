import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";

const Actors = ({ actorImage, actorName, actorRole }) => {
	return (
		<Card sx={{ width: 150, height: 300, margin: "15px" }}>
			<CardActionArea>
				<CardMedia
					image={actorImage === null ? `https://placehold.co/150` : `https://image.tmdb.org/t/p/original${actorImage}`}
					// src={actorImage === null ? `https://placehold.co/150` : `https://image.tmdb.org/t/p/original${actorImage}`}
					title={actorName}
					sx={{ width: 150, height: 150 }}
				/>
			</CardActionArea>
			<CardContent>
				<Stack>
					<Typography variant="h5">{actorName}</Typography>
					<Typography variant="body1" component="p">
						{actorRole}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};
export default Actors;

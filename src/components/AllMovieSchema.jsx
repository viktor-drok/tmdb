import { Box, IconButton, Stack, Typography, Divider } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import Raiting from "./Raiting";
import Actors from "./Actors";
import Social from "./Social";
import Media from "./Media";

const AllMovieSchema = ({
	id,
	movieBackdrop,
	moviePoster,
	movieTitle,
	movieReleaseDate,
	movieGenres,
	movieRunTime,
	movieOverview,
	movieTagline,
	movieVoteAvarage,
	actorData,
}) => {
	return (
		<>
			<Stack>
				<Box
					sx={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieBackdrop})`,
						filter: "brightness(0.6)",
						backgroundSize: "cover",
						opacity: 0.8,
						position: "absolute",
						top: 16,
						left: 0,
						width: "100%",
						height: 498,
						zIndex: -1,
					}}
				></Box>
				<Stack direction="row" p={5}>
					<img
						src={`https://image.tmdb.org/t/p/original/${moviePoster}`}
						alt="poster"
						width={300}
						style={{ borderRadius: "10px" }}
					/>
					<Stack direction="column" p={3} gap={0}>
						<Typography variant="h3" component="h1">
							{movieTitle}
						</Typography>
						<Stack direction="row" gap={1}>
							<Typography variant="body1" component="p" sx={{ fontWeight: 600 }}>
								{movieReleaseDate?.split("-").join("/")}
							</Typography>
							•
							<Typography variant="body1" component="p" sx={{ fontWeight: 600 }}>
								{movieGenres.map(genre => genre.name).join(", ")}
							</Typography>
							•
							<Typography variant="body1" component="p" sx={{ fontWeight: 600 }}>
								{`${Math.floor(movieRunTime / 60)}h ${Math.floor(movieRunTime % 60)}m`}
							</Typography>
						</Stack>
						<Stack direction="row" alignItems="center" gap={2}>
							<Stack direction="row" alignItems="center" gap={1}>
								<Raiting vote_average={movieVoteAvarage} />

								<Typography variant="subtitle1" sx={{ fontWeight: 700, width: 50, lineHeight: 1.2 }}>
									User Score
								</Typography>
							</Stack>

							<Stack direction="row" alignItems="center" gap={2}>
								<IconButton
									sx={{
										width: 46,
										height: 46,
										borderRadius: "50%",
										background: "#032541",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#fff",
									}}
								>
									<FormatListBulletedIcon />
								</IconButton>

								<IconButton
									sx={{
										width: 46,
										height: 46,
										borderRadius: "50%",
										background: "#032541",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#fff",
									}}
								>
									<FavoriteIcon fontSize="small" />
								</IconButton>

								<IconButton
									sx={{
										width: 46,
										height: 46,
										borderRadius: "50%",
										background: "#032541",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#fff",
									}}
								>
									<BookmarkIcon fontSize="small" />
								</IconButton>

								<IconButton
									sx={{
										width: 46,
										height: 46,
										borderRadius: "50%",
										background: "#032541",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#fff",
									}}
								>
									<StarIcon fontSize="small" />
								</IconButton>
							</Stack>
						</Stack>

						<Typography variant="body1" component="p" sx={{ fontStyle: "italic" }}>
							{movieTagline}
						</Typography>

						<Typography variant="h6" sx={{ fontWeight: 600 }}>
							Overview
						</Typography>

						<Typography variant="body1" component="p">
							Overview{movieOverview}
						</Typography>
					</Stack>
				</Stack>

				<div>
					<Swiper modules={[Scrollbar]} scrollbar={{ hide: true, dragSize: "auto" }} spaceBetween={5} slidesPerView={9}>
						{actorData?.map(actor => (
							<SwiperSlide key={actor?.id}>
								<Stack direction="row" gap={5} flexWrap="wrap">
									<Actors actorImage={actor?.profile_path} actorName={actor?.name} actorRole={actor?.character} />
								</Stack>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<Divider sx={{ my: 5 }} />
				<Social movieId={id} />
				<Divider sx={{ my: 5 }} />
				<Media movieId={id} />
			</Stack>
		</>
	);
};
export default AllMovieSchema;

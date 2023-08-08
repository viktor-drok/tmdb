import { Box, Stack, Tab, Typography, Modal, Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchMoviesVideos } from "../services/fetchData";
import CastomTabList from "./CastomTabList";
import { TabContext } from "@mui/lab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "80%",
	height: "80%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const Media = ({ movieId }) => {
	const { data: videos } = useQuery({
		queryKey: ["videos", movieId],
		queryFn: () => fetchMoviesVideos(movieId),
		select: data => data.results,
		enabled: !!movieId,
	});

	// const swiperSlide = useSwiperSlide();

	const tabLabel = ["Videos", "Backdrop", "Posters"];

	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [movieToPlay, setMovieToPlay] = useState("");
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(prev => !prev);
	const handleClose = () => setOpen(prev => !prev);

	return (
		<Stack direction="row">
			<Typography variant="h4">Media</Typography>

			<TabContext value={value}>
				<Stack>
					<Box>
						<CastomTabList handleChange={handleChange}>
							{tabLabel.map((label, i) => (
								<Tab
									key={label}
									label={
										label === "Most Popular"
											? label + " " + videos?.length
											: label || label === "Backdrop"
											? label + " " + videos?.length
											: label || label === "Videos"
											? label + " " + videos?.length
											: label || label === "Posters"
											? label + " " + videos?.length
											: label
									}
									value={`${i + 1}`}
									sx={{ fontWeight: 700 }}
								/>
							))}
						</CastomTabList>
					</Box>
					<Box>
						<Box pt={2} sx={{ width: "calc(100vw - 200px)" }}>
							<Swiper slidesPerView={5} spaceBetween={30} navigation modules={[Navigation]}>
								{videos?.map(video => (
									<SwiperSlide
										key={video.key}
										onClick={e => {
											setMovieToPlay(e.target.alt);
											handleOpen(video.key);
										}}
									>
										<img
											src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
											alt={video?.key}
											width={240}
											height={180}
										/>
									</SwiperSlide>
								))}
							</Swiper>
							{/* <p>Current slide is {swiperSlide?.isActive ? "active" : "not active"}</p> */}

							<Pagination
								mt={2}
								count={videos?.length}
								color="primary"
								variant="outlined"
								shape="rounded"
								boundaryCount={2}
							/>

							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
								<iframe
									style={style}
									width="560"
									height="315"
									src={`https://www.youtube.com/embed/${movieToPlay}`}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								></iframe>
							</Modal>
						</Box>
					</Box>
					{/* <Box>
						<Grid container spacing={2} pt={2}>
							{videos?.slice(0, 3).map(video => (
								<Grid
									item
									key={video.key}
									onClick={e => {
										setMovieToPlay(e.target.alt);
										handleOpen(video.key);
									}}
								>
									<img src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`} alt={video?.key} />
								</Grid>
							))}
						</Grid>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<iframe
								style={style}
								width="560"
								height="315"
								src={`https://www.youtube.com/embed/${movieToPlay}`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe>
						</Modal>
					</Box> */}
				</Stack>
			</TabContext>
		</Stack>
	);
};
export default Media;

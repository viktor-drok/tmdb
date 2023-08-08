import { Avatar, Box, Card, CardContent, Stack, Tab, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchFilmReviews } from "../services/fetchData";
import { TabContext, TabPanel } from "@mui/lab";
import CastomTabList from "./CastomTabList";

const Social = ({ movieId }) => {
	const { data: reviews } = useQuery({
		queryKey: ["reviews", movieId],
		queryFn: () => fetchFilmReviews(movieId),
		enabled: !!movieId,
	});

	const tabLabel = ["Reviews", "Discussions"];

	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Stack direction="row">
			<Typography variant="h4">Social</Typography>

			<TabContext value={value}>
				<Stack>
					<Box>
						<CastomTabList handleChange={handleChange}>
							{tabLabel.map((label, i) => (
								<Tab
									key={label}
									label={label === "Reviews" ? label + " " + reviews?.length : label}
									value={`${i + 1}`}
									sx={{ fontWeight: 700 }}
								/>
							))}
						</CastomTabList>
						{/* <TabList
							onChange={handleChange}
							sx={{
								"& button": { color: "#000" },
								"& button.Mui-selected": { color: "#000" },
								"& .MuiTabs-indicator": { backgroundColor: "#000", height: 5 },
							}}
						>
							{tabLabel.map((label, i) => (
								<Tab
									key={label}
									label={label === "Reviews" ? label + " " + reviews?.length : label}
									value={`${i + 1}`}
									sx={{ fontWeight: 700 }}
								/>
							))}
						</TabList> */}
					</Box>
					{reviews?.length > 0 ? (
						[reviews[Math.floor(Math.random() * reviews.length)]].map(review => (
							<TabPanel key={review.id} value={value}>
								<Card>
									<Stack direction="row" m={2}>
										<Avatar
											src={
												review?.author_details?.avatar_path?.includes("http")
													? review?.author_details?.avatar_path?.slice(1)
													: `https://secure.gravatar.com/avatar${review?.author_details?.avatar_path}`
											}
										>
											{review?.author_details?.username.at(0).toUpperCase()}
										</Avatar>

										<CardContent sx={{ padding: 0 }}>
											<Stack ml={2}>
												<Typography variant="h6" mb={4}>
													{`A review by ${review?.author_details?.username}`}
												</Typography>

												<Typography variant="body1">
													{reviews !== 0
														? review?.content?.length > 200
															? `${review?.content?.slice(0, 200)}...`
															: review?.content
														: null}
												</Typography>
											</Stack>
										</CardContent>
									</Stack>
								</Card>
							</TabPanel>
						))
					) : (
						<Typography variant="body1" mt={4}>
							We don't have any reviews. Would you like to write one?
						</Typography>
					)}
				</Stack>
			</TabContext>
		</Stack>
	);
};
export default Social;

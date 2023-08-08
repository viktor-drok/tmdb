const Raiting = ({ vote_average, size = 60 }) => {
	return (
		<div style={{ height: size, width: size, borderRadius: "50%", backgroundColor: "#081c22", position: "relative" }}>
			<div
				style={{
					height: size * 0.9,
					width: size * 0.9,
					borderRadius: "50%",
					background: `conic-gradient(rgb(33, 208, 122) ${vote_average * 36}deg,  rgba(33, 208, 122, 0.3) 0deg)`,
					position: "absolute",
					transform: "translate(-50%, -50%)",
					top: "50%",
					left: "50%",
				}}
			>
				<div
					style={{
						height: size * 0.75,
						width: size * 0.75,
						borderRadius: "50%",
						backgroundColor: "#081c22",
						position: "absolute",
						transform: "translate(-50%, -50%)",
						top: "50%",
						left: "50%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "0",
						margin: "0",
						color: "#fff",
					}}
				>
					{Math.floor(vote_average * 10)}
					<sup>%</sup>
				</div>
			</div>
		</div>
	);
};
export default Raiting;

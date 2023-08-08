import { TabList } from "@mui/lab";

const CastomTabList = ({ children, handleChange }) => {
	return (
		<TabList
			onChange={handleChange}
			sx={{
				"& button": { color: "#000" },
				"& button.Mui-selected": { color: "#000" },
				"& .MuiTabs-indicator": { backgroundColor: "#000", height: 5 },
			}}
		>
			{children}
		</TabList>
	);
};
export default CastomTabList;

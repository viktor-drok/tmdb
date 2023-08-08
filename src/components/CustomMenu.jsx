import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomMenu = ({ page, menuItemList }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button sx={{ color: "#fff", textTransform: "none" }} onClick={handleClick}>
				{page}
			</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				{Object.keys(menuItemList).map(
					item =>
						item === page &&
						menuItemList[item].map(listItem => (
							<NavLink
								to={`/${item.toLowerCase().replace(" ", "")}/${listItem.toLowerCase().replace(" ", "")}`}
								style={{ color: "inherit", textDecoration: "none" }}
							>
								<MenuItem key={listItem} onClick={handleClose}>
									{listItem}
								</MenuItem>
							</NavLink>
						)),
				)}
			</Menu>
		</div>
	);
};

export default CustomMenu;

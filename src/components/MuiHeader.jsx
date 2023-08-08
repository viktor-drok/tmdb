import {
	Container,
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Avatar,
	Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomMenu from "./CustomMenu";

const MuiHeader = () => {
	const pages = ["Movies", "TV Shows", "People", "More"];
	const menuItemList = {
		Movies: ["Popular", "Now Playing", "Upcoming", "Top Raited"],
		"TV Shows": ["Popular", "Airing Today", "On TV", "Top Raited"],
		People: ["Popular People"],
		More: ["Descussions", "Leaderboard", "Support", "API"],
	};
	const settings = ["Profile", "Account", "Dashboard", "Logout"];

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<AppBar position="static" sx={{ backgroundColor: "rgb(3,37,65)", margin: "0px" }}>
			<Container>
				<Toolbar disableGutters>
					<NavLink to="/" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>
						TMDB
					</NavLink>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map(page => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} gap="20px" ml="20px">
						{pages.map(page => (
							<CustomMenu page={page} key={page} menuItemList={menuItemList} />
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default MuiHeader;

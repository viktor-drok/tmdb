import { Outlet } from "react-router-dom";
import MuiHeader from "./MuiHeader";

const Layout = () => {
	return (
		<>
			<header>
				<MuiHeader />
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
};
export default Layout;

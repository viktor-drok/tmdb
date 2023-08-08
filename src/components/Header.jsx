import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href="#home">TMDB</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Фільми" id="basic-nav-dropdown">
							<NavDropdown.Item as={"div"}>
								<Link to="movie/popular">Популярні</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link to="movie/nowplaying">Зараз у кіно</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link to="movie/upcoming">Очікувані</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link to="movie/topraited">Рейтингові</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Серіали" id="basic-nav-dropdown">
							<NavDropdown.Item as={"div"}>
								<Link>Популярні</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link>Сьогодні в ефірі</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link>Зараз на ТБ</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link>Рейтингові</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Персони" id="basic-nav-dropdown">
							<NavDropdown.Item as={"div"}>
								<Link>Популярні</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Ще" id="basic-nav-dropdown">
							<NavDropdown.Item as={"div"}>
								<Link>Обговорення</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link>Таблиця лідерів</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link>Підтримка</Link>
							</NavDropdown.Item>
							<NavDropdown.Item as={"div"}>
								<Link>API</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Header;

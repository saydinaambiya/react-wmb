import constants from "../../constants";
import useToken from "../../hooks/useToken";
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Col, Container, Navbar} from "react-bootstrap";
import {StyledNav} from "./styles";
import Swal from "sweetalert2";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const menu = [
    {path: constants.ROUTES.FOOD, menuName: "Menu"},
    {path: constants.ROUTES.TABLE, menuName: "Table"}
]

const NavBarComp = () => {
    const {removeToken} = useToken();
    const navigate = useNavigate();
    const onLogout = async () => {
        removeToken();
        await Swal.fire({
            icon:"success",
            title:"Logout Success",
            timer:5000
        })
        navigate(constants.ROUTES.LOGIN)
    }

    return (
        <Navbar bg="light" expand="light" sticky={"top"}>
            <Container>
                <Col>
                    <Navbar.Brand href={constants.ROUTES.DASHBOARD}><RestaurantIcon/> <strong>WMB</strong> 1.0.0</Navbar.Brand>
                </Col>
                <Col className="col-2">
                    <StyledNav>
                        {menu?.map((item, index) => (
                            <NavLink
                                to={item.path}
                                className="nav-link mx-3"
                                key={index}
                            >
                                {item.menuName}
                            </NavLink>
                        ))}
                    </StyledNav>
                </Col>
                <Col className="col-1">
                    <Button variant="danger" onClick={onLogout}>
                        Logout
                    </Button>
                </Col>
            </Container>
        </Navbar>
    )
}

export default NavBarComp;
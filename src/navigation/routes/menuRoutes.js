import constants from "../../constants";
import {AddMenu, MenuList} from "../../pages";

const {ROUTES} = constants;

const menuRoutes ={
    path: ROUTES.FOOD,
    children: [
        {index: true, element: <MenuList/>},
        {path: ROUTES.ADD_FOOD, element: <AddMenu/>}
    ]
}

export default menuRoutes;
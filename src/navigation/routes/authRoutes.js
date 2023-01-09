import {React} from "react";
import constants from "../../constants";
import Login from "../../pages/Login";

const {ROUTES} = constants;

const authRoutes = ({
    path: ROUTES.AUTH,
    children: [
        {index: true, path: ROUTES.LOGIN, element: <Login/>}
    ]
});

export default authRoutes;
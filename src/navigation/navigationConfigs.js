import React from "react";
import constants from "../constants";
import {createBrowserRouter} from "react-router-dom";
import {Dashboard, PageNotFound} from "../pages";
import ProtectedRoutes from "./components/ProtectedRoutes";
import menuRoutes from "./routes/menuRoutes";
import tableRoutes from "./routes/tableRoutes";
import authRoutes from "./routes/authRoutes";

const {ROUTES} = constants;

const navigationConfigs = createBrowserRouter([
    {path: "*", element:<PageNotFound/>},
    {
        path: ROUTES.DASHBOARD,
        element: <ProtectedRoutes/>,
        children:[{index: true, element: <Dashboard/>}, menuRoutes, tableRoutes]
    },
    authRoutes,
])

export default navigationConfigs;
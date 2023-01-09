import constants from "../../constants";
import {AddTable, TableList} from "../../pages";

const {ROUTES} = constants;

const tableRoutes = {
    path: ROUTES.TABLE,
    children: [
        {index:true, element: <TableList/>},
        {path: ROUTES.ADD_TABLE, element: <AddTable/>}
    ]
}

export default tableRoutes;
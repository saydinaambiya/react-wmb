import {useDispatch} from "react-redux";
import {deleteTable} from "../../store/actions/tableAction";
import {StyledListGroup} from "./styles";
import TableItem from "./components/TableItem";
import {connect} from "react-redux";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";

const TableList = ({data}) => {
    const dispatch = useDispatch();

    const onDelete = (id) => () => {
        const isConfirm = window.confirm("Are you sure delete this table?");
        if (isConfirm){
            dispatch(deleteTable(id));
        }
    }
    return (
        <StyledListGroup>
            {data?.map((item, index)=>(
                <TableItem
                data={item}
                key={item.tableId}
                onDelete={onDelete(item.tableId)}
                />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    listData: state.tables.tableList,
    pagination: state.tables.pagination
})

export default connect(mapStateToProps)(withPaginationList(TableList, {
    label: "Tabel",
    routeToAdd: constants.ROUTES.ADD_TABLE
}))
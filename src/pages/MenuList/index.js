import {useDispatch, connect} from "react-redux";
import {deleteFood} from "../../store/actions/foodAction";
import {StyledListGroup} from "./styles";
import MenuItem from "./components/MenuItem";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";

const MenuList = ({data}) => {
    const dispatch = useDispatch();
    const onDelete = (id) => () => {
        const isConfirm = window.confirm("Are you sure delete this menu?");
        if (isConfirm) {
            dispatch(deleteFood(id));
        }
    }
    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <MenuItem
                    data={item}
                    key={item.foodId}
                    onDelete={onDelete(item.foodId)}
                />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    listData: state.foods.foodList,
    pagination: state.foods.pagination
})

export default connect(mapStateToProps)(withPaginationList(MenuList, {
    label: "Food",
    routeToAdd: constants.ROUTES.ADD_FOOD
}));
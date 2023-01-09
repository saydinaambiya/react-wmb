import foodList from "../../fixtures/foodList.json";
import constants from "../../constants";

const {count, totalPage, page, size} = foodList;
const initialState = {
    foodList: [
        ...foodList.data
    ],
    pagination: {
        count, totalPage, page, size
    }
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION.ADD_FOOD:
            return {
                ...state,
                foodList: [...state.foodList, action.payload]
            }
        case constants.ACTION.DELETE_FOOD:
            const foodListCopy = [...state?.foodList];
            const foodWithIdIndex = foodListCopy?.findIndex((food) => {
                return food.foodId === action.payload
            })
            foodListCopy.splice(foodWithIdIndex, 1);
            return {
                ...state,
                foodList: foodListCopy
            }
        default: return {
            ...initialState
        }
    }
}

export default foodReducer;
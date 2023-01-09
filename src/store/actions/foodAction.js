import constants from "../../constants";
import {generateId} from "../../utils/generateId";

export const addFood = (food) => ({
    type: constants.ACTION.ADD_FOOD,
    payload: {
        foodId: food.foodId,
        foodName: food.foodName,
        foodPrice: {
            foodPriceId: generateId(),
            price: food.price
        }
    }
})

export const deleteFood = (id) => ({
    type: constants.ACTION.DELETE_FOOD,
    payload: id
})
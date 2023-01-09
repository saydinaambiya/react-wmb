import React from "react";
import {onChangeText} from "../../utils/eventHandler";

const useAddFood = () => {
    const [foodId, setFoodId] = React.useState("");
    const [foodName, setFoodName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {foodId, foodName, price, isDisable};
    const setter = {
        foodId: onChangeText(setFoodId),
        foodName: onChangeText(setFoodName),
        price: onChangeText(setPrice),
    }

    React.useEffect(() => {
        if (foodId && foodName && price) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [foodId, foodName, price])

    return{
        getter, setter
    }
}

export default useAddFood;
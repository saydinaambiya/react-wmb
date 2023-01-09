import React from "react";
import useAddFood from "./useAddFood";
import {useNavigate} from "react-router-dom";
import {addFood} from "../../store/actions/foodAction"
import constants from "../../constants";
import {FormText, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {connect} from "react-redux";

const FORM_LIST = [
    {id: "foodId", label: "Food ID", type: "text", placeholder: "Enter food ID"},
    {id: "foodName", label: "Food Name", type: "text", placeholder: "Enter food name"},
    {id: "price", label: "Food Price", type: "number", placeholder: "Enter food price"}
]

const AddFood = ({addFood}) => {
    const {getter, setter} = useAddFood();
    const navigate = useNavigate();

    const submitHandler = () => {
        addFood(getter)
        navigate(constants.ROUTES.FOOD)
    }
    return (
        <StyledContainer>
            <StyledTitle>Add Food</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormText
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                ))}
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.FOOD)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addFood: food => dispatch(addFood(food))
})
export default connect(null, mapDispatchToProps)(AddFood);
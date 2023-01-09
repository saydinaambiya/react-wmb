import useAddTable from "./useAddTable";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {FormText, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {addTable} from "../../store/actions/tableAction";
import {connect} from "react-redux";

const FORM_LIST = [
    {id: "tableId", label: "Table ID", type: "number", placeholder: "Enter table ID"},
    {id: "tableNumber", label: "Table Number", type: "text", placeholder: "Enter table number"},
    {id: "tableStats", label: "Table Status", type: "text", placeholder: "Enter table stats"}
]

const AddTable = ({addTable}) => {
    const {getter, setter} = useAddTable();
    const navigate = useNavigate();

    const submitHandler = () => {
        addTable(getter)
        navigate(constants.ROUTES.TABLE)
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Table</StyledTitle>
            <Form>
                {FORM_LIST.map(item=>(
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
                    <Button variant="secondary" onClick={()=>navigate(constants.ROUTES.TABLE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch)=>({
    addTable: table => dispatch(addTable(table))
})

export default connect(null, mapDispatchToProps)(AddTable);
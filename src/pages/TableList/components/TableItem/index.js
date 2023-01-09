import {StyledListItem} from "./styles";
import {Button, ButtonGroup} from "react-bootstrap";
import {Chip} from "@mui/material";

const TableItem = ({data, onDelete}) => {
    return (
        <StyledListItem action>
            <div className="d-flex justify-content-between">
                <div>
                    <h3 className="lead">{data?.tableNumber}</h3>
                    <Chip label={data?.tableStats} color={data?.tableStats === "Available" ? "primary" : "error"}/>
                </div>
                <ButtonGroup>
                    <Button style={{height: 30, margin: "auto"}} variant="danger" onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </div>
        </StyledListItem>
    )
}

export default TableItem;
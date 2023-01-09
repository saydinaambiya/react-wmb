import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import {NumericFormat} from "react-number-format";

const MenuItem = ({data, onDelete}) => {
    return (
        <StyledListItem action>
            <div className="d-flex justify-content-between">
                <div>
                    <h3 className="lead">{data?.foodName}</h3>
                    <p><NumericFormat value={data.foodPrice.price} displayType={'text'} thousandSeparator={true}
                                      prefix={'Rp. '}/></p>
                </div>

                <ButtonGroup>
                    <Button style={{height: 30, margin:"auto"}} variant="danger" onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </div>
        </StyledListItem>
    )
}

export default React.memo(MenuItem)
import {React} from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

const FormText = ({
                      label,type, placeholder, value, onChange, disabled
                  }) => {
    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <FormControl
                type={type}
                placeholder={placeholder}
                value={value}
                isValid={!!value}
                disabled={disabled}
                onChange={onChange}

            />
        </FormGroup>
    )
}

export default FormText;
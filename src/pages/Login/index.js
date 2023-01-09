import {React, useState} from "react";
import {useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {generateToken} from "../../utils/generateToken";
import constants from "../../constants";
import {FormText, StyledContainer} from "../../components";
import {Button, Form} from "react-bootstrap";
import {onChangeText} from "../../utils/eventHandler";
import Swal from "sweetalert2";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {setToken} = useToken();

    const emailDb = "admin@example.com";
    const passwordDb = "12345678";
    const isValidAccount = email === emailDb && password === passwordDb;

    function validateForm() {
        return email.length > 0 && password.length > 6;
    }

    async function handleSubmit(event) {
        if (isValidAccount) {
            event.preventDefault();
            setToken({token: generateToken()});
            await Swal.fire({
                icon:"success",
                timer:5000,
                title:"Login Success"
            })
            navigate(constants.ROUTES.DASHBOARD);
        }else {
            await Swal.fire({
                icon:"error",
                timer:10000,
                title:"Email or Password is incorrect"
            })
        }
    }

    return (
        <StyledContainer>
            <h1>Login Your Account</h1>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <FormText
                    label={"Email"}
                    type="email"
                    placeholder={"Enter your email"}
                    value={email}
                    onChange={onChangeText(setEmail)}
                />
                <FormText
                    label={"Password"}
                    type="password"
                    placeholder={"Enter your password"}
                    value={password}
                    onChange={onChangeText(setPassword)}
                />
                <Button size="lg" type="submit" disabled={!validateForm()}>Login</Button>
            </Form>
        </StyledContainer>
    )
}

export default Login;
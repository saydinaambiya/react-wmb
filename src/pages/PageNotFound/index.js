import {useLocation} from "react-router-dom";
import {StyledContainer} from "../../components";

const PageNotFound = () => {
    const location = useLocation();
    return (
        <StyledContainer>
            <h2>404</h2>
            <hr/>
            <h3>No match for <code>{location.pathname}</code></h3>
        </StyledContainer>
    )
}

export default PageNotFound;
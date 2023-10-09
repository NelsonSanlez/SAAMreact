import { useRouteError } from "react-router-dom";


function ErrorPage() {
    const error = useRouteError();
    
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>Error({error.status}):{error.data}</i>
            </p>
        </div>
    );
}

export default ErrorPage
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

            <h1>Opp!!!!</h1>
            <Link to={'/'}>Back To Home</Link>
            
        </div>
    );
};

export default ErrorPage;
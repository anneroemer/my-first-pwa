import { Link } from "react-router-dom";

const NoMatch = () => {
    return ( 
        <div>
            <h1>Ooops!</h1>
            <p>Det ser ud som om du har ramt en ressource som ikke er tilgængelig!</p>
            <Link to="/">
                <p>Klik her for at vende tilbage til forsiden</p>
            </Link>
        </div>
     );
}
 
export default NoMatch;
import { geolocated } from "react-geolocated";

const Location = ({ isGeolocationAvailable, isGeolocationEnabled, coords}) => {

    if (!isGeolocationAvailable) return <p>Du har ikke adgang til lokation på denne enhed</p>
    if (!isGeolocationEnabled) return <p>Du skal give adgang til at enheden bruger din lokation</p>

    return coords ? ( 
        <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{coords.speed}</td>
                    </tr>
                </tbody>
            </table>
     ) : (
     <p>Henter lokation...</p>
     );
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Location);
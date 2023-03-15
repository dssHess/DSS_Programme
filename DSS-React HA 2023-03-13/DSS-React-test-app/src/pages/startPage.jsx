import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";


export function StartPage() {
    return (
        <div>
            <div>Hallo, das ist meine Startseite!</div>
            <div>---------------------------------</div>
            <div><br></br></div>
            <div><Link to={"/login"     }>Hier gehts zum Login.</Link></div>
            <div><br></br></div>
            <div><Link to={"/forschung" }>Hier gehst Du zu den Forschungen</Link></div>
            <div><br></br></div>
            <div><Link to={"/counter"   }>Hier gehst Du zum Zählertest</Link></div>

        </div>
    )
}
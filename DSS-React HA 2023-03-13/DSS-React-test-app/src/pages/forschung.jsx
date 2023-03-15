import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Forschung() {
  function bericht_an_aus(bericht) {
    var element = document.getElementById(bericht);

    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
  

  return (
    <div>
      <div><Link to={"/"          }>Zurück zur Startseite</Link></div>
      <h1>Hier sind Informationen aus meinem Leben.</h1>
      <h2>-----------------------------------------------</h2>
      <h3>Das ist der Auftackt zu menen Berichten.</h3>
      <h2>-----------------------------------------------</h2>
      

      <ButtonGroup
      spacing='3'
      size="xs" 
      >
        <Button 
          colorScheme='red' 
          onClick={() => bericht_an_aus("lebenslauf")}  >Lebenslauf 
        </Button>

        <Button 
        colorScheme='orange' 
        onClick={() => bericht_an_aus("was_kann_ich")}>Was kann ich 
        </Button>

        <Button 
        colorScheme='yellow' 
        onClick={() => bericht_an_aus("meine_astrologie")}>Meine Astrologie 
        </Button>

        <Button 
        colorScheme='green' 
        onClick={() => bericht_an_aus("meine_familie")}>Meine Familie 
        </Button>
      </ButtonGroup>
      

      <p style={{ display: "none" }} id="lebenslauf">
        Lebenslauf
      </p>
      <p style={{ display: "none" }} id="was_kann_ich">
        Was kann ich
      </p>
      <p style={{ display: "none" }} id="meine_astrologie">
        Meine Astrologie
      </p>
      <p style={{ display: "none" }} id="meine_familie">
        Meine Familie
      </p>
      
    </div>
  );
}

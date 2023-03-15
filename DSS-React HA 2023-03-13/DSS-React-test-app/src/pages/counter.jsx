import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export function Counter() {
  const [buttonValue, setButtonValue] = useState(0);

  function addOne() {
    setButtonValue(buttonValue + 1)
  }

  console.log("Achtung, ich render jetzt den Counter!")

  return (
    <Flex flexDirection={"column"}>
      <div><Link to={"/"          }>Zurück zur Startseite</Link></div>
      <label >Button Value</label>
        
      <input value={buttonValue} disabled={true} />

      <Button colorScheme={"teal"} variant={"outline"} onClick={addOne}>+1</Button>
    </Flex>
  );
}

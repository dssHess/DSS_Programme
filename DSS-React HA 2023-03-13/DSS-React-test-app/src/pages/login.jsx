import { useState } from "react";
import { Button, Stack, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { login } from "../services/backendApi";


export function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function sendToBackend() {
        login(username, password)
    }

    return (
        <Stack>
            <div><Link to={"/"          }>Zurück zur Startseite</Link></div>
            <h2 style={{marginTop: "30px"}}>Login</h2>
            <Input value={username} placeholder="Username" onChange={evt => setUsername(evt.target.value)} />
            <Input value={password} type={"password"} placeholder="Password" />

            <Button onClick={sendToBackend}>Login</Button>
        </Stack>
    )
}
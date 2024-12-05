import { Box } from "@chakra-ui/react";
import { MyInput } from "./components/myComponents/input";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { MyTextarea } from "./components/myComponents/textArea";

function App() {
  const [loginData, setLoginData] = useState({email: "", password: ""})
  const [guestData, setGuestData] = useState("")
  return (
    <Box as="form" display="flex" flexDir="column" alignItems="center" justifyContent="center" width="100%">
      <MyInput text="Email" type="text" state={loginData} setState={setLoginData} field="email"/>
      <MyInput text="Senha" type="password" state={loginData} setState={setLoginData} field="password"/>
      <MyTextarea guestData={guestData} setGuestData={setGuestData}/>
      <Button size="xs" type="submmit"  variant="surface" bg="#4a9d0d" marginTop="1em"> Cadastrar </Button>
    </Box>
  );
}

export default App;

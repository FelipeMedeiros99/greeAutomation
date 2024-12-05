import { Box, Input } from "@chakra-ui/react";
import { MyInput } from "./components/myComponents/input";
import { useState } from "react";

function App() {
  const [loginData, setLoginData] = useState({email: "", password: ""})
  return (
    <Box as="form">
      <MyInput text="Email" type="text" state={loginData} setState={setLoginData} field="email"/>
      <MyInput text="Senha" type="password" state={loginData} setState={setLoginData} field="password"/>
    </Box>
  );
}

export default App;

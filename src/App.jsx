import { Box, Text } from "@chakra-ui/react";
import { MyInput } from "./components/myComponents/input";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { MyTextarea } from "./components/myComponents/textArea";
import { filterData, formatData, removeKeyWords } from "./automatization/filter";

function App() {
  const [loginData, setLoginData] = useState({email: "", password: ""})
  const [guestData, setGuestData] = useState("")
  const [userData, setUserData] = useState({name: "", cpf: "", phone: "", cep: ""})

  useEffect(()=>{
    removeKeyWords(setGuestData, guestData)
    filterData(userData, setUserData, guestData)
    formatData(userData, setUserData)
    
  }, [guestData])
  
  return (
    <Box as="form" display="flex" flexDir="column" alignItems="center" justifyContent="center" width="sm">
      <MyInput text="Email" type="text" state={loginData} setState={setLoginData} field="email"/>
      <MyInput text="Senha" type="password" state={loginData} setState={setLoginData} field="password"/>
      <MyTextarea guestData={guestData} setGuestData={setGuestData}/>
      <Button size="xs" type="submmit"  variant="surface" bg="#4a9d0d" marginTop="1em"> Cadastrar </Button>
      <Box marginTop="2em" width="100%">
        <Text color="#656363">nome: {userData.name}</Text>
        <Text color="#656363">cpf: {userData.cpf}</Text>
        <Text color="#656363">telefone: {userData.phone}</Text>
        <Text color="#656363">cep: {userData.cep}</Text>

      </Box>
    </Box>
  );
}

export default App;

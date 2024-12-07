import { Box, Text, Image } from "@chakra-ui/react";
import { MyInput } from "./components/myComponents/input";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { MyTextarea } from "./components/myComponents/textArea";
import { filterData, removeKeyWords } from "./automatization/filter";
import axios from "axios";
import { ItemsList } from "./components/myComponents/span";

function App() {
  const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem("gree-automatization")) || {email: "", password: ""})
  const [guestData, setGuestData] = useState("")
  const [userData, setUserData] = useState({name: [], cpf: [], phone: [], cep: []})
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(()=>{
    localStorage.setItem("gree-automatization", JSON.stringify(loginData))
  }, [loginData])

  useEffect(()=>{
    removeKeyWords(setGuestData, guestData)
  }, [guestData, userData])
  
  useEffect(()=>{
    filterData(setUserData, guestData)
  }, [guestData])
  
  async function addGuest(e){
    e.preventDefault()
    try{
      setIsDisabled(true)
      setTimeout(()=>setIsDisabled(false), 2000)
      const response = await axios.post("http://localhost:5000", {userData, loginData})
      alert(response?.data || response?.message || "Automação finalizada" )
    }catch(e){
      console.log(e)
      alert(e?.response?.data?.message || e?.message || "Automação finalizada" )
      setIsDisabled(false)
    }
  }

  return (
    <Box as="form" display="flex" flexDir="column" alignItems="center" justifyContent="center" width="sm" onSubmit={addGuest}>
      <Image src="./image.png"/>
      <MyInput text="Email" type="email" state={loginData} setState={setLoginData} field="email"/>
      <MyInput text="Senha" type="password" state={loginData} setState={setLoginData} field="password"/>
      <MyTextarea guestData={guestData} setGuestData={setGuestData}/>
      <Button 
        size="xs" 
        type="submmit"  
        variant="surface" 
        bg="#4a9d0d"
        color="white" 
        marginTop="1em" 
        border="none"
        boxShadow="0 0 2px black"
        disabled={isDisabled}
        _hover={{bg:"#264f08"}}
        > Cadastrar </Button>
      <Box marginTop="2em" width="100%">
        <Text color="#656363">nome(s): <ItemsList items={userData.name}/></Text>
        <Text color="#656363">cpf(s):  <ItemsList items={userData.cpf}/></Text>
        <Text color="#656363">telefone(s): <ItemsList items={userData.phone}/></Text>
        <Text color="#656363">cep(s): <ItemsList items={userData.cep}/></Text>
      </Box>
    </Box>
  );
}

export default App;

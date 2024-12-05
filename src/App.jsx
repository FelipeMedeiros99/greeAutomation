import { Box, Input } from "@chakra-ui/react";
import { MyInput } from "./components/myComponents/input";

function App() {
  return (
    <Box as="form">
      <MyInput text="Email" type="text"/>
      <MyInput text="Senha" type="password"/>
    </Box>
  );
}

export default App;

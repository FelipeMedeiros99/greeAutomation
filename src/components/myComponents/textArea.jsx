import { Textarea } from "@chakra-ui/react"
import {Field} from "../ui/field";

export function MyTextarea({guestData, setGuestData}){
    function handlerChange(e){
        setGuestData(e.target.value)
    }

    return(
        <Field marginTop="10px" maxW="sm" label="Dados do hóspede" required>
            <Textarea maxH="100%" resize="none" height="14em" value={guestData} onChange={handlerChange}/>
        </Field>
    )
}
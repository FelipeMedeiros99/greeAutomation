import { Box, Input } from "@chakra-ui/react";
import {Field} from "../ui/field";

export function MyInput({ text, type, state, setState, field}) {

    function handlerChange(e){
        const copyState = {...state};
        copyState[field] = e.target.value;
        setState(copyState)
    }

    return (
        <Field maxW="sm" label={text} required errorText={`${text} é obrigatório`}>
            <Input 
                placeholder={text} 
                size="sm" 
                type={type}
                value={state[field]}
                onChange={handlerChange}
                />
        </Field>
    )
}
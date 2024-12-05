import { Box, Input } from "@chakra-ui/react";
import {Field} from "../ui/field";

export function MyInput({ text, type }) {
    return (
        <Field label={text} required errorText={`${text} é obrigatório`}>
            <Input placeholder={text} size="sm" maxW="sm" type={type}/>
        </Field>
    )
}
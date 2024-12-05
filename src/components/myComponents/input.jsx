import { Box, Input } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input"

export function MyInput({ text, type, state, setState, field }) {

    function handlerChange(e) {
        const copyState = { ...state };
        copyState[field] = e.target.value;
        setState(copyState)
    }

    return (
        <Field maxW="sm" label={text} required className="inputs" errorText={`${text} é obrigatório`}>
            {type === "password" ?
                <PasswordInput
                    placeholder={text}
                    size="sm"
                    type={type}
                    value={state[field]}
                    onChange={handlerChange}
                />
                :
                <Input
                    placeholder={text}
                    size="sm"
                    type={type}
                    value={state[field]}
                    onChange={handlerChange}
                />
            }
        </Field>

    )
}
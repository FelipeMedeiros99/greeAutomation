import { Text } from "@chakra-ui/react";

export function ItemsList({items}){

    return(
        items?.map((e, index)=>(
        index< items.length -1?
            <Text key={index} as="span" marginRight="0.3em">{e},</Text>:
            <Text key={index} as="span">{e}.</Text>



        )
    )
    )
}
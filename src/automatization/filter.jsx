import {cpf as validCpf} from "cpf-cnpj-validator";

export function removeKeyWords(setText, text){
    let copyText = `${text}`
    .replace("Dados para reservar", "")
    .replace("Nome completo: ", "")
    .replace("CPF: ", "")
    .replace("Período de hospedagem: ", "")
    .replace("Contato: ", "")
    .replace("CEP: ", "")
    
    .replace("Dados para reservar", "")
    .replace("Nome completo:", "")
    .replace("CPF:", "")
    .replace("Período de hospedagem:", "")
    .replace("Contato:", "")
    .replace("CEP:", "")

    .replace("Dados para reservar", "")
    .replace("Nome completo", "")
    .replace("CPF", "")
    .replace("Período de hospedagem", "")
    .replace("Contato", "")
    .replace("CEP", "")

    copyText = copyText.split("\n")
    copyText = copyText.map((data)=> data.trim())
    copyText = copyText.join("\n")

    setText(copyText)
}

export function filterData(setData, text){

    const regexName = /[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*/g;
    const regexCep = /\b\d{2}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{3}\b/g;
    const regexPhone = /\b(?:\(?\d{2}\)?\s?)9?\d{4}[^A-Za-z0-9]?\d{4}\b/g;
    const regexCPF = /\b\d{3}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{2}\b/


    let name = text.match(regexName)
    name = name?.map((n)=>n.toUpperCase())

    let cep = text.match(regexCep)
    cep = cep?.map((c)=>formatCep(c))
    
    let cpf = text.match(regexCPF)
    cpf = cpf?.filter((c)=>validCpf.isValid(c))
    cpf = cpf?.map((c)=>validCpf.format(c))
    
    let phone = text.match(regexPhone)
    phone = phone?.filter((p)=> !validCpf.isValid(p))
    phone = phone?.map((p)=>formatPhone(p))

    setData({name: name, cep, phone, cpf})

}

export function formatData(data, setData){
    try{
        // let name = formatName(data, setData);
        // let cpf = formatCpf(data.cpf);
        // let phone = formatPhone(data.phone);
        // let cep = formatCep(data.cep);
        // console.log({name})
        // setData({...data, cpf: [cpf], name: [name], phone: [phone], cep: [cep]})
    }catch(e){
        console.log(e)
    }
}


function formatPhone(phone){
        phone = phone.split("")
        phone = phone.filter(char =>  !isNaN(char))
        phone = phone.filter(char =>  char !==" ")
        if(phone.length === 10){
            phone.splice(2, 0, "9")
        }
        phone.splice(0, 0, "(")
        phone.splice(3, 0, ")")
        phone.splice(9, 0, "-")
        return phone.join("")
}

function formatCep(cep){
        cep = cep.split("")
        cep = cep.filter(char =>  !isNaN(char))
        cep.splice(5, 0, "-")
        return cep.join("")
}
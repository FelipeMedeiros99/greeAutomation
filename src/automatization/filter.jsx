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

    setText(copyText)
}

function filterNumbers(word){
    word = word?.split("")
    word = word?.filter((w)=>!isNaN(w) && w !== " ")
    return word?.join("")
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

function filterName(text){
    const regexName = /[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*/g;
    let name = text.match(regexName)
    name = name?.map((n)=>n.toUpperCase())
    return name
}

function filterCep(text){
    text = text.split("\n")
    const regexCep = /\b\d{2}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{3}\b/g;

    let cep = []
    for(let l of text){
        if(l.match(regexCep)){
            cep.push(l)
        }
    }
    cep = cep?.filter((c)=>filterNumbers(c).length===8)
    cep = cep?.map((c)=>formatCep(filterNumbers(c)))
    return cep
}

function filterCpf(text){
    const regexCPF = /\b\d{3}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{2}\b/
    let cpf = text.match(regexCPF)
    cpf = cpf?.filter((c)=>validCpf.isValid(c))
    cpf = cpf?.map((c)=>validCpf.format(c))
    return cpf
}

function filterPhone(text, cpf){
    text = text.split("\n")
    let phone = []

    for(let l of text){
        l = filterNumbers(l)
        if(l.length === 11){
            phone.push(l)
        }else if( l.length === 10){
            l = l.slice(0, 2) + "9" + l.slice(2)
            phone.push(l)
        }
    }
    phone = phone?.filter((p)=> !(cpf?.includes(validCpf.format(p))))
    phone = phone?.map((p)=>formatPhone(p))

    // let phone = text.match(regexPhone)
    // phone = phone?.map((p)=>filterNumbers(p))
    // phone = phone?.filter((p)=> !(cpf?.includes(p)))

    return phone

    // const regexPhone = /\b(?:\(?\d{2}\)?\s?)9?\d{4}[^A-Za-z0-9]?\d{4}\b/g;

    // let phone = text.match(regexPhone)
    // phone = phone?.map((p)=>filterNumbers(p))
    // phone = phone?.filter((p)=> !(cpf?.includes(p)))
    // phone = phone?.map((p)=>formatPhone(p))

    // return phone
}

export function filterData(setData, text){
    const name = filterName(text)
    const cep = filterCep(text)
    const cpf = filterCpf(text)
    const phone = filterPhone(text, cpf)

    setData({name, cep, phone, cpf})

}





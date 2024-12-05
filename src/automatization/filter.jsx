export function filterData(data, setData, text){

    const regexName = /[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*/g;
    const regexCep = /\b\d{2}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{3}\b/g;
    const regexPhone = /\b(?:\(?\d{2}\)?\s?)9?\d{4}[^A-Za-z0-9]?\d{4}\b/g;
    const regexCPF = /\b\d{3}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{3}[^A-Za-z0-9]?\d{2}\b/


    const name = text.match(regexName)
    const cep = text.match(regexCep)
    const phone = text.match(regexPhone)
    const cpf = text.match(regexCPF)

    setData({...data, name, cep, phone, cpf})

}

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

export function formatData(data, setData){
    try{
        let name = formatName(data.name);
        let cpf = formatCpf(data.cpf);
        let phone = formatPhone(data.phone);
        let cep = formatCep(data.cep);

        // console.log("name: ", name)
        setData({...data, cpf: [cpf], name: [name], phone: [phone], cep: [cep]})
    }catch(e){
        console.log(e)
    }
}

function formatCpf(cpf){
    if(cpf.length > 0){
        let filtercpf = cpf[0]?.split("")
        filtercpf = filtercpf?.filter((num)=> !isNaN(num))
        filtercpf.splice(3, 0, ".")
        filtercpf.splice(7, 0, ".")
        filtercpf.splice(11, 0, "-")

        return filtercpf.join("")
    }
}

function formatName(name){
    if(name.length===1){
        return name[0].toUpperCase()
    }
}

function formatPhone(phone){
    if(phone.length>0){
        let filtredPhone = phone[0];
        filtredPhone = filtredPhone.split("")
        filtredPhone = filtredPhone.filter(char =>  !isNaN(char))
        filtredPhone = filtredPhone.filter(char =>  char !==" ")
        if(filtredPhone.length === 10){
            filtredPhone.splice(2, 0, "9")
        }
        filtredPhone.splice(0, 0, "(")
        filtredPhone.splice(3, 0, ")")
        filtredPhone.splice(4, 0, " ")
        filtredPhone.splice(10, 0, "-")
        return filtredPhone.join("")
    }
}

function formatCep(cep){
    if(cep.length>0){
        let filtredCep = cep[0];
        filtredCep = filtredCep.split("")
        filtredCep = filtredCep.filter(char =>  !isNaN(char))
        filtredCep.splice(5, 0, "-")
        return filtredCep.join("")
    }
}
import { useState } from "react";

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
    let copyText = `${text}`.replace("Nome completo: ", "")
    .replace("CPF: ", "")
    .replace("Período de hospedagem: ", "")
    .replace("Contato: ", "")
    .replace("CEP: ", "")
    
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
    copyText = copyText.filter((data)=>data!=="")
    copyText = copyText.map((data)=> data.trim())
    copyText = copyText.join("\n")

    setText(copyText)
}
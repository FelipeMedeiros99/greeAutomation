import puppeteer, {  } from "puppeteer";

export async function pageConfig(){
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-popup-blocking"]
    })
    const page = await browser.newPage();

    return page 
}

export async function openPageAndLogin(page){
    await page.goto('https://gree.hflow.com.br/authentication/login')

    await page.waitForSelector("input[formcontrolname='username']")
    
    await page.type("input[formcontrolname='username']", 'felipe@greehotel.com');
    await page.type("input[formcontrolname='password']", "Felipe123")
    await page.click(".btn")
}


export async function goToReservePage(page) {
    await page.waitForSelector(".navbar-container")
    await page.goto("https://gree.hflow.com.br/GREE/pms/reservations/new")
    
}

export async function openRegisterGuest(page ) {
    
    //TODO: seletores bugando com o alert
    console.log("buscando seletor")
    await page.waitForSelector(".card.card-size.card-backgroud")
    console.log('localizado')
    await page.click(".card.card-size.card-backgroud")

    console.log("buscando seletor 2")
    await page.waitForSelector(".col-12.mt-05.mb-05 .btn.btn-sm.btn-primary")
    console.log('localizado')
    await page.click(".col-12.mt-05.mb-05 .btn.btn-sm.btn-primary")
}

export async function fillData(page ) {
    await page.waitForSelector("input[name='names']")
    await page.type("input[name='names']", "RANDOM NAME HERE")

    await page.type("input[name='whatsApp']", "99 9 9999 9999")

    await page.type("input[name='fiscalNumber']", "12312312312")

    await page.type("input[name='postalCode']", "65040-111")

    await page.click(".feather.feather-search.cursor-pointer")

    await page.click(".modal-content .form-actions.border-0.right .p-element.btn.btn-loading.btn-success.btn-sm.p-button.p-component")
}
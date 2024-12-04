import { fillData, goToReservePage, openPageAndLogin, pageConfig, openRegisterGuest } from "./comands";

async function greeAutomation(){
    try{
        const page = await pageConfig()
        await openPageAndLogin(page)   
        await goToReservePage(page)
        await openRegisterGuest(page)
        await fillData(page)
    }catch(e){
        console.log(e)
    }
}

greeAutomation()
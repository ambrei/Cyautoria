import { onMainPage } from "../support/QAUTORIA/loginPage"

describe('Auto ria suit', ()=>{
      it('Click on Used cars button', ()=> {
        onMainPage.openAutoRia()
        onMainPage.clickOnUsedcars()
      })



})
import { mainPage } from "../support/QAUTORIA/loginPage"

describe('Auto ria suite', () => {
    it('Click on Used cars button', () => {
        mainPage.openAutoRia()
        mainPage.clickOnUsedCars()
    })
})
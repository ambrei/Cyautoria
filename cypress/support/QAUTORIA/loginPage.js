/// <reference types="Cypress"/>

export class mainPage {

        openAutoRia(){
            cy.visit('https://auto.ria.com/uk/')
        }


        clickOnUsedcars (){
            const usedCarsButton = cy.contains('Вживані авто')
            usedCarsButton.click()
        }
}

export const onMainPage = new mainPage()
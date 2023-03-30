class MainPage {
    _baseUrl = 'https://auto.ria.com/uk/'

    openAutoRia() {
        cy.visit(this._baseUrl)
    }

    clickOnUsedCars() {
        const usedCarsButton = cy.get('a').contains('Вживані авто')
        usedCarsButton.click()
    }
}

export const mainPage = new MainPage()
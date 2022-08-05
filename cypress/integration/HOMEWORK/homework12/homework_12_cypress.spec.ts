import {
    searchInputButton,
    logoBtn,
    locatorVW,
    webSite,
    moreCars,
    jurnals,
} from '../locators/locators'

describe('drive2.ru tests', () => {
    before(function () {
        cy.fixture('myFixture/fixtures').then((text) => {
            this.text = text
        })
    })

    beforeEach(function () {
        cy.visit(webSite)
    })

    afterEach(function () {
        cy.end()
    })

    it('history of Mercedes', function () {
        cy.getLocatorClickTypeText(searchInputButton, 'mercedes')
        cy.contains('Айфонщикам посвящается')
        cy.url().should('contain', 'drive2.ru')
    })

    it('checking logo button', function () {
        cy.intercept('GET', '**page-url=goal%3A%2F%2F**').as('requestWaiter')
        cy.get(logoBtn).click()
        cy.wait('@requestWaiter')
    })

    it('checking VW button', function () {
        cy.get(locatorVW).eq(0).click()
        cy.contains('Клапана как опята').should('contain.text', 'опята')
    })

    it('more cars check', function () {
        cy.getLocatorAndClick(moreCars, 1)
        cy.url().should('contain', 'drive')
    })

    it('BMW 7 series check', function () {
        cy.getLocatorClickTypeText(searchInputButton, 'BMW 7 series')
        cy.contains('Бортжурналы').should('not.contain.text', this.text)
    })
})

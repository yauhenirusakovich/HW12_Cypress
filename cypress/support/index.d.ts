declare namespace Cypress {
    interface Chainable<Subject> {
        getLocatorClickTypeText(locator: string, text: string): void
    }
}

declare namespace Cypress {
    interface Chainable<Subject> {
        getLocatorAndClick(locator: string, index: number): void
    }
}

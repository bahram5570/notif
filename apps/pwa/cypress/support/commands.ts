/// <reference types="cypress" />

Cypress.Commands.add('checkWheelPicker', (picker: string, expectedValue: string, text: string) => {
  cy.get(`[data-testid='wheelPicker_${picker}']`)
    .find(`[data-testid='wheelPickerCell_${expectedValue}']`)
    .should('exist')
    .should('have.text', text);
});

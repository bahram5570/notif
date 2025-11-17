declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to check wheel picker selected value
     * @example cy.checkWheelPicker('year', '1390')
     */
    // checkWheelPicker(picker: string, expectedValue: string, text: string): Chainable<void>;
  }
}

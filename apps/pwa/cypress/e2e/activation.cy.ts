import { dateModuleFindSlide } from '../../src/utils/tests';

describe('template spec', () => {
  it('otp_1', () => {
    cy.visit('/activation/goal_2');

    // Because the welcoming has a slight delay in appearing at first, we check it so that it’s not there initially.
    // // cy.get('#welcoming').should('not.exist');

    // cy.get('#welcoming', { timeout: 4000 }).should('exist');

    // cy.get('#welcoming', { timeout: 60000 }).should('not.exist');

    // // otp1

    // cy.get('input').type('09001000000').should('have.value', '۰۹۰۰۱۰۰۰۰۰۰');

    // cy.get('[data-testid="otp1"]').click();
    // cy.wait(4000);

    // // otp2
    // cy.wait(4000);
    // cy.url().should('include', '/activation/otp_2');
    // cy.get(`[data-testid="otp2CodeContainer"]`).click();
    // const otp = ['1', '2', '3', '4', '5', '6'];

    // otp.forEach((digit, index) => {
    //   cy.get(`[data-testid="otp-input-${index}"]`).should('be.visible').type(digit);
    // });

    // cy.wait(4000);

    // // goal_1
    // cy.url().should('include', '/activation/goal_1');

    // cy.get('[data-testid=firstNameInput]').type('test').should('have.value', 'test');

    // cy.get('[data-testid="btn_goal1"]').click();

    // goal_2

    // cy.url().should('include', '/activation/goal_2');

    // cy.get('[data-testid^="tab_"]').each(($tab: JQuery<HTMLElement>) => {
    //   const tabId = $tab.attr('data-testid')?.replace('tab-', '');
    //   if (!tabId) return;

    //   cy.wrap($tab).click();
    // });
    cy.wait(1000);
    cy.get('[data-testid^="wheelPicker_"]').should('have.length', 3);

    const date = '1390/07/16';
    const { yearSlide, daySlide, monthSlide } = dateModuleFindSlide(date, 0);
    const list = [
      { picker: 'year', slide: yearSlide, value: '1390', text: '۱۳۹۰' },
      { picker: 'month', slide: monthSlide, value: 'مهر', text: 'مهر' },
      { picker: 'day', slide: daySlide, value: '16', text: '۱۶' },
    ];

    list.forEach(({ picker, slide, value, text }) => {
      cy.get(`[data-testid='wheelPicker_${picker}']`).then(($swiper) => {
        cy.window().then((win) => {
          const swiperInstance = ($swiper[0] as any).swiper;
          swiperInstance.slideTo(slide);
        });

        cy.checkWheelPicker(picker, value, text);
      });
    });
  });
});

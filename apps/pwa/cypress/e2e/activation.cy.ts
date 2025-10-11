import { toPersianNumbers } from '@utils/numbers';
import { dateModuleFindSlide } from '@utils/tests';

import { ACTIVATION_BIRTHDATE_TABS_LIST, ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import {
  CalendarTypeEnum,
  DATE_SEPERATOR_REGEX,
  GREGORIAN_FARSI_MONTH_LIST,
  JALALI_MONTH_LIST,
} from '@constants/date.constants';

function checkWheelPicker(picker: string, expectedValue: string) {
  cy.get(`[data-testid='wheelPicker_${picker}']`)
    .find(`[data-testid='wheelPickerCell_${expectedValue}']`)
    .should('exist')
    .should('have.text', toPersianNumbers(expectedValue));
}

function checkRadioItem(id: number, btnName: string) {
  cy.get(`[data-testid="radioItem_${id}"]`)
    .click()
    .should('have.attr', 'aria-checked', 'true')
    .then(() => {
      cy.get(`[data-testid="${btnName}"]`).should('be.visible').click();
    });
}

describe('template spec', () => {
  const phoneNumber = '09001000000';
  const otp = ['1', '2', '3', '4', '5', '6'];
  const jalaaliDate = '1390/07/16';
  const gregorianDate = '2010-08-5';

  it('otp_1', () => {
    cy.visit('/activation/goal_3');

    // Because the welcoming has a slight delay in appearing at first, we check it so that it’s not there initially.
    // cy.get('[data-testid="welcoming"]').should('not.exist');

    // cy.get('[data-testid="welcoming"]').should('exist');

    // cy.get('[data-testid="welcoming"]', { timeout: 60000 }).should('not.exist');

    // otp1

    // cy.get('input').type(phoneNumber).should('have.value', toPersianNumbers(phoneNumber));

    // cy.get('[data-testid="otp1"]').click();

    // otp2

    // cy.url().should('include', '/activation/otp_2');
    // cy.get(`[data-testid="otp2CodeContainer"]`).click();

    // otp.forEach((digit, index) => {
    //   cy.get(`[data-testid="otp-input-${index}"]`).type(digit);
    // });

    // cy.wait(3000);

    // goal_1
    // cy.url().should('include', '/activation/goal_1');

    // cy.get('[data-testid=firstNameInput]').type('test').should('have.value', 'test');

    // cy.get('[data-testid="btn_goal1"]').click();

    // goal_2

    // cy.url().should('include', '/activation/goal_2');

    // cy.get(`[data-testid='tab_${CalendarTypeEnum.Jalali}']`).click();
    // const jalaaliDateParts = jalaaliDate.split(DATE_SEPERATOR_REGEX);

    // const { yearSlide, daySlide, monthSlide } = dateModuleFindSlide(jalaaliDate, CalendarTypeEnum.Jalali);
    // const jlist = [
    //   { picker: 'year', slide: yearSlide, value: jalaaliDateParts[0] },
    //   {
    //     picker: 'month',
    //     slide: monthSlide,
    //     value: JALALI_MONTH_LIST[+jalaaliDateParts[1] - 1],
    //   },
    //   { picker: 'day', slide: daySlide, value: jalaaliDateParts[2] },
    // ];

    // jlist.forEach(({ picker, slide, value }) => {
    //   cy.get(`[data-testid='wheelPicker_${picker}']`).then(($swiper) => {
    //     cy.window().then((win) => {
    //       const swiperInstance = ($swiper[0] as any).swiper;
    //       swiperInstance.slideTo(slide);
    //     });

    //     checkWheelPicker(picker, value);
    //   });
    // });

    // cy.get(`[data-testid='tab_${CalendarTypeEnum.Gregorian}']`).click();

    // const gregorianDateParts = gregorianDate.split(DATE_SEPERATOR_REGEX);
    // const {
    //   yearSlide: gYearSlide,
    //   daySlide: gDaySlide,
    //   monthSlide: gMonthSlide,
    // } = dateModuleFindSlide(gregorianDate, CalendarTypeEnum.Gregorian);

    // const glist = [
    //   { picker: 'year', slide: gYearSlide, value: gregorianDateParts[0] },
    //   {
    //     picker: 'month',
    //     slide: gMonthSlide,
    //     value: GREGORIAN_FARSI_MONTH_LIST[+gregorianDateParts[1] - 1],
    //   },
    //   { picker: 'day', slide: gDaySlide, value: gregorianDateParts[2] },
    // ];

    // glist.forEach(({ picker, slide, value }) => {
    //   cy.get(`[data-testid='wheelPicker_${picker}']`).then(($swiper) => {
    //     cy.window().then((win) => {
    //       const swiperInstance = ($swiper[0] as any).swiper;
    //       swiperInstance.slideTo(slide);
    //     });

    //     checkWheelPicker(picker, value);
    //   });
    // });

    // cy.get('[data-testid="btn_goal2"]').click();

    //goal_3
    cy.url().should('include', '/activation/goal_3');
    cy.get('[data-testid="btn_goal3"]').should('not.be.visible');

    checkRadioItem(2, 'btn_goal3');

    //reward
    cy.url().should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]').should('be.visible').click();

    //intention_1
    cy.url().should('include', '/activation/intention_1');
    cy.get('[data-testid="btn_intention1"]').should('not.be.visible');
    checkRadioItem(1, 'btn_intention1');
    //reward
    cy.url().should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]').should('be.visible').click();

    //intention_2
    cy.url().should('include', '/activation/intention_2');
    checkRadioItem(1, 'btn_intention2');

    cy.url().should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]').should('be.visible').click();

    //intention_3

    cy.url().should('include', '/activation/intention_3');
    checkRadioItem(1, 'btn_intention3');

    cy.url().should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]').should('be.visible').click();

    //intention_4

    cy.url().should('include', '/activation/intention_4');
    checkRadioItem(1, 'btn_intention4');

    cy.url().should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]').should('be.visible').click();

    //intention_5

    cy.url().should('include', '/activation/intention_5');
    // checkRadioItem(1, 'btn_intention5');

    // cy.url().should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    // cy.get('[data-testid="rewardModuleBtn"]').should('be.visible').click();
  });
});

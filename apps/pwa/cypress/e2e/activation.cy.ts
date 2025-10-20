import { testBaseUrl } from '@services/http';
import { currentDate } from '@utils/dates';
import { toPersianNumbers } from '@utils/numbers';
import { dateModuleFindSlide } from '@utils/tests';

import {
  ACTIVATION_HEIGHT_VALUES,
  ACTIVATION_WEIGHT_VALUES,
} from '@components/activation/WeightHeightModule/constants';
import { ACTIVATION_BIRTHDATE_TABS_LIST, ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import {
  CalendarTypeEnum,
  DATE_SEPERATOR_REGEX,
  GREGORIAN_FARSI_MONTH_LIST,
  JALALI_MONTH_LIST,
  PERIOD_INTERVAL,
} from '@constants/date.constants';
import cypress from 'cypress';
import moment from 'moment-jalaali';

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
  const jalaaliDate = '1384/07/16';
  const gregorianDate = '2010-08-5';
  const weight = 60;
  const height = 165;

  it('otp_1', () => {
    cy.visit('/activation/otp_1');

    // Because the welcoming has a slight delay in appearing at first, we check it so that it’s not there initially.

    // cy.get('[data-testid="welcoming"]', { timeout: 5000 }).should('not.exist');

    cy.get('[data-testid="welcoming"]').should('exist');

    cy.get('[data-testid="welcoming"]', { timeout: 60000 }).should('not.exist');

    // otp1

    cy.get('input').type(phoneNumber).should('have.value', toPersianNumbers(phoneNumber));

    cy.get('[data-testid="otp1"]').click();

    // otp2

    cy.url({ timeout: 10000 }).should('include', '/activation/otp_2');
    cy.get(`[data-testid="otp2CodeContainer"]`).click();

    otp.forEach((digit, index) => {
      cy.get(`[data-testid="otp-input-${index}"]`).type(digit);
    });

    // goal_1
    cy.url({ timeout: 10000 }).should('include', '/goal_1');

    cy.get('[data-testid=firstNameInput]').type('test').should('have.value', 'test');

    cy.get('[data-testid="btn_goal1"]').click();

    // goal_2

    cy.url({ timeout: 5000 }).should('include', '/goal_2');

    cy.get(`[data-testid='tab_${CalendarTypeEnum.Jalali}']`).click();
    const jalaaliDateParts = jalaaliDate.split(DATE_SEPERATOR_REGEX);

    const { yearSlide, daySlide, monthSlide } = dateModuleFindSlide(jalaaliDate, CalendarTypeEnum.Jalali);
    const jlist = [
      { picker: 'year', slide: yearSlide, value: jalaaliDateParts[0] },
      {
        picker: 'month',
        slide: monthSlide,
        value: JALALI_MONTH_LIST[+jalaaliDateParts[1] - 1],
      },
      { picker: 'day', slide: daySlide, value: jalaaliDateParts[2] },
    ];

    jlist.forEach(({ picker, slide, value }) => {
      cy.get(`[data-testid='wheelPicker_${picker}']`).then(($swiper) => {
        cy.window().then((win) => {
          const swiperInstance = ($swiper[0] as any).swiper;
          swiperInstance.slideTo(slide);
        });

        checkWheelPicker(picker, value);
      });
    });

    cy.get(`[data-testid='tab_${CalendarTypeEnum.Gregorian}']`).click();

    const gregorianDateParts = gregorianDate.split(DATE_SEPERATOR_REGEX);
    const {
      yearSlide: gYearSlide,
      daySlide: gDaySlide,
      monthSlide: gMonthSlide,
    } = dateModuleFindSlide(gregorianDate, CalendarTypeEnum.Gregorian);

    const glist = [
      { picker: 'year', slide: gYearSlide, value: gregorianDateParts[0] },
      {
        picker: 'month',
        slide: gMonthSlide,
        value: GREGORIAN_FARSI_MONTH_LIST[+gregorianDateParts[1] - 1],
      },
      { picker: 'day', slide: gDaySlide, value: gregorianDateParts[2] },
    ];

    glist.forEach(({ picker, slide, value }) => {
      cy.get(`[data-testid='wheelPicker_${picker}']`).then(($swiper) => {
        cy.window().then((win) => {
          const swiperInstance = ($swiper[0] as any).swiper;
          swiperInstance.slideTo(slide);
        });

        checkWheelPicker(picker, value);
      });
    });

    cy.get('[data-testid="btn_goal2"]').click();

    //goal_3
    cy.url({ timeout: 5000 }).should('include', '/goal_3');
    cy.get('[data-testid="btn_goal3"]').should('not.be.visible');

    checkRadioItem(2, 'btn_goal3');

    //reward
    cy.url({ timeout: 5000 }).should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]', { timeout: 5000 }).should('be.visible').click();

    //intention_1
    cy.url({ timeout: 5000 }).should('include', '/intention_1');
    cy.get('[data-testid="btn_intention1"]').should('not.be.visible');
    checkRadioItem(1, 'btn_intention1');
    // reward
    cy.url({ timeout: 5000 }).should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]', { timeout: 5000 }).should('be.visible').click();

    //intention_2

    cy.url({ timeout: 5000 }).should('include', '/intention_2');
    checkRadioItem(1, 'btn_intention2');

    cy.url({ timeout: 5000 }).should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]', { timeout: 5000 }).should('be.visible').click();

    //intention_3

    cy.url({ timeout: 5000 }).should('include', '/intention_3');
    checkRadioItem(1, 'btn_intention3');

    cy.url({ timeout: 5000 }).should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]', { timeout: 5000 }).should('be.visible').click();

    //intention_4

    cy.url({ timeout: 5000 }).should('include', '/intention_4');
    checkRadioItem(1, 'btn_intention4');

    cy.url({ timeout: 5000 }).should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    cy.get('[data-testid="rewardModuleBtn"]', { timeout: 5000 }).should('be.visible').click();

    //intention_5

    cy.url({ timeout: 5000 }).should('include', '/intention_5');

    const id = 0;

    cy.get(`[data-testid="radioItem_binary_${id}"]`)
      .click()
      .should('have.attr', 'aria-checked', 'true')
      .then(() => {
        cy.get(`[data-testid="btn_intention5"]`).should('be.visible').click();
      });

    // cy.url({timeout:5000}).should('include', `?${ACTIVATION_REWARD_QUERY_NAME}=true`);

    // cy.get('[data-testid="rewardModuleBtn"]').should('be.visible').click();

    //intention_9

    cy.url({ timeout: 5000 }).should('include', '/intention_9');

    const weightSlide = weight - ACTIVATION_WEIGHT_VALUES.min;
    cy.get(`[data-testid='wheelPicker_weight']`).then(($swiper) => {
      cy.window().then((win) => {
        const swiperInstance = ($swiper[0] as any).swiper;
        swiperInstance.slideTo(weightSlide);
      });

      cy.get(`[data-testid='wheelPicker_weight']`)
        .find(`[data-testid='wheelPickerCell_${weight} kg']`)
        .should('exist')
        .should('have.text', `${toPersianNumbers(weight)} kg`);
    });

    cy.get('[data-testid="btn_intention9"]').click();

    //intention_10

    cy.url({ timeout: 5000 }).should('include', '/intention_10');

    const heightSlide = height - ACTIVATION_HEIGHT_VALUES.min;
    cy.get(`[data-testid='wheelPicker_height']`).then(($swiper) => {
      cy.window().then((win) => {
        const swiperInstance = ($swiper[0] as any).swiper;
        swiperInstance.slideTo(heightSlide);
      });

      cy.get(`[data-testid='wheelPicker_height']`)
        .find(`[data-testid='wheelPickerCell_${height} cm']`)
        .should('exist')
        .should('have.text', `${toPersianNumbers(height)} cm`);
    });

    cy.get('[data-testid="btn_intention10"]').click();

    //intention_6

    cy.get('[data-testid="rewardModuleBtn"]', { timeout: 5000 }).should('be.visible').click();
    cy.url({ timeout: 5000 }).should('include', '/intention_6');

    cy.get('[data-testid="btn_intention6"]').should('not.be.visible');
    const endDate = moment();
    const targetDate = '1404/04/31';

    const targetMoment = moment(targetDate, 'jYYYY/jMM/jDD');
    const monthsDiff = endDate.diff(targetMoment, 'month');

    const targetDay = Number(targetMoment.format('jD'));

    if (monthsDiff > 0) {
      for (let i = 0; i < monthsDiff; i++) {
        cy.get('[data-testid="btn_next"]', { timeout: 300 }).click();
      }
    } else if (monthsDiff < 0) {
      for (let i = 0; i < Math.abs(monthsDiff); i++) {
        cy.get('[data-testid="btn_previous"]', { timeout: 300 }).click();
      }
    }

    cy.get(`[data-testid="activation_month_${monthsDiff}"]`)
      .find(`[data-testid="activation_single_day_${targetDay}"]`)
      .click();

    cy.get("[data-testid='btn_intention6']").should('be.visible').click();
    // //intention_7

    cy.url({ timeout: 10000 }).should('include', '/intention_7');
    const totalCycleLength = 27 - 3;

    cy.get(`[data-testid='wheelPicker_totalCycleLength']`).then(($swiper) => {
      cy.window().then((win) => {
        const swiperInstance = ($swiper[0] as any).swiper;
        swiperInstance.slideTo(totalCycleLength);
      });
    });

    cy.get(`[data-testid='wheelPicker_totalCycleLength']`)
      .find(`[data-testid='wheelPickerCell_${27}']`)
      .should('exist')
      .should('have.text', `${toPersianNumbers(27)}`);

    cy.get('[data-testid="btn_intention7"]').click();

    // // intention_8

    cy.url({ timeout: 10000 }).should('include', '/intention_8');

    const periodLength = 7 - 2;

    cy.get(`[data-testid='wheelPicker_periodLength']`).then(($swiper) => {
      cy.window().then((win) => {
        const swiperInstance = ($swiper[0] as any).swiper;
        swiperInstance.slideTo(periodLength);
      });
    });

    cy.get(`[data-testid='wheelPicker_periodLength']`)
      .find(`[data-testid='wheelPickerCell_${7}']`)
      .should('exist')
      .should('have.text', `${toPersianNumbers(7)}`);

    cy.intercept('POST', `/CustomerAccount/v2/Register`).as('registerApi');
    cy.get('[data-testid="btn_intention8"]').click();

    cy.get('@registerApi').its('response').should('eq', 200);
  });
});

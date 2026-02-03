import React, { useState } from 'react';

import { WheelPicker, WheelPickerDivider } from '@repo/core/components/ui/WheelPicker';

import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';

import useDefaultDate from './__hooks__/useDefaultDate';
import useListsMaker from './__hooks__/useListsMaker';
import useValueHandler from './__hooks__/useValueHandler';
import { DateModuleProps, StateValuesHandlerTypes, ValuesTypes } from './types';

const DateModule = ({ defaultDate, startDate, endDate, valueHandler, testId }: DateModuleProps) => {
  const { isLargeScreen } = useActivationIsLargeScreen();
  const [values, setValues] = useState<ValuesTypes>({ month: '', year: '', day: '' });
  const [initialValuesSteps, setInitialValuesSteps] = useState({ day: false, month: false });

  useValueHandler({ values, valueHandler });

  useDefaultDate({ onDefaultData: setValues, defaultDate: defaultDate || endDate });

  const { daysList, monthsList, yearsList } = useListsMaker({ values, endDate, startDate });

  const stateValuesHandler: StateValuesHandlerTypes = (v, name) => {
    setValues((state) => ({ ...state, [name]: v }));
  };

  return (
    <div
      data-testid={testId}
      style={{ marginTop: isLargeScreen ? '40px' : '0' }}
      className="relative w-[calc(100%_-_48px)] grid grid-cols-3 place-items-center mx-auto"
    >
      {daysList && monthsList && yearsList && (
        <>
          <WheelPicker
            list={yearsList}
            defaultValue={values.year}
            testId={`wheelPicker_year`}
            valueHandler={(v) => stateValuesHandler(v.toString(), 'year')}
            onInitialValuesSteps={() => setInitialValuesSteps({ ...initialValuesSteps, month: true })}
          />

          <WheelPickerDivider isTop={true} />

          {initialValuesSteps.month && (
            <WheelPicker
              list={monthsList}
              defaultValue={values.month}
              testId={`wheelPicker_month`}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'month')}
              onInitialValuesSteps={() => setInitialValuesSteps({ ...initialValuesSteps, day: true })}
            />
          )}

          <WheelPickerDivider isTop={false} />

          {initialValuesSteps.day && (
            <WheelPicker
              list={daysList}
              defaultValue={values.day}
              testId={`wheelPicker_day`}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'day')}
            />
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(DateModule, () => {
  return true;
});

'use client';

import MainPageLayout from '@components/MainPageLayout';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { ActionTypeEnum, CyclePhaseEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import PregnancySettingsLinkGenerator from './PregnancySettingsLinkGenerator';
import { PREGNANCY_SETTINGS_LIST } from './constants';

const PregnancySettingsPage = () => {
  const { actionHandler } = useWidgetActions();
  const { getQueryParams } = useQueryParamsHandler();

  const pregnancyDate = getQueryParams('pregnancyDate') || '';
  const isDelivery = Number(getQueryParams('isDelivery') || -1);

  const selectHandler = (phaseType: CyclePhaseEnum) => {
    const action: ActionTypes = {
      actionType: ActionTypeEnum.InternalRout,
      api: '',
      internal: '',
      actionTypes: [],
      nextStep: { type: 0, isDismissible: false, delaySecond: 0, data: {} },
    };

    switch (phaseType) {
      case CyclePhaseEnum.EditPregnancyCycle:
        action.internal = `/enterphase?phase=${CyclePhaseEnum.EditPregnancyCycle}&pregnancyDate=${pregnancyDate}&isDelivery=${isDelivery}`;
        break;
      case CyclePhaseEnum.Breastfeeding:
        action.internal = `/enterphase?phase=${CyclePhaseEnum.Breastfeeding}`;
        break;
      case CyclePhaseEnum.PeriodTracker:
        action.internal = `/enterphase?phase=${CyclePhaseEnum.PeriodTracker}`;
        break;
    }

    actionHandler(action);
  };

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="تنظیمات بارداری" className="bg-impo_Neutral_Surface">
      <div className="flex flex-col items-center gap-2 px-4">
        {PREGNANCY_SETTINGS_LIST.map((item, index) => (
          <PregnancySettingsLinkGenerator
            key={index}
            title={item.title}
            phaseType={item.phaseType}
            selectHandler={selectHandler}
            description={item.description}
          />
        ))}
      </div>
    </MainPageLayout>
  );
};

export default PregnancySettingsPage;

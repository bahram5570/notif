import { useEffect, useState } from 'react';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { BabyCheckTypeEnums, KitTestModuleTypeEnums } from '@repo/core/providers/WidgetActionsProvider';

import { ModalInfoTypes } from './types';

const useTestKitModalsInfo = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const [modalInfo, setModalInfo] = useState<ModalInfoTypes>(null);

  const gregorianDate = getQueryParams('gregorianDate');
  const isHistoryList = getQueryParams('isHistoryList') !== null;
  const moduleType = getQueryParams('moduleType') as null | KitTestModuleTypeEnums;

  useEffect(() => {
    if (moduleType === null || gregorianDate === null) {
      setModalInfo(null);
      return;
    }

    if (moduleType === KitTestModuleTypeEnums.Ovulation) {
      if (isHistoryList) {
        setModalInfo({ type: 'lists', moduleType, gregorianDate });
      }
    }

    if (moduleType === KitTestModuleTypeEnums.BabyCheck) {
      if (isHistoryList) {
        setModalInfo({ type: 'lists', moduleType, gregorianDate });
      } else {
        let babyCheckType = getQueryParams('babyCheckType') as null | BabyCheckTypeEnums;

        if (babyCheckType !== null) {
          // # Enums type is number
          babyCheckType = Number(babyCheckType);

          if (babyCheckType === BabyCheckTypeEnums.Analog) {
            setModalInfo({ type: 'babyCheckSelectors', moduleType, gregorianDate, babyCheckType });
          }

          if (babyCheckType === BabyCheckTypeEnums.Digital) {
            setModalInfo({ type: 'babyCheckSelectors', moduleType, gregorianDate, babyCheckType });
          }
        }
      }
    }
  }, [moduleType, isHistoryList, gregorianDate]);

  return { modalInfo };
};

export default useTestKitModalsInfo;

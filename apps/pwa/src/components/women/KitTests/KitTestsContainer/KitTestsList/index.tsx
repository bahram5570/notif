import { useEffect, useState } from 'react';

import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { KitTestModuleTypeEnums } from '../../enum';
import { kitTestMainInfo } from './constants';
import { DetailsTypes, KitTestsListProps } from './types';

const KitTestsList = ({ moduleType, data, gregorianDate }: KitTestsListProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const [details, setDetails] = useState<DetailsTypes>(null);
  const { pageNavigationHandler } = usePageNavigationLoading();

  useEffect(() => {
    if (data) {
      const result = kitTestMainInfo({ data, moduleType });
      setDetails(result);
    } else {
      setDetails(null);
    }
  }, [data]);

  const clickHandler = () => {
    pageNavigationHandler({ id: gregorianDate, showProgressBar: true });

    const modalName =
      moduleType === KitTestModuleTypeEnums.BabyCheck
        ? MODALS.TEST_KITS_LIST_BABYCHECK
        : MODALS.TEST_KITS_LIST_OVULATION;

    newQueryParamsHandler({ [modalName]: 'true', moduleType, gregorianDate, isHistoryList: 'true' });
  };

  return (
    <>
      {details && (
        <>
          <div className="w-full h-[1px] my-4 bg-impo_Surface_SurfaceVariant" />

          <div className="w-full rounded-lg flex items-center justify-end gap-2 cursor-pointer" onClick={clickHandler}>
            <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
              {details.buttonScript}
            </Dark_Typography>

            <details.Icon className="w-8 h-auto" />
          </div>
        </>
      )}
    </>
  );
};

export default KitTestsList;

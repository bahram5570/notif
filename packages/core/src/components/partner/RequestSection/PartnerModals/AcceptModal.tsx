import { useMemo } from 'react';

import Hamdel from '@assets/shared/icons/hamdel.svg';

import { MODAL_QUERY_NAME } from '../../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../../hooks/useSystem';
import { CustomButton } from '../../../ui/CustomButton';
import { CustomTypography } from '../../../ui/CustomTypography';
import { PartnerModalNameEnums } from './enums';

const AcceptModal = () => {
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { appName } = useSystem();

  const id = getQueryParams('id');
  const partnerName = getQueryParams('partnerName');

  const onClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.TypeDistance,
      id: id || '',
    }),
      pageNavigationHandler({ navigationType: 'logo', id: 'typeRelationShip' }));
  };

  const theme = useMemo<{ backgroundColor: string; className: string; stroke: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          backgroundColor: 'bg-impo_PrimaryMan_PrimaryContainerMan',
          className: '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan',
          stroke: 'stroke-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          backgroundColor: 'bg-impo_Primary_PrimaryContainer',
          className: '',
          stroke: 'stroke-impo_Primary_Primary',
        };
    }
  }, [appName]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-xs">
      <div className={`w-10 h-10 flex justify-center items-center rounded-full  ${theme.backgroundColor}`}>
        <Hamdel className={`w-6 h-6  ${theme.stroke}`} />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <CustomTypography fontSize="Title_Medium" className="text-center text-impo_Neutral_OnBackground">
          همدلی
        </CustomTypography>

        <div className="flex flex-col justify-center items-center gap-6">
          <CustomTypography fontSize="Body_Large" className="text-center text-impo_Neutral_OnBackground">
            {`با قبول کردن درخواست همدلی ${partnerName} اجازه دسترسی به قسمت های زیر رو بهش میدی`}
          </CustomTypography>

          <div className="flex flex-col justify-center items-center">
            {appName === 'PWA' && (
              <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                .مشاهده وضعیت چرخه
              </CustomTypography>
            )}

            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              .مشاهده وضعیت بیوریتم
            </CustomTypography>
          </div>
          <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground text-center">
            لازمه بدونی پارتنرت به مشاوره‌های آنلاین و یادداشت‌هات هیچگونه دسترسی نداره
          </CustomTypography>
        </div>

        <CustomButton onClick={onClickHandler} className={theme.className}>
          <CustomTypography fontSize="Lable_Large" className="text-impo_White">
            باشه
          </CustomTypography>
        </CustomButton>
      </div>
    </div>
  );
};

export default AcceptModal;

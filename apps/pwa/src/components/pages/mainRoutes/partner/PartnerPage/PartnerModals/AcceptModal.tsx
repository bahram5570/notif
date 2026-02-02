import Hamdel from '@assets/icons/hamdel.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { PartnerModalNameEnums } from './enums';

const AcceptModal = () => {
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const id = getQueryParams('id');
  const partnerName = getQueryParams('partnerName');

  const onClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.TypeDistance,
      id: id || '',
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'typeRelationShip' }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-xs">
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-impo_Primary_PrimaryContainer">
        <Hamdel className="w-6 h-6 stroke-impo_Primary_Primary" />
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
            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              .مشاهده وضعیت چرخه
            </CustomTypography>
            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              .مشاهده وضعیت بیوریتم
            </CustomTypography>
          </div>
          <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground text-center">
            لازمه بدونی پارتنرت به مشاوره‌های آنلاین و یادداشت‌هات هیچگونه دسترسی نداره
          </CustomTypography>
        </div>

        <CustomButton onClick={onClickHandler}>
          <CustomTypography fontSize="Lable_Large" className="text-impo_White ">
            باشه
          </CustomTypography>
        </CustomButton>
      </div>
    </div>
  );
};

export default AcceptModal;

import Hamdel from '@assets/icons/hamdel.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
        <Dark_Typography fontSize="Title_Medium" className="text-center text-impo_Neutral_OnBackground">
          همدلی
        </Dark_Typography>

        <div className="flex flex-col justify-center items-center gap-6">
          <Dark_Typography fontSize="Body_Large" className="text-center text-impo_Neutral_OnBackground">
            {`با قبول کردن درخواست همدلی ${partnerName} اجازه دسترسی به قسمت های زیر رو بهش میدی`}
          </Dark_Typography>

          <div className="flex flex-col justify-center items-center">
            <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              .مشاهده وضعیت چرخه
            </Dark_Typography>
            <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              .مشاهده وضعیت بیوریتم
            </Dark_Typography>
          </div>
          <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground text-center">
            لازمه بدونی پارتنرت به مشاوره‌های آنلاین و یادداشت‌هات هیچگونه دسترسی نداره
          </Dark_Typography>
        </div>

        <Dark_Button onClick={onClickHandler}>
          <Dark_Typography fontSize="Lable_Large" className="text-impo_White ">
            باشه
          </Dark_Typography>
        </Dark_Button>
      </div>
    </div>
  );
};

export default AcceptModal;

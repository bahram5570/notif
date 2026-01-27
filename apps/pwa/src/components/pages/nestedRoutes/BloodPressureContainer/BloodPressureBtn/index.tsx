import PenIcon from '@assets/icons/Pen 2.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { BloodPressureBtnPropsType } from './type';

const BloodPressureBtn = ({ value }: BloodPressureBtnPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === 'bloodPressureBtn';

  const currentValue = value.high !== undefined && value.low !== undefined ? `${value.high}/${value.low}` : null;

  const onClick = () => {
    (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
      pageNavigationHandler({ showProgressBar: false, id: 'bloodPressureBtn' }));
  };

  return (
    <div className="flex items-center flex-row-reverse p-2">
      <Dark_Typography fontSize="Lable_Medium" className="w-full text-impo_Neutral_OnBackground">
        عدد فشارخون
      </Dark_Typography>
      <div className="w-full flex  items-center" onClick={onClick}>
        {isLoading && <Dark_Spinner size={24} />}
        {!isLoading && (
          <div className="flex items-center flex-row-reverse gap-3">
            {!currentValue ? (
              <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                انتخاب نشده
              </Dark_Typography>
            ) : (
              <div className="flex  gap-1">
                <Dark_Typography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
                  {`${currentValue}`}
                </Dark_Typography>

                <Dark_Typography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
                  mmHg
                </Dark_Typography>
              </div>
            )}

            <PenIcon className="w-6 h-6 fill-impo_Primary_Primary" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodPressureBtn;

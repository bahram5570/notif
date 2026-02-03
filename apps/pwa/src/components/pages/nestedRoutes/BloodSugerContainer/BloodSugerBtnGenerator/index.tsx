import PenIcon from '@assets/icons/Pen 2.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { BloodSugerBtnGeneratorPropsType } from './type';

const BloodSugerBtnGenerator = ({ name, value, label, index }: BloodSugerBtnGeneratorPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', ['name']: name });
    pageNavigationHandler({ showProgressBar: false, id: name });
  };

  const isLoading = pageNavigationLoading === name;

  const currentValue =
    name === 'condition'
      ? value === 0
        ? 'ناشتا'
        : value === null
          ? ''
          : 'دو ساعت بعد از غذا'
      : value !== null && value;

  return (
    <div
      className={`
                  flex 
                  items-center 
                  flex-row-reverse 
                  p-2 
                  ${index > 0 && 'border-t-[1px] border-t-impo_Surface_OutlineVariant'}
                `}
    >
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground w-full">
        {label}
      </CustomTypography>

      <div onClick={selectHandler} className="w-full flex items-center">
        <div className="flex items-center flex-row-reverse gap-3">
          {isLoading && <CustomSpinner size={20} className="border-impo_Primary_Primary" />}

          {!isLoading && (
            <>
              {!currentValue ? (
                <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                  انتخاب نشده
                </CustomTypography>
              ) : (
                <div className="flex gap-1">
                  <CustomTypography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
                    {`${currentValue}`}
                  </CustomTypography>

                  {name !== 'condition' && (
                    <CustomTypography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
                      mg/dL
                    </CustomTypography>
                  )}
                </div>
              )}
            </>
          )}

          <PenIcon className="w-6 h-6 fill-impo_Primary_Primary" />
        </div>
      </div>
    </div>
  );
};

export default BloodSugerBtnGenerator;

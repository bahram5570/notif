import PenIcon from '@assets/icons/Pen 2.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { NoteBtnModalPropsType } from './type';

const NoteBtnModal = ({ description, label, name, value }: NoteBtnModalPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === name;
  const displayDate = value ? value.replace(/-/g, '/') : 'تنظیم نشده';

  const linkToHandler = () => {
    (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name }),
      pageNavigationHandler({ showProgressBar: false, id: name }));
  };

  return (
    <div className="py-1  px-2 flex flex-col gap-2 ">
      <div className="flex items-center flex-row-reverse p-1">
        <div className="flex gap-1 flex-row-reverse ">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {label}
          </CustomTypography>

          {description && (
            <CustomTypography fontSize="Lable_Large" className="text-impo_Surface_Outline">
              {description}
            </CustomTypography>
          )}
        </div>

        <div className="w-full flex  items-center" onClick={linkToHandler}>
          {isLoading && <CustomSpinner size={24} className="border-impo_Primary_Primary" />}

          {!isLoading && (
            <div className="flex items-center flex-row-reverse gap-3">
              <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
                {displayDate}
              </CustomTypography>

              <PenIcon className="w-6 h-6 fill-impo_Primary_Primary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteBtnModal;

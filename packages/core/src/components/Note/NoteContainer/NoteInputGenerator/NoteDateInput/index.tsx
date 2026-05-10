import PenIcon from '@assets/shared/icons/Pen 2.svg';

import { MODAL_QUERY_NAME } from '../../../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';
import { CustomSpinner } from '../../../../ui/CustomSpinner';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { NoteModalNameEnums } from '../../NoteModal/enum';
import { NoteDateInputPropsType } from './type';

const NoteDateInput = ({ value }: NoteDateInputPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === NoteModalNameEnums.DateTime;
  const displayDate = value ? value.replace(/-/g, '/') : 'تنظیم نشده';

  const linkToHandler = () => {
    (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name: NoteModalNameEnums.DateTime }),
      pageNavigationHandler({ showProgressBar: false, id: NoteModalNameEnums.DateTime }));
  };
  return (
    <div className="py-1  px-2 flex flex-col gap-2 ">
      <div className="flex items-center flex-row-reverse p-1">
        <div className="flex gap-1 flex-row-reverse ">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            تاریخ
          </CustomTypography>
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

export default NoteDateInput;

import PenIcon from '@assets/icons/Pen 2.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {label}
          </Dark_Typography>

          {description && (
            <Dark_Typography fontSize="Lable_Large" className="text-impo_Surface_Outline">
              {description}
            </Dark_Typography>
          )}
        </div>

        <div className="w-full flex  items-center" onClick={linkToHandler}>
          {isLoading && <Dark_Spinner size={24} className="border-impo_Primary_Primary" />}

          {!isLoading && (
            <div className="flex items-center flex-row-reverse gap-3">
              <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
                {displayDate}
              </Dark_Typography>

              <PenIcon className="w-6 h-6 fill-impo_Primary_Primary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteBtnModal;

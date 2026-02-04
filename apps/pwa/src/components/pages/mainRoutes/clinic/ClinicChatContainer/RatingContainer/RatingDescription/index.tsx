import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@repo/core/constants/app.contants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import RatingDescriptionModal from './RatingDescriptionModal';
import { RatingDescriptionProps } from './types';

const RatingDescription = ({ rate, description, descriptionHandler, onClick }: RatingDescriptionProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const commentTicketId = 'commentTicketId';
  const isLoading = pageNavigationLoading === commentTicketId;

  const openModalHandler = () => {
    if (!isLoading) {
      newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' });
      pageNavigationHandler({ showProgressBar: false, id: commentTicketId });
    }
  };

  return (
    <>
      {rate > 0 && (
        <>
          <div className="flex flex-col items-end gap-2 pt-6 pb-4  cursor-pointer" onClick={openModalHandler}>
            <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
              لطفا نظرت رو برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم.
            </CustomTypography>

            <div className="w-full h-10 flex items-center justify-end rounded-full px-4 border-[1px] border-impo_Neutral_Surface">
              {isLoading && (
                <div className="mx-auto">
                  <CustomSpinner size={24} className="border-impo_Surface_Outline" />
                </div>
              )}

              {!isLoading && (
                <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                  نظرت رو اینجا بنویس
                </CustomTypography>
              )}
            </div>
          </div>

          <RatingDescriptionModal onClick={onClick} description={description} descriptionHandler={descriptionHandler} />
        </>
      )}
    </>
  );
};

export default RatingDescription;

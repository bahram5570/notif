import PlusIcon from '@assets/icons/plus.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useFileUpload from '@hooks/useFileUpload';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { EmptyStatePropsType } from './type';

const EmptyState = ({ valuesHandler }: EmptyStatePropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const { uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => valuesHandler({ name: 'fileName', value: v }),
  });

  return (
    <div
      className="relative w-full flex items-center justify-center gap-2 py-2 cursor-pointer"
      onClick={() => {
        (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
          pageNavigationHandler({ showProgressBar: false, id: 'supportUploadChat' }));
      }}
    >
      {uploadImageLoading && <CustomSpinner size={20} />}

      {!uploadImageLoading && (
        <>
          <CustomTypography fontSize="Lable_Medium" className="pointer-events-none text-impo_Neutral_OnBackground">
            از اینجا میتونی عکس یا فایل اضافه کنی
          </CustomTypography>

          <PlusIcon className="w-4 h-4  pointer-events-none stroke-impo_Neutral_OnBackground" />
        </>
      )}
    </div>
  );
};

export default EmptyState;

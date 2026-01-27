import PlusIcon from '@assets/icons/plus.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import useFileUpload from '@hooks/useFileUpload';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
      {uploadImageLoading && <Dark_Spinner size={20} />}

      {!uploadImageLoading && (
        <>
          <Dark_Typography fontSize="Lable_Medium" className="pointer-events-none text-impo_Neutral_OnBackground">
            از اینجا میتونی عکس یا فایل اضافه کنی
          </Dark_Typography>

          <PlusIcon className="w-4 h-4  pointer-events-none stroke-impo_Neutral_OnBackground" />
        </>
      )}
    </div>
  );
};

export default EmptyState;

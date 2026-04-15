import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useFileUpload } from '@repo/core/hooks/useFileUpload';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

// import { ChallengeResponseType } from '../__hooks__/useGetData/type';
import Inputs from './Inputs';
import useChangeImage from './__hooks__/useChangeImage';
import useDelete from './__hooks__/useDelete';

const UploadBackgroundImageModal = () => {
  const { editHandler } = useChangeImage();
  const { getQuery, updateQuery } = useCustomReactQuery(['partner']);
  const { getQueryParams } = useQueryParamsHandler();
  const partnerInfo = getQuery<any>({ queryKey: ['partner'] });
  const { deleteHandler } = useDelete({
    api: `pair/cover/?AppVersion=${APP_VERSION || ''}`,
    onSuccess: () => updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, coverImage: '' } }),
  });

  const canDeleteImage = getQueryParams('canDeleteImage');

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => {
      updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, coverImage: v } });
      editHandler({ fileName: v });
    },
    api: 'pair/cover',
  });

  return (
    <Inputs
      canDeleteImage={canDeleteImage}
      fileDataHandler={fileDataHandler}
      deleteHandler={deleteHandler}
      uploadImageLoading={uploadImageLoading}
    />
  );
};

export default UploadBackgroundImageModal;

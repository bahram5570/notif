import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ChallengeResponseType } from '../__hooks__/useGetData/type';
import Inputs from './Inputs';
import useChangeImage from './__hooks__/useChangeImage';
import useDelete from './__hooks__/useDelete';
import useFileUpload from './__hooks__/useFileUpload';

const UploadBackgroundImageModal = () => {
  const { editHandler } = useChangeImage();
  const { getQuery, updateQuery } = useCustomReactQuery(['partnerKey']);
  const { getQueryParams } = useQueryParamsHandler();
  const partnerInfo = getQuery<ChallengeResponseType>({ queryKey: ['partnerKey'] });
  const { deleteHandler } = useDelete({
    api: `pair/cover/?AppVersion=${APP_VERSION || ''}`,
    onSuccess: () => updateQuery({ queryKey: ['partnerKey'], payload: { ...partnerInfo, coverImage: '' } }),
  });

  const canDeleteImage = getQueryParams('canDeleteImage');

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => {
      updateQuery({ queryKey: ['partnerKey'], payload: { ...partnerInfo, coverImage: v } });
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

import { APP_VERSION } from '@constants/app.constants';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ChallengeResponseType } from '../__hooks__/useGetData/type';
import Inputs from './Inputs';
import useAvatar from './__hooks__/useAvatar';
import useDelete from './__hooks__/useDelete';
import useFileUpload from './__hooks__/useFileUpload';

const UploadImageModal = () => {
  const { editHandler } = useAvatar();
  const { getQuery, updateQuery } = useCustomReactQuery(['partner']);
  const { getQueryParams } = useQueryParamsHandler();
  const partnerInfo = getQuery<ChallengeResponseType>({ queryKey: ['partner'] });
  const { deleteHandler } = useDelete({
    api: `profile/image/?AppVersion=${APP_VERSION || ''}`,
    onSuccess: () =>
      updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, womanAvatar: '', canDeleteProfile: false } }),
  });

  const canDeleteImage = getQueryParams('canDeleteProfile');

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => {
      updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, womanAvatar: v, canDeleteProfile: true } });
      editHandler({ fileName: v });
    },

    api: 'profile/image',
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

export default UploadImageModal;

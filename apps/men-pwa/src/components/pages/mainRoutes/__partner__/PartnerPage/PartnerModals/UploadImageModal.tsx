import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useFileUpload } from '@repo/core/hooks/useFileUpload';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ChallengeResponseType } from '../__hooks__/useGetPartnerData/type';
import Inputs from './Inputs';
import useAvatar from './__hooks__/useAvatar';
import useDelete from './__hooks__/useDelete';

const UploadImageModal = () => {
  const { editHandler } = useAvatar();
  const { getQuery, updateQuery } = useCustomReactQuery(['partner']);
  const { getQueryParams } = useQueryParamsHandler();
  const partnerInfo = getQuery<ChallengeResponseType>({ queryKey: ['partner'] });
  const queryData = getQuery<{ data: ProfileResponseTypes }>({ queryKey: ['profile'] });

  const { deleteHandler } = useDelete({
    api: `profile/image/?AppVersion=${APP_VERSION || ''}`,
    onSuccess: () =>
      updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, canDeleteProfile: false, manAvatar: '' } }),
  });

  const canDeleteImage = getQueryParams('canDeleteProfile');

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => {
      if (queryData?.data) {
        const newData = {
          data: { ...queryData.data, avatarImage: v, canDeleteAvatar: true },
        };

        updateQuery({ payload: newData, queryKey: ['profile'] });
      }
      updateQuery({ queryKey: ['partner'], payload: { ...partnerInfo, manAvatar: v, canDeleteProfile: true } });
      editHandler({ fileName: v });
    },

    api: 'profile/image',
    method: 'PUT',
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

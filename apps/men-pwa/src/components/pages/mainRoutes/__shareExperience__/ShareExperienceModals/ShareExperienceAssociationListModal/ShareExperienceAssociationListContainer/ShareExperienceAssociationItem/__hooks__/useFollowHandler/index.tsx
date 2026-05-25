import { AssociationInfoResponseType } from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModals/ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationInfo/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { AssociationListResponseType } from '../../../__hooks__/useGetAssociationListData/type';
import { SuccessHandlerPropsType, UseFollowHandlerPropsType } from './type';

const useFollowHandler = ({ isFollow, associationId }: UseFollowHandlerPropsType) => {
  const api = `shareeexperience/v3/association/${isFollow ? 'unfollow' : 'follow'}`;
  const { updateQuery, getQuery } = useCustomReactQuery(['associationListData']);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const associationListData = getQuery<AssociationListResponseType>({ queryKey: ['associationListData'] });
  const associationInfoData = getQuery<AssociationInfoResponseType>({ queryKey: [`associationInfoData`] });

  const successHandler = (v: SuccessHandlerPropsType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
    if (v.valid) {
      if (associationListData) {
        const newData = { ...associationListData };
        const currentAssociation = newData.items?.find((item) => item.id === associationId);
        if (currentAssociation) {
          currentAssociation.isFollowed = !currentAssociation.isFollowed;
          updateQuery({ queryKey: ['associationListData'], payload: newData });
        }
      }

      if (associationInfoData) {
        const newData = { ...associationInfoData };
        newData.isFollowed = !newData.isFollowed;
        newData.followerCount = isFollow ? newData.followerCount - 1 : newData.followerCount + 1;

        updateQuery({ queryKey: [`associationInfoData`], payload: newData });
      }
    }
  };

  const { callApi, isLoading } = usePwaApi({
    api: api,
    method: 'PUT',
    onSuccess: (v: SuccessHandlerPropsType) => successHandler(v),
  });

  const followHandler = () => {
    const payload = {
      associationId,
    };

    callApi(payload);
  };

  return { isLoading, followHandler };
};

export default useFollowHandler;

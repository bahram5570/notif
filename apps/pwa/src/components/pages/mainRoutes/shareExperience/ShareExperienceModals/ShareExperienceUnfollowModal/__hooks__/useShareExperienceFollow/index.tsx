import { useEffect, useState } from 'react';

import {
  ApiInfoTypes,
  FollowHandlerTypes,
  SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME,
} from '@repo/core/components/ShareExperience';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { SuccessResponseType } from './types';
import useUpdateActivitiesList from './updateHandlers/useUpdateActivitiesList';
import useUpdateAssociationExperienceList from './updateHandlers/useUpdateAssociationExperienceList';
import useUpdateCommentList from './updateHandlers/useUpdateCommentList';
import useUpdateExperienceList from './updateHandlers/useUpdateExperienceList';
import useUpdateProfile from './updateHandlers/useUpdateProfile';
import useUpdateSelfExperienceList from './updateHandlers/useUpdateSelfExperienceList';
import useUpdateTopicExperience from './updateHandlers/useUpdateTopicExperience';

const useShareExperienceFollow = (experienceId?: string) => {
  const router = useCustomRouter();
  const toast = useCustomToast();
  const { getQueryParams } = useQueryParamsHandler();
  const [apiInfo, setApiInfo] = useState<null | ApiInfoTypes>(null);
  const { updateExperienceListHandler } = useUpdateExperienceList();
  const { updateCommentListHandler } = useUpdateCommentList();
  const { updateTopicExperience } = useUpdateTopicExperience();
  const { updateAssociationExperienceList } = useUpdateAssociationExperienceList();
  const { updateProfileHandler } = useUpdateProfile();
  const { updateActivitiesListHandler } = useUpdateActivitiesList();
  const { updateSelfExperienceListHandler } = useUpdateSelfExperienceList();
  const { accessOptionHandler } = useShareExperienceHandlers();

  const successHandler = (v: SuccessResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
    updateExperienceListHandler({ isFollow: apiInfo?.isFollow, userId: apiInfo?.userId });
    updateTopicExperience({ isFollow: apiInfo?.isFollow, userId: apiInfo?.userId });
    updateCommentListHandler({ isFollow: apiInfo?.isFollow, userId: apiInfo?.userId, experienceId: experienceId });
    updateAssociationExperienceList({ isFollow: apiInfo?.isFollow, userId: apiInfo?.userId });
    updateActivitiesListHandler({ isFollow: apiInfo?.isFollow, userId: apiInfo?.userId });
    updateSelfExperienceListHandler({ isFollow: apiInfo?.isFollow, userId: apiInfo?.userId });
    updateProfileHandler();

    const isModalOpen = getQueryParams(SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME);
    if (isModalOpen) {
      router.back();
    }

    setApiInfo(null);

    toast.feedbackToastHandler({
      message: `${apiInfo?.isFollow ? `${apiInfo?.userName} از لیست کسانی که دنبالشون می کردی حذف شد` : `${apiInfo?.userName} با موفقیت دنبال شد`}`,
      toastWithDescription: false,
    });
  };

  const errorHandler = () => {
    setApiInfo(null);
  };

  const api =
    apiInfo === null ? '' : `shareeexperience/v3/profile/${apiInfo.userId}/${apiInfo.isFollow ? 'unfollow' : 'follow'}`;

  const { callApi, isLoading: isFollowLoading } = usePwaApi({
    api,
    method: 'GET',
    fetchOnMount: false,
    onError: errorHandler,
    onSuccess: successHandler,
    queryKey: ['follow' + api],
  });

  useEffect(() => {
    if (apiInfo !== null) {
      callApi();
    }
  }, [apiInfo]);

  const followHandler: FollowHandlerTypes = (v) => {
    setApiInfo(v);
  };

  return { followHandler, isFollowLoading };
};

export default useShareExperienceFollow;

import { useEffect, useState } from 'react';

import { SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { QueryExperiencesDataTypes } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { AssociationExperiencesResponseType } from '../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationItemData/type';
import { CommentsResponseTypes } from '../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { SelfExperienceDataType } from '../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileActivities/__hooks__/useActivitiesData/type';
import { ShareExperenceProfileResponsePropsType } from '../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData/type';
import { ApiInfoTypes, FollowHandlerTypes } from './types';

const useShareExperienceFollow = (experienceId?: string) => {
  const router = useRouter();
  const toast = useCustomToast();
  const { getQueryParams } = useQueryParamsHandler();
  const [apiInfo, setApiInfo] = useState<null | ApiInfoTypes>(null);
  const { updateQuery, getQuery } = useCustomReactQuery(['experiences']);

  const successHandler = () => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });
    const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + experienceId] });
    const exitTopicExperienceData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['topicExperiences'] });
    const exitActivitiesData = getQuery<SelfExperienceDataType>({ queryKey: ['activities'] });
    const exitSelfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['selfExperience'] });
    const shareExperienceProfileData = getQuery<ShareExperenceProfileResponsePropsType>({
      queryKey: ['shareExperienceProfileData'],
    });

    const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
      queryKey: [`associationExperienceList`],
    });

    if (experiencesData) {
      experiencesData.expirences.forEach((item) => {
        if (item.userId === apiInfo?.userId) {
          item.isFollow = !apiInfo.isFollow;
        }
      });

      updateQuery({ queryKey: ['experiences'], payload: experiencesData });
    }

    if (associationExperienceList) {
      associationExperienceList.experiences.forEach((item) => {
        if (item.userId === apiInfo?.userId) {
          item.isFollow = !apiInfo.isFollow;
        }
      });

      updateQuery({ queryKey: ['associationExperienceList'], payload: associationExperienceList });
    }

    if (commentsData) {
      updateQuery({
        queryKey: ['comments ' + experienceId],
        payload: { ...commentsData, isFollow: !commentsData.isFollow },
      });
    }

    if (exitTopicExperienceData) {
      exitTopicExperienceData.expirences.forEach((item) => {
        if (item.userId === apiInfo?.userId) {
          item.isFollow = !apiInfo.isFollow;
        }
      });

      updateQuery({ queryKey: ['topicExperiences'], payload: exitTopicExperienceData });
    }

    if (exitActivitiesData) {
      exitActivitiesData.list.forEach((item) => {
        if (item.userId === apiInfo?.userId) {
          item.isFollow = !apiInfo.isFollow;
        }
      });

      updateQuery({ queryKey: ['activities'], payload: exitActivitiesData });
    }

    if (exitSelfExperienceData) {
      exitSelfExperienceData.list.forEach((item) => {
        if (item.userId === apiInfo?.userId) {
          item.isFollow = !apiInfo.isFollow;
        }
      });

      updateQuery({ queryKey: ['selfExperience'], payload: exitSelfExperienceData });
    }

    if (shareExperienceProfileData) {
      updateQuery({
        queryKey: ['shareExperienceProfileData'],
        payload: { ...shareExperienceProfileData, isFollow: !shareExperienceProfileData.isFollow },
      });
    }

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

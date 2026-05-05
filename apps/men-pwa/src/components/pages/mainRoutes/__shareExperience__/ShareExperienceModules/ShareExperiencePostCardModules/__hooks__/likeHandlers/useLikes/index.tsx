import { useEffect, useState } from 'react';

import { handleLikeInfo, replyLikeCallApi } from './__utils__';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import useLikeActivitiesExperience from '../useLikeActivitiesExperience';
import useLikeAssociationExperience from '../useLikeAssociationExperience';
import useLikeComment from '../useLikeComment';
import useLikeExeprience from '../useLikeExeprience';
import useLikeExepriences from '../useLikeExepriences';
import useLikeReply from '../useLikeReply';
import useLikeTopicExperiences from '../useLikeTopicExperience';
import { ApiInfoTypes, LikeHandlerTypes, UseLikesProps } from './types';

const useLikes = (props: UseLikesProps) => {
  const [apiInfo, setApiInfo] = useState<null | ApiInfoTypes>(null);

  const { updateExperiencesHandler } = useLikeExepriences();
  const { updateExperienceHandler } = useLikeExeprience();
  const { updateCommentHandler } = useLikeComment();
  const { updateReplyHandler } = useLikeReply();
  const { updateAssociationHandler } = useLikeAssociationExperience();
  const { updateTopicHandler } = useLikeTopicExperiences();
  const { updateActivitiesExperienceHandler } = useLikeActivitiesExperience();

  const likeHandler: LikeHandlerTypes = (v) => {
    const likeInfo = { state: props.state, disliked: props.disliked, likeCount: props.likeCount };
    let apiResult = '';

    const { newLikeInfo, newApi } = handleLikeInfo({ v, likeInfo });

    switch (props.type) {
      case 'experiences':
        updateExperiencesHandler({ ...newLikeInfo, shareId: props.shareId });

        apiResult = `manshareeexperience/v3/experience/${props.shareId}/${newApi.likeType}`;
        break;
      case 'experience':
        updateExperienceHandler({ ...newLikeInfo, shareId: props.shareId });

        apiResult = `manshareeexperience/v3/experience/${props.shareId}/${newApi.likeType}`;
        break;

      case 'comment':
        updateCommentHandler({ ...newLikeInfo, shareId: props.shareId, commentId: props.commentId });
        apiResult = `manshareeexperience/v3/experience/${props.shareId}/comments/${props.commentId}/${newApi.likeType}`;
        break;

      case 'reply':
        updateReplyHandler({
          ...newLikeInfo,
          shareId: props.shareId,
          replyId: props.replyId,
          commentId: props.commentId,
        });
        apiResult = `manshareeexperience/v3/experience/${props.shareId}/comments/${props.commentId}/replies/${props.replyId}/${newApi.likeType}`;
        break;

      case 'association':
        updateAssociationHandler({ ...newLikeInfo, shareId: props.shareId });
        apiResult = `manshareeexperience/v3/experience/${props.shareId}/${newApi.likeType}`;
        break;

      case 'topic':
        updateTopicHandler({ ...newLikeInfo, shareId: props.shareId });
        apiResult = `manshareeexperience/v3/experience/${props.shareId}/${newApi.likeType}`;
        break;

      case 'activitiesExperienceType':
        updateActivitiesExperienceHandler({ ...newLikeInfo, shareId: props.shareId });
        apiResult = `manshareeexperience/v3/experience/${props.shareId}/${newApi.likeType}`;
        break;
    }

    setApiInfo({ api: apiResult, method: newApi.method });
  };

  const { callApi: likeCallApi } = usePwaApi({ api: apiInfo?.api || '', method: apiInfo?.method || 'POST' });

  useEffect(() => {
    if (apiInfo) {
      if (props.type === 'reply') {
        replyLikeCallApi(apiInfo.api, apiInfo.method);
      } else {
        likeCallApi({});
      }
      setApiInfo(null);
    }
  }, [apiInfo]);

  return { likeHandler };
};

export default useLikes;

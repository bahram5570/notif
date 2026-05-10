import { newCommentMaker } from './__utils__';
import { CommentsResponseTypes, TopicExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { AssociationExperiencesResponseType } from '../../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationItemData/type';
import { DataRepliesListTypes } from '../../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/CommentsGenerator/ReplyGenerator/__hooks__/useReplyList/types';
import { QueryExperiencesDataTypes } from '../../../../ShareExperienceTopicModal/ShareExperienceTopicModalContainer/__hooks__/useGetData/type';
import { NewCommentResponseTypes, NewReplyResponseTypes, UseSubmitProps } from './types';

const useSubmit = ({ text, data }: UseSubmitProps) => {
  const router = useRouter();
  const { updateQuery, getQuery } = useCustomReactQuery();
  let toast: string = '';

  const successHandler = (v: unknown) => {
    if (data.type === 'comment') {
      const response = v as NewCommentResponseTypes;

      if (!response.valid) {
        toast = response.toast;
        return;
      }

      const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });
      if (experiencesData) {
        const experienceIndex = experiencesData.expirences.findIndex((item) => item.id === data.shareId);

        if (experienceIndex > -1) {
          experiencesData.expirences[experienceIndex].commentCount++;
          updateQuery({ queryKey: ['experiences'], payload: experiencesData });
        }
      }

      const topicExperiencesData = getQuery<TopicExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });
      if (topicExperiencesData) {
        const experienceIndex = topicExperiencesData.expirences.findIndex((item) => item.id === data.shareId);
        if (experienceIndex > -1) {
          topicExperiencesData.expirences[experienceIndex].commentCount++;
          updateQuery({ queryKey: ['topicExperiences'], payload: topicExperiencesData });
        }
      }

      const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + data.shareId] });
      if (commentsData) {
        const newComment = newCommentMaker({
          commentId: response.commentId,
          shareId: data.shareId,
          avatar: data.avatar,
          name: data.name,
          text,
        });

        commentsData.comments.unshift(newComment);
        commentsData.commentCount++;

        updateQuery({ queryKey: ['comments ' + data.shareId], payload: commentsData });
      }

      const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
        queryKey: [`associationExperienceList`],
      });
      if (associationExperienceList) {
        const experienceIndex = associationExperienceList.experiences.findIndex((item) => item.id === data.shareId);
        if (experienceIndex > -1) {
          associationExperienceList.experiences[experienceIndex].commentCount++;
          updateQuery({ queryKey: ['associationExperienceList'], payload: associationExperienceList });
        }
      }
    } else if (data.type === 'reply') {
      const response = v as NewReplyResponseTypes;

      const queryKey: [string] = [`repliesList ${data.shareId} ${data.commentId}`];
      const repliesData = getQuery<DataRepliesListTypes>({ queryKey: queryKey });

      if (repliesData) {
        const newReply = { ...response.reply, selfExperience: true, userId: data.userId };
        repliesData.repliesList.unshift(newReply);
        updateQuery({ queryKey: queryKey, payload: repliesData });
      }
    }

    router.back();
  };

  let api = '';
  switch (data.type) {
    case 'comment':
      api = `manshareeexperience/v3/experience/${data.shareId}/comments`;
      break;

    case 'reply':
      api = `manshareeexperience/v3/experience/${data.shareId}/comment/${data.commentId}/reply`;
      break;
  }

  const { callApi, isLoading } = usePwaApi({ api, method: 'POST', onSuccess: successHandler });

  const submitHandler = () => {
    callApi({ text });
  };

  return { submitHandler, isLoading, toast };
};

export default useSubmit;

import { AssociationExperiencesResponseType } from '@components/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationItemData/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { QueryExperiencesDataTypes } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { CommentsResponseTypes } from '../../../../ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { ShareExperenceProfileResponsePropsType } from '../../../../ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData/type';
import { ExperiencesResponseTypes } from '../../../../ShareExperienceModals/ShareExperienceTopicModal/ShareExperienceTopicModalContainer/__hooks__/useGetData/type';
import { UpdateExercieseHandlerTypes } from './types';

const useLikeExeprience = () => {
  const { updateQuery, getQuery, refetchQuery } = useCustomReactQuery();

  const updateExperienceHandler: UpdateExercieseHandlerTypes = (v) => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });
    const associationExperienceList = getQuery<AssociationExperiencesResponseType>({
      queryKey: [`associationExperienceList`],
    });
    const exitProfileQueryKey = getQuery<ShareExperenceProfileResponsePropsType>({
      queryKey: ['shareExperienceProfile'],
    });
    const exitCommentQueryKey = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + v.shareId] });
    const topicExperiencesData = getQuery<ExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });
    if (experiencesData) {
      const index = experiencesData.expirences.findIndex((item) => item.id === v.shareId);

      if (index > -1) {
        const experience = experiencesData.expirences[index];
        experience.likeCount = v.likeCount;
        experience.disliked = v.disliked;
        experience.state = v.state;

        const payload = { ...experiencesData };
        updateQuery({ queryKey: ['experiences'], payload });
      }
    }

    if (associationExperienceList) {
      const index = associationExperienceList.experiences.findIndex((item) => item.id === v.shareId);

      if (index > -1) {
        const experience = associationExperienceList.experiences[index];
        experience.likeCount = v.likeCount;
        experience.disliked = v.disliked;
        experience.state = v.state;

        const payload = { ...associationExperienceList };
        updateQuery({ queryKey: ['associationExperienceList'], payload });
      }
    }

    if (exitProfileQueryKey) {
      refetchQuery({ queryKey: ['shareExperienceProfile'] });
    }
    if (exitCommentQueryKey) {
      updateQuery({
        queryKey: ['comments ' + v.shareId],
        payload: { ...exitCommentQueryKey, likeCount: v.likeCount, disliked: v.disliked, state: v.state },
      });
    }

    if (topicExperiencesData) {
      const updatedExperience = topicExperiencesData.expirences.map((act) =>
        act.id === v.shareId
          ? {
              ...act,
              likeCount: v.likeCount,
              disliked: v.disliked,
              state: v.state,
            }
          : act,
      );

      const payload = { ...topicExperiencesData, expirences: updatedExperience };
      updateQuery({ queryKey: ['topicExperiences'], payload });
    }
  };

  return { updateExperienceHandler };
};

export default useLikeExeprience;

import {
  SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME,
  SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME,
  SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';

export const shareExperienceTopicQueryMaker = (id: string) => {
  const queryValue = JSON.stringify({ id });
  const queryKey = SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME;
  return { queryKey, queryValue };
};

export const shareExperienceCommentQueryMaker = (id: string) => {
  const queryValue = JSON.stringify({ id });
  const queryKey = SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME;
  return { queryKey, queryValue };
};

export const shareExperienceAssociationQueryMaker = (id: string) => {
  const queryValue = id;
  const queryKey = SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME;

  return { queryKey, queryValue };
};

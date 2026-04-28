import { SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE } from '@repo/core/components/ShareExperience';
import {
  shareExperienceAssociationQueryMaker,
  shareExperienceCommentQueryMaker,
  shareExperienceTopicQueryMaker,
} from '@repo/core/utils/shareExperience';

export const shareExperienceHandler = (queries?: string) => {
  const params = new URLSearchParams(queries);
  const route = params.get('route') as null | '/topic' | '/comment' | '/association';
  const id = params.get('id');

  if (route && id) {
    let modal = { queryKey: '', queryValue: '' };

    switch (route) {
      case '/topic':
        modal = shareExperienceTopicQueryMaker(id);
        break;
      case '/comment':
        modal = shareExperienceCommentQueryMaker(id);
        break;
      case '/association':
        modal = shareExperienceAssociationQueryMaker(id);
        break;
    }

    sessionStorage.setItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE, `${modal.queryKey}=${modal.queryValue}`);
  }

  // # Adding 'dummyData' to force router update when navigating to the same route
  return `/protected/shareExperience?dummyData=${Math.random()}`;
};

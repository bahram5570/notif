import { useEffect, useState } from 'react';

import { ShareExperienceResponseTypes } from '@components/pages/mainRoutes/shareExperience/ShareExperienceContainer/__hooks__/useShareExperienceGetData/types';
import { SHARE_EXPERIENCE_ORDER_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { NewReplyQueriesTypes } from '../../../../ShareExperienceNewReplyModal/types';

const useNewCommentQueries = (shareId: string) => {
  const { getQuery } = useCustomReactQuery();
  const [newCommentQueries, setNewCommentQueries] = useState<NewReplyQueriesTypes | null>(null);

  const data = getQuery<ShareExperienceResponseTypes>({ queryKey: ['shareExperience'] });

  useEffect(() => {
    if (data) {
      setNewCommentQueries({
        avatar: data.profile.avatarImage,
        name: data.profile.username,
        type: 'comment',
        shareId,
        [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime(),
      });
    }
  }, [data]);

  return { newCommentQueries };
};

export default useNewCommentQueries;

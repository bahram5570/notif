import { useEffect, useState } from 'react';

import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

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
      });
    }
  }, [data]);

  return { newCommentQueries };
};

export default useNewCommentQueries;

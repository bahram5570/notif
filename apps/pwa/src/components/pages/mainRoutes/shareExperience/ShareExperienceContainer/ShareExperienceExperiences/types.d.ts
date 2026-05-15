import { RefObject } from 'react';

import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

export interface ShareExperienceExperiencesProps extends Pick<
  ShareExperienceResponseTypes,
  'profile' | 'associationSectionTitle' | 'associations'
> {
  showAssociation: boolean;
  onSuccessNewHandler: () => void;
  selectedCategoryId: string | null;
  scrollRef: RefObject<HTMLDivElement>;
}

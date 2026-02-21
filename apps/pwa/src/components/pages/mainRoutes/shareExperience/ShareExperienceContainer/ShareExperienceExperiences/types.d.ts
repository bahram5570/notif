import { ShareExperienceResponseTypes } from '../__hooks__/useShareExperienceGetData/types';

export interface ShareExperienceExperiencesProps extends Pick<
  ShareExperienceResponseTypes,
  'profile' | 'associationSectionTitle' | 'associations'
> {
  selectedCategoryId: string | null;
  onSuccessNewHandler: () => void;
  scrollRef: React.RefObject<HTMLElement>;
  showAssociation: boolean;
}

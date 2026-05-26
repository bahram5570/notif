import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

export interface ShareExperienceExperiencesProps extends Pick<
  ShareExperienceResponseTypes,
  'profile' | 'associationSectionTitle' | 'associations'
> {
  selectedCategoryId: string | null;
  onSuccessNewHandler: () => void;
  scrollRef: RefObject<HTMLDivElement>;
  showAssociation: boolean;
}

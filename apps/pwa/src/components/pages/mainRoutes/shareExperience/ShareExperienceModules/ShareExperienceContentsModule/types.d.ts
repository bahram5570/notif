import { TagType } from '../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';

export interface ShareExperienceContentsModuleProps {
  id: string;
  text: string;
  image: string;
  isSelf: boolean;
  hasLinkTo: boolean;
  tags?: TagType[];
}

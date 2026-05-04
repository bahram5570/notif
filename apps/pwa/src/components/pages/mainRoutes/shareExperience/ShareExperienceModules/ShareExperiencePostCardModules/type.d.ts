import { ExperienceType, ExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { ItemsTypes } from '../ShareExperienceLikesModule/types';

export type ShareExperiencePostCardModulesProps = ItemsTypes &
  Pick<ExperiencesResponseTypes, 'expirences'>['expirences'][0] & {
    isSelf: boolean;
    className?: string;
    hasLinkTo: boolean;
  };

import { ShareExperienceOrdersListTypes } from '../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useShareExperienceOrders/types';

export interface QueryDataShareExperienceProfileModal {
  id: string;
  shareExperienceOrder: number;
}

export interface ShareExperienceProfileModalProps {
  shareExperienceOrdersList: ShareExperienceOrdersListTypes;
}

import { ShareExperienceOrdersListTypes } from '../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useShareExperienceOrders/types';

export interface QueryDataShareExperienceFollowingModal {
  userId: string;
  dummyData: number;
}

export interface ShareExperienceFollowingModalProps {
  shareExperienceOrdersList: ShareExperienceOrdersListTypes;
}

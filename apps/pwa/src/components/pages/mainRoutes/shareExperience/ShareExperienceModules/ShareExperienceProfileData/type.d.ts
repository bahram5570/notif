import { ShareExperenceProfileResponsePropsType } from '../../ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData/type';

export type selfType = Pick<ShareExperenceProfileResponsePropsType, 'activities'>['activities'];

export type ShareExperienceProfileDataPropsType = {
  isSelf: boolean;
  experienceDataList: selfType | undefined;
  isLoading: boolean;
};

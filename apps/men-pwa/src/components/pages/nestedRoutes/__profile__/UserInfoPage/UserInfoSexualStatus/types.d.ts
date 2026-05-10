import { SexualStatusEnum } from '@providers/ProfileProvider/__hooks__/useGetProfileData/enum';

export interface UserInfoSexualStatusTypes {
  value: SexualStatusEnum;
  valueHandler: (v: SexualStatusEnum) => void;
}

import { ActivationTabsListTypes } from '@components/activation/ActivationTabs/types';
import { SexualStatusEnum } from '@providers/ProfileProvider/__hooks__/useGetProfileData/enum';

export const CHANGE_SEXUALSTATUS_TYPE_LIST: ActivationTabsListTypes = [
  { text: 'دارم', value: SexualStatusEnum.HasSex },
  { text: 'ندارم', value: SexualStatusEnum.NoSex },
];

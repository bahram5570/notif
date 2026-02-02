import { ShareExperienceFollowingModalContainerProps } from '../../type';

export type UseGetFollowingDataPropsType = Pick<ShareExperienceFollowingModalContainerProps, 'userId'>;

export type ItemType = {
  id: string;
  name: string;
  image: string;
};

export type FollowingResponseType = {
  items: ItemType[];
};

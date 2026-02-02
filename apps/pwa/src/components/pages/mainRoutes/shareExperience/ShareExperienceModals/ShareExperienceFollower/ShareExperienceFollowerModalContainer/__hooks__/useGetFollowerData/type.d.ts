import { ShareExperienceFollowerModalContainerProps } from '../../type';

export type UseGetFollowerDataPropsType = Pick<ShareExperienceFollowerModalContainerProps, 'userId'>;

export type ItemType = {
  id: string;
  name: string;
  image: string;
};

export type FollowerResponseType = {
  items: ItemType[];
};

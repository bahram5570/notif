import { ShareExperienceStateEnum } from '../enum';

export type LikeHandlerTypes = (v: ShareExperienceStateEnum) => void;
export type LikeActionModuleProps = {
  state: ShareExperienceStateEnum;
  likeCount: number;
  disliked: number;
  isSelf: boolean;
  likeHandler: LikeHandlerTypes;
};

export type ProgressType = {
  visible: true;
  goldPercent: number;
  goldText: string;
  bronzePercent: number;
  bronzeText: string;
  silverPercent: number;
  silverText: string;
  currentPercent: number;
};
export type ChallengeChatHeaderPropsType = {
  partnerAvatar: string;
  partnerName: string;
  createTime: string;
  progress: ProgressType;
  avatar: string;
};

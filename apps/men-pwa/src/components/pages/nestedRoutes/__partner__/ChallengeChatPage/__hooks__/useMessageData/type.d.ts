import { SubmitResponsePropsType } from '../useSubmit/type';

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

export type MessageItemType = {
  id: string;
  createTime: string;
  text: string;
  replyId: string;
  side: number;
};

export type ChatResponseType = {
  createTime: string;
  name: string;
  avatar: string;
  partnerName: string;
  partnerAvatar: string;
  text: string;
  items: MessageItemType[];
  progress: ProgressType;
};

export type UseMessageListPropsType = {
  data: ResponsePropsType | undefined;
  newMessageData: SubmitResponsePropsType | undefined;
  submitLoading: boolean;
};

export type SubmitResponseType = {
  id: string;
  progress: ProgressType;
};

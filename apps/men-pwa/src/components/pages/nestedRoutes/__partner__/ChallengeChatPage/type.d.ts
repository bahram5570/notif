export type InputPropsType = {
  submitHandler: (text: string) => void;
  onChange: (v: ItemPropsType) => void;
  isLoading: boolean;
};

export type ItemPropsType = {
  id: string;
  createTime: string;
  text: string;
  replyId: string;
  side: number;
};

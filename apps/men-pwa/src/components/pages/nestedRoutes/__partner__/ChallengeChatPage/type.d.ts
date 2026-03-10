export type InputPropsType = {
  submitHandler: (text: string) => void;
  onChange: (v: ItemPropsType) => void;
};

export type ItemPropsType = {
  id: string;
  createTime: string;
  text: string;
  replyId: string;
  side: number;
};

import { SideEnum } from './constants';

export type ItemPropsType = {
  createTime: string;
  id: string;
  side: SideEnum;
  text: string;
  hasDelete?: boolean;
};

export type ResponseMessageDataType = {
  items: ItemPropsType[];
  totalCount: number;
};

export type MessagePropsType = Pick<ItemPropsType, 'createTime' | 'side' | 'text' | 'id'>;

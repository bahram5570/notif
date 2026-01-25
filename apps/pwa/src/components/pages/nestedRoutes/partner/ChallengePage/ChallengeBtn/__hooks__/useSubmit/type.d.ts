import { ResponsePropsType } from '../../../__hooks__/useGetFormData/type';

export type BtnType = Pick<ResponsePropsType, 'btn'>;

export type UseSubmitPropsType = {
  id: string;
  btn: {
    text: string;
    nextStep: null;
  };
};

export type SubmitHandlerPropsType = {
  text: string;
  questionText: string;
};

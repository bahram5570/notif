import { ResponseTypes } from '../__hooks__/useGetData/types';

export type WelcomingProps = Pick<ResponseTypes, 'welcoming'> & {
  showWelcomingHandler: () => void;
};

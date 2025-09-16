import { InvalidMessageTypes } from '../__hooks__/useValidation/types';

export interface Otp1BtnProps {
  invalidMessage: InvalidMessageTypes;
  showContinueBtn: boolean;
  nextHandler: () => void;
  isLoading: boolean;
}

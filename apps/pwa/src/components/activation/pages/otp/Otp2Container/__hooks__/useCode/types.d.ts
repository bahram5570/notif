export interface UseCodeProps {
  isRegister: boolean | undefined;
  identity: string | undefined;
}

export type SuccessHandlerTypes = (v: { result: boolean; otpMessage: string }) => void;

export interface UseCodeProps {
  isRegister: boolean | undefined;
  identity: string | undefined;
}

export type SuccessHandlerTypes = (v: OtpDataResponseTypes) => void;

export type OptionType = {
  type: number;
  text: string;
  Icon: string;
};

export type OtpDataResponseTypes = {
  result: boolean;
  info: {
    title: string;
    subTitle: string;
    banner: string;
    waitMessage: string;
    waitTime: number;
    type: number;
    options: OptionType[];
  };
};

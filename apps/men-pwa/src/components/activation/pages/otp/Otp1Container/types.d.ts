import { ActivationContainerProps } from '../../types';

export type Otp1CompleteHandlerTypes = (v: OtpInfoTypes) => void;

export interface Otp1ContainerProps extends Pick<
  ActivationContainerProps,
  'payload' | 'payloadHandler' | 'onContinue'
> {
  otp1CompleteHandler: Otp1CompleteHandlerTypes;
}

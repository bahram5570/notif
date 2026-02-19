import { ReactElement } from 'react';

export type ProfileLinkType = {
  name: string;
  link: string;
  Icon: ReactNode;
};

export interface ProfileGeneratorProps extends ProfileLinkType {
  isFirstItem?: boolean;
}

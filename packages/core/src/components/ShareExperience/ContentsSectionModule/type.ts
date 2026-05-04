import { TagType } from '../types';

export type ContentsSectionModuleProps = {
  id: string;
  text: string;
  image: string;
  hasLinkTo?: boolean;
  tags?: TagType[];
};

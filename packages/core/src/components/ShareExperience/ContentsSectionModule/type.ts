import { TagType } from '../types';

export type ContentsSectionModuleProps = {
  id: string;
  text: string;
  image: string;
  isSelf: boolean;
  hasLinkTo: boolean;
  tags?: TagType[];
};

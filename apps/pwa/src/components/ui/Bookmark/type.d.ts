export type BookmarkPropsType = {
  isBookmarked: boolean;
  clickHandler: (e?: React.MouseEvent<HTMLElement>) => void;
  id?: string;
};

export type CustomBookmarkTypes = {
  id?: string;
  isBookmarked: boolean;
  clickHandler: (e?: React.MouseEvent<HTMLElement>) => void;
};

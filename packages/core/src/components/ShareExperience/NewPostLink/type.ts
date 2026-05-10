export interface NewPostLinkProps {
  avatar: string;
  placeholder: string;
  queries: { [key in string]: number | string };
  toast?: string;
  canSendComment?: boolean;
  queryName: string;
  id?: string;
}

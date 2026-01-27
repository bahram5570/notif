export interface NewReplyBtnProps {
  text: string;
  isLoading: boolean;
  submitHandler: () => void;
  btnTop: number | undefined;
  toast: string;
}

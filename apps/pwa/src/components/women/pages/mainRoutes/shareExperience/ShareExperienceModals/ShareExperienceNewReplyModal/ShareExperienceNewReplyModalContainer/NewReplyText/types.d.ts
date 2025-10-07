export interface NewReplyTextProps {
  text: string;
  textHandler: (v: string) => void;
  onChangeBtnTop: (top: number | undefined) => void;
}

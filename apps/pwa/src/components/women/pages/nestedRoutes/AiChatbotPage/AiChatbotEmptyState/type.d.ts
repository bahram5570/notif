export type AiChatbotEmptyStatePropsType = {
  title: string;
  questions: string[];
  description: string;
  disableDeleteBtn: boolean;
  defaultQustionHandler: (text: string) => void;
};

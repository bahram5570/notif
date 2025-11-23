import { UploadItem } from '../__hooks__/useFileUpload/type';

export type AiChatbotFilePreviewPropsType = {
  files: UploadItem[];
  removeFileHandler: (url: string) => void;
  //   ErrorHandler: () => void;
};

import { UploadItemType } from '@providers/__aiChatbot__/AiFileManagerProvider/type';

export type AiChatbotFilePreviewPropsType = {
  files: UploadItemType[];
  removeFileHandler: (url: string) => void;
  retryUploadHandler: () => void;
};

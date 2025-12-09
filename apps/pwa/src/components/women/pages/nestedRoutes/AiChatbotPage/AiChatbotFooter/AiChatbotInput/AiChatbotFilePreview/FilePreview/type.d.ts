import { AiChatbotFilePreviewPropsType } from '../type';

type ItemType = Pick<AiChatbotFilePreviewPropsType, 'files'>['files'][0];
type OtherType = Pick<AiChatbotFilePreviewPropsType, 'removeFileHandler' | 'retryUploadHandler'>;
export interface FilePreviewPropsType extends ItemType, OtherType {}

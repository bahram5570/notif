import { AiChatbotFilePreviewPropsType } from '../type';

type ItemType = Pick<AiChatbotFilePreviewPropsType, 'files'>['files'][0];
type OtherType = Pick<AiChatbotFilePreviewPropsType, 'removeFileHandler'>;
export interface FilePreviewPropsType extends ItemType, OtherType {}

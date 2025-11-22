import { AiChatbotFilePreviewPropsType } from '../type';

type ItemType = Pick<AiChatbotFilePreviewPropsType, 'files'>['files'][0];
export interface FilePreviewPropsType extends ItemType {}

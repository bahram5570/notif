export type UpdateChatHandlerType = (message: string, messageId: string) => void;
export type AddChatHandlerType = ({ chat, imageId }: { chat: string; imageId?: string[] }) => void;

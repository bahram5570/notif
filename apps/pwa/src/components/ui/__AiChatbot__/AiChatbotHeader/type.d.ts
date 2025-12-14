export interface AiChatbotHeaderPropsType extends ItemType {
  showActionMenu: boolean;
  showSuggestionBtn?: boolean;
  disableDeleteBtn?: boolean;
  chatTitle?: string;
  imageType?: boolean;
  imageUsageLimit?: number;
  currentImageUsage?: number;
  mediaLimitDate?: string;
}

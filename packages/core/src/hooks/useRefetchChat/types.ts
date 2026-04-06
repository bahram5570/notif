export interface UseRefetchChatTypes {
  isLoading: boolean;
  onCallBack: () => void;
  initialInterval: number;
  lastMessageId: string | undefined;
}

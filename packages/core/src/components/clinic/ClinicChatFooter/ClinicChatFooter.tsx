import { MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import ChatFooterClosed from './ChatFooterClosed';
import ChatFooterMessageInput from './ChatFooterMessageInput';
import ChatFooterRating from './ChatFooterRating';
import ChatFooterRejected from './ChatFooterRejected';
import useChatFooterType from './__hooks__/useChatFooterType';
import { ClinicChatFooterProps } from './types';

export const ClinicChatFooter = ({ isRate, state }: ClinicChatFooterProps) => {
  const { footerType } = useChatFooterType({ isRate, state });

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-2 pb-6 z-30 bg-impo_Neutral_Background"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      {footerType === 'rated' && <ChatFooterClosed />}
      {footerType === 'rating' && <ChatFooterRating />}
      {footerType === 'banner' && <ChatFooterRejected />}
      {footerType === 'chatMessageInput' && <ChatFooterMessageInput />}
    </div>
  );
};

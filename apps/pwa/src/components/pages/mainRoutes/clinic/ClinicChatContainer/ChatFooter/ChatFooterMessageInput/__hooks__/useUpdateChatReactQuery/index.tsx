import { CHAT_PAGE_ID, ChatResponseTypes, SideTypeEnum } from '@repo/core/components/clinic';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useDelayCallback } from '@repo/core/hooks/useDelayCallback';

import { UpgateHandlerTypes } from './types';

const useUpdateChatReactQuery = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();

  const { startDelay } = useDelayCallback(() => {
    const el = document.getElementById(CHAT_PAGE_ID);

    if (el) {
      const scrollHeight = el.scrollHeight;
      window.scroll({ top: scrollHeight + 1000, behavior: 'smooth' });
    }
  });

  const upgateHandler: UpgateHandlerTypes = ({ text, fileName }) => {
    const oldData = getQuery<ChatResponseTypes>({ queryKey: ['chats'] });

    if (oldData) {
      const dateTime = new Date() as unknown as string;
      const newChat = { dateTime, sideType: SideTypeEnum.Patient, media: fileName, text };
      oldData.chats = [...oldData.chats, { ...newChat }];
      updateQuery({ queryKey: ['chats'], payload: oldData });
      startDelay(100);
    }
  };

  return { upgateHandler };
};

export default useUpdateChatReactQuery;

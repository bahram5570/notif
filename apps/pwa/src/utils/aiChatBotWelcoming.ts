import { IS_WELCOMING_IN_CHAT_BOT_TOPICS } from '@constants/app.constants';

export const setWelcomingHandler = () => {
  sessionStorage.setItem(IS_WELCOMING_IN_CHAT_BOT_TOPICS, 'true');
};

export const getWelcomingHandler = () => {
  const isWelcoming =
    typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(IS_WELCOMING_IN_CHAT_BOT_TOPICS);
  return isWelcoming;
};

export const removeWelcomingHandler = () => {
  sessionStorage.removeItem(IS_WELCOMING_IN_CHAT_BOT_TOPICS);
};

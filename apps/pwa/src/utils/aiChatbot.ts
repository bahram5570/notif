import { DEFAULT_QUESTION, PROMPT_TEXT } from '@constants/ai.constants';

export const setSessionStoragePromptText = (text: string) => {
  sessionStorage.setItem(PROMPT_TEXT, text);
};

export const getSessionStoragePromptText = () => {
  const promptText = typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(PROMPT_TEXT);

  return promptText;
};

export const removeSessionStoragePromptText = () => {
  sessionStorage.removeItem(PROMPT_TEXT);
};

export const findDefaultQuestionQuery = (queries: string) => {
  const params = new URLSearchParams(queries);

  const defaultQuestion = params.get(DEFAULT_QUESTION);

  if (defaultQuestion) {
    sessionStorage.setItem(PROMPT_TEXT, defaultQuestion);
  }
};

import { ISITALIC, IS_BOLD, IS_BOLD_WITH_ITALIC } from './constant';

export const parseFormattedText = (text: string): string => {
  text = text.replace(IS_BOLD_WITH_ITALIC, (_, p1) => `<strong><em>${p1}</em></strong>`);
  text = text.replace(IS_BOLD, (_, p1) => `<strong>${p1}</strong>`);
  text = text.replace(ISITALIC, (_, p1) => `<em>${p1}</em>`);
  // text = toPersianNumbers(text);

  return text;
};

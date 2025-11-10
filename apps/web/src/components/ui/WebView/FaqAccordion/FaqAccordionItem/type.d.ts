import { FaqItemType } from '@components/pages/webView/SympathyContainer/type';

export type FaqAccordionItemPropsType = Pick<FaqItemType, 'answer' | 'question'> & { index: number };

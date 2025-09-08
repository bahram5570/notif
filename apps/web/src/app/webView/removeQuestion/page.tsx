import RemoveQuestionContainer from '@components/pages/webView/RemoveQuestionContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const RemoveQuestion = () => {
  return <RemoveQuestionContainer />;
};

export default RemoveQuestion;

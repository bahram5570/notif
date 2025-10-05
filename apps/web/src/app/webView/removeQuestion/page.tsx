import RemoveQuestionContainer from '@components/pages/webView/RemoveQuestionContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const RemoveQuestion = () => {
  return <RemoveQuestionContainer />;
};

export default RemoveQuestion;

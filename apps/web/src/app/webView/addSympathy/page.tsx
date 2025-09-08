import AddSympathyContainer from '@components/pages/webView/AddSympathyContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const AddSympathy = () => {
  return <AddSympathyContainer />;
};

export default AddSympathy;

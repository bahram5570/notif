import ManIosHelpPage from '@components/pages/ManIosHelpPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنمای ios آقایان',
  description: '',
  robots: { follow: false, index: false },
};

const ManIosHelp = () => {
  return <ManIosHelpPage />;
};

export default ManIosHelp;

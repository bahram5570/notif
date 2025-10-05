import ExperimentContainer from '@components/pages/webView/ExperimentContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const Experiment = () => {
  return <ExperimentContainer />;
};

export default Experiment;

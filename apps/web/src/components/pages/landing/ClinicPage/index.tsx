import { SMALL_SCREEN_MAX_WIDTH } from '@constants/app.constants';

import HeaderFooterContainer from '@components/HeaderFooterContainer';

import ClinicCategory from './ClinicCategory';
import ClinicComments from './ClinicComments';
import ClinicFeatures from './ClinicFeatures';
import ClinicHeading from './ClinicHeading';
import ClinicQuestion from './ClinicQuestion';
import ClinicVisit from './ClinicVisit';

const ClinicPage = () => {
  return (
    <HeaderFooterContainer>
      <div
        className="pt-[100px] w-full md:mt-12 mb-10"
        style={{
          backgroundImage: 'url(/assets/images/clinicLanding/featureBg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center -100rem',
          maxWidth: SMALL_SCREEN_MAX_WIDTH,
        }}
      >
        <ClinicHeading />
        <ClinicCategory />
        <ClinicFeatures />
        <ClinicComments />
        <ClinicVisit />
        <ClinicQuestion />
      </div>
    </HeaderFooterContainer>
  );
};

export default ClinicPage;

import HeaderFooterContainer from '@components/HeaderFooterContainer';
import { SMALL_SCREEN_MAX_WIDTH } from '@constants/app.constants';

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
        className="pt-[100px] w-full md:mt-12 mb-10  landing_container"
        style={{
          backgroundImage: 'url(/assets/images/clinicLanding/featureBg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center -100rem',
          // maxWidth: SMALL_SCREEN_MAX_WIDTH,
        }}
      >
        <div className="lg:w-10/12 lg:mx-auto">
          <ClinicHeading />
          <ClinicCategory />
        </div>

        <ClinicFeatures />
        <div className="lg:w-10/12 lg:mx-auto">
          <ClinicComments />
          <ClinicVisit />
          <ClinicQuestion />
        </div>
      </div>
    </HeaderFooterContainer>
  );
};

export default ClinicPage;

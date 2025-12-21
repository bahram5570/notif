import LandingHeading from '@components/LandingHeading';

import LandingsContentsGenerator from '../LandingsContentsGenerator';
import { PREGNANCY_HEADING_DATA } from './constants';

const PregnancyLandingHeading = () => {
  const contentElement = (
    <LandingsContentsGenerator title={PREGNANCY_HEADING_DATA.title} description={PREGNANCY_HEADING_DATA.description} />
  );

  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={contentElement}
      image={PREGNANCY_HEADING_DATA.image}
      className={`!bg-gradient-to-b !from-[${PREGNANCY_HEADING_DATA.gradientFrom}] !to-[${PREGNANCY_HEADING_DATA.gradientTo}]`}
    />
  );
};

export default PregnancyLandingHeading;

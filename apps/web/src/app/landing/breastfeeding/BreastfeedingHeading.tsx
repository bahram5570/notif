import LandingHeading from '@components/LandingHeading';

import LandingsContentsGenerator from '../LandingsContentsGenerator';
import { BREASTFEEDING_HEADING_DATA } from './constants';

const BreastfeedingHeading = () => {
  const contentElement = (
    <LandingsContentsGenerator
      title={BREASTFEEDING_HEADING_DATA.title}
      description={BREASTFEEDING_HEADING_DATA.description}
    />
  );

  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={contentElement}
      image={BREASTFEEDING_HEADING_DATA.image}
      className={`!bg-gradient-to-b !from-[#F3F5FE] !to-[#C9D6FB] dark:!bg-impo_Surface_InverseOnSurface dark:!from-inherit dark:!to-inherit`}
    />
  );
};

export default BreastfeedingHeading;

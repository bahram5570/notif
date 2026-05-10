import LandingsContentsGenerator from '@app/landing/LandingsContentsGenerator';
import LandingHeading from '@components/LandingHeading';

import { SYMPATHY_HEADING_DATA } from './constants';

const SympathyHeading = () => {
  const contentElement = (
    <LandingsContentsGenerator
      btnScript="رابطه‌ت رو بهتر کن"
      title={SYMPATHY_HEADING_DATA.title}
      description={SYMPATHY_HEADING_DATA.description}
    />
  );

  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={contentElement}
      image={SYMPATHY_HEADING_DATA.image}
      className={`!bg-gradient-to-b from-[#FEF2F5] to-[#FFDDE6] dark:!bg-impo_Surface_InverseOnSurface dark:!from-inherit dark:!to-inherit`}
    />
  );
};

export default SympathyHeading;

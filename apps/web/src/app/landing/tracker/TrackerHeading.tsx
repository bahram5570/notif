import LandingHeading from '@components/LandingHeading';

import LandingsContentsGenerator from '../LandingsContentsGenerator';
import { TRACKER_HEADING_DATA } from './constants';

const TrackerHeading = () => {
  const contentElement = (
    <LandingsContentsGenerator title={TRACKER_HEADING_DATA.title} description={TRACKER_HEADING_DATA.description} />
  );

  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={contentElement}
      image={TRACKER_HEADING_DATA.image}
      className={`!bg-gradient-to-b from-[#FEF2F5] to-[#FFDDE6] dark:!bg-impo_Surface_InverseOnSurface dark:!from-inherit dark:!to-inherit`}
    />
  );
};

export default TrackerHeading;

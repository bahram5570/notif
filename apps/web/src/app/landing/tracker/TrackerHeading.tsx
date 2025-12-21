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
      className={`!bg-gradient-to-b !from-[${TRACKER_HEADING_DATA.gradientFrom}] !to-[${TRACKER_HEADING_DATA.gradientTo}]`}
    />
  );
};

export default TrackerHeading;

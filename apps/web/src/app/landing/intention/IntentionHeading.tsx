import LandingHeading from '@components/LandingHeading';

import LandingsContentsGenerator from '../LandingsContentsGenerator';
import { INTENTION_HEADING_DATA } from './constants';

const IntentionHeading = () => {
  const contentElement = (
    <LandingsContentsGenerator title={INTENTION_HEADING_DATA.title} description={INTENTION_HEADING_DATA.description} />
  );

  return (
    <LandingHeading
      imagePosition="center"
      contentElement={contentElement}
      image={INTENTION_HEADING_DATA.image}
      className={`!bg-gradient-to-b !from-[${INTENTION_HEADING_DATA.gradientFrom}] !to-[${INTENTION_HEADING_DATA.gradientTo}]`}
    />
  );
};

export default IntentionHeading;

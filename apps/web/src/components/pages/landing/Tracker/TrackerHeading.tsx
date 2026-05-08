import BlueTick from '@assets/icons/blueTick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import LandingsContentsGenerator from '@app/landing/LandingsContentsGenerator';
import LandingHeading from '@components/LandingHeading';

import { TRACKER_HEADING_DATA } from './constants';

const TrackerHeading = () => {
  const bannerElement = (
    <div className="flex items-start gap-1 p-2 rounded-xl border-[1px] border-impo_Surface_SurfaceVariant w-[150px] rotate-[-30deg]">
      <BlueTick className="w-6 h-auto" />

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-center">
        با بیش از 3 میلیون نصب فعال
      </CustomTypography>
    </div>
  );

  const contentElement = (
    <LandingsContentsGenerator
      bannerElement={bannerElement}
      title={TRACKER_HEADING_DATA.title}
      description={TRACKER_HEADING_DATA.description}
    />
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

import BlueTick from '@assets/icons/blueTick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import LandingsContentsGenerator from '@app/landing/LandingsContentsGenerator';
import LandingHeading from '@components/LandingHeading';

import { INTENTION_HEADING_DATA } from './constants';

const IntentionHeading = () => {
  const bannerElement = (
    <div className="flex items-start gap-1 p-2 rounded-xl border-[1px] border-impo_Surface_SurfaceVariant w-[150px] rotate-[-30deg]">
      <BlueTick className="w-6 h-auto" />

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-center">
        تأییدشده توسط پزشک متخصص
      </CustomTypography>
    </div>
  );

  const contentElement = (
    <LandingsContentsGenerator
      bannerElement={bannerElement}
      title={INTENTION_HEADING_DATA.title}
      description={INTENTION_HEADING_DATA.description}
    />
  );

  return (
    <LandingHeading
      imagePosition="center"
      contentElement={contentElement}
      image={INTENTION_HEADING_DATA.image}
      className={`!bg-gradient-to-b !from-[#F2F7F8] !to-[#C6DFE2] dark:!bg-impo_Surface_InverseOnSurface dark:!from-inherit dark:!to-inherit`}
    />
  );
};

export default IntentionHeading;

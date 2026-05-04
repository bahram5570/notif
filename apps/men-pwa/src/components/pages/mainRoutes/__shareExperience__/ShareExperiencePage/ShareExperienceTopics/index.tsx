import { TopicsSlider } from '@repo/core/components/ShareExperience';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import { ShareExperienceTopicsProps } from './type';

const ShareExperienceTopics = ({ topics }: ShareExperienceTopicsProps) => {
  return (
    <div className="flex flex-col gap-4 items-end " style={{ paddingTop: HEADER_HEIGHT + 10 }}>
      <CustomTypography fontSize="Lable_Large" className="px-3 text-impo_Neutral_OnBackground">
        تالار تجربه
      </CustomTypography>

      <TopicsSlider topics={topics} />
    </div>
  );
};

export default ShareExperienceTopics;

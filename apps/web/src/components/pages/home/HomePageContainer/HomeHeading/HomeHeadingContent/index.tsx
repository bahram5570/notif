import ImpoNameIcon from '@assets/icons/impoName.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import HomeHeadingContentBtn from './HomeHeadingContentBtn';

const HomeHeadingContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <ImpoNameIcon className="w-[112px] lg:w-[138px] h-auto pointer-events-none fill-impo_Primary_Primary" />

      <CustomTypography
        tagType="h1"
        fontSize="Headline_Medium"
        className="py-2 lg:pt-2 lg:pb-1 !text-impo_Neutral_OnBackground"
      >
        دوستته، مشاورته، مراقبته
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        className="text-center lg:text-right  !text-impo_Surface_InverseSurface"
      >
        ایمپو کنارته تا بتونی چرخه قاعدگی، زمان تخمک‌گذاری و دوره بارداریت رو با آرامش دنبال کنی
      </CustomTypography>

      <HomeHeadingContentBtn />
    </div>
  );
};

export default HomeHeadingContent;

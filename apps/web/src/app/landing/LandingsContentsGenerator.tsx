'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import { useSystem } from '@repo/core/hooks/useSystem';

const LandingsContentsGenerator = (props: { title: string; description: string; bannerElement?: JSX.Element }) => {
  const { breakPoint } = useSystem();

  return (
    <div className="relative flex flex-col items-center md:items-start justify-center md:justify-start">
      {props.bannerElement && <div className="absolute -top-3 -left-2">{props.bannerElement}</div>}

      <CustomTypography
        tagType="h1"
        fontSize={breakPoint.tablet ? 'Headline_Medium' : 'Headline_Large'}
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right !text-impo_Neutral_OnBackground"
      >
        {props.title}
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        className="text-center md:text-right !text-impo_Surface_InverseSurface"
      >
        {props.description}
      </CustomTypography>

      <CustomButton
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Medium'}
        className="
                    !w-[170px] 
                    lg:!w-[270px] 
                    h-[40px] 
                    lg:h-[60px] 
                    !mt-2 
                    lg:!mt-6 
                    !mb-8 
                    !bg-impo_Primary_Primary 
                    !border-impo_Primary_Primary 
                    !text-impo_Primary_OnPrimary
                  "
      >
        دانلود ایمپو
      </CustomButton>
    </div>
  );
};

export default LandingsContentsGenerator;

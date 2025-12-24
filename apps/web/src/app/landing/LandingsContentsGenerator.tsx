'use client';

import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

const LandingsContentsGenerator = ({ title, description }: { title: string; description: string }) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <CustomTypography
        tagType="h1"
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right !text-impo_Neutral_OnBackground"
        fontSize={breakPoint.tablet ? 'Headline_Medium' : 'Headline_Large'}
      >
        {title}
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        className="text-center md:text-right !text-impo_Surface_InverseSurface"
      >
        {description}
      </CustomTypography>

      <CustomButton
        varient="FREE_COLORS"
        backgroundColor=""
        borderColor=""
        textColor=""
        className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8 !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
      >
        دانلود ایمپو
      </CustomButton>
    </div>
  );
};

export default LandingsContentsGenerator;

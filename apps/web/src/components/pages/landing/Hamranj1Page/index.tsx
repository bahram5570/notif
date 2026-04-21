import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CustomImage from '@components/ui/CustomImage';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import Hamranj1PageLinkTo from './Hamranj1PageLinkTo';
import Hamranj1PageVideo from './Hamranj1PageVideo';

const Hamranj1Page = () => {
  return (
    <HeaderFooterContainer>
      <>
        <div
          className="relative w-full flex flex-col items-center pt-6 lg:pt-16"
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
        >
          <div
            className="
                      absolute 
                      top-0 
                      left-0 
                      right-0 
                      h-[480px] 
                      bg-gradient-to-b 
                      from-[#B2DAFF] 
                      to-[#FFFFFF] 
                      dark:from-transparent 
                      dark:to-transparent 
                      pointer-events-none 
                      z-0
                    "
          />

          <div className="w-full flex flex-col items-center px-4 z-10">
            <CustomTypography fontSize="Headline_Large" className="text-impo_Cyan_700 pb-2">
              هم رنج...
            </CustomTypography>

            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center pb-3">
              همراه هم برای تحمل این روزها
            </CustomTypography>

            <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
              در تیم ایمپو و همتاپی تمام تلاشمون رو کردیم تا مثل همیشه هم مسیر روزهای سختتون باشیم.
            </CustomTypography>

            <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center pb-3">
              به امید روزهای روشن برای همه.
            </CustomTypography>
          </div>

          <div className="relative w-full px-10">
            <CustomImage
              alt=""
              height={0}
              width={600}
              className="w-full object-cover"
              src={'/assets/images/hamranjHeading.webp'}
            />
          </div>

          <Hamranj1PageVideo />

          <Hamranj1PageLinkTo />
        </div>

        <DownloadApp />
      </>
    </HeaderFooterContainer>
  );
};

export default Hamranj1Page;

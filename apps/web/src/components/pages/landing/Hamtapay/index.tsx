import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CustomImage from '@components/ui/CustomImage';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

const HamtapayPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="relative w-full flex flex-col items-center" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
        <CustomTypography fontSize="Headline_Medium" className="text-impo_Cyan_700">
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

        <div className="relative w-full px-10">{/* <CustomImage src={'/assets/images/contactUs.webp'} fill /> */}</div>
      </div>
    </HeaderFooterContainer>
  );
};

export default HamtapayPage;

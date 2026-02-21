import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { ACTIVATION_HEADING_SCRIPTS_ID } from '@components/activation/ActivationHeading/constants';
import { useSystem } from '@repo/core/hooks/useSystem';
import Link from 'next/link';

const Otp1Footer = () => {
  const { operatingSystem } = useSystem();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  return (
    <div
      id={ACTIVATION_HEADING_SCRIPTS_ID}
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-4 bg-impo_Neutral_Background duration-200 z-30 overflow-hidden"
    >
      <div className="flex flex-row-reverse flex-wrap justify-center gap-1 pt-6 pb-5">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground whitespace-nowrap">
          با ورود به ایمپو،
        </CustomTypography>

        <Link
          target="_blank"
          href="https://impo.app/terms"
          style={{ ...typographyFontStyles }}
          className="text-impo_Primary_Primary whitespace-nowrap border-b-[1px] border-impo_Primary_Primary"
        >
          قوانین و شرایط
        </Link>

        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground whitespace-nowrap">
          استفاده از اپلیکیشن رو می‌پذیرم
        </CustomTypography>
      </div>
    </div>
  );
};

export default Otp1Footer;

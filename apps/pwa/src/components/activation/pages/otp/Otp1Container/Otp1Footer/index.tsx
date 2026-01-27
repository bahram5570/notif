import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import { ACTIVATION_HEADING_SCRIPTS_ID } from '@components/activation/ActivationHeading/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import useOperatingSystem from '@hooks/useOperatingSystem';
import Link from 'next/link';

const Otp1Footer = () => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  return (
    <div
      id={ACTIVATION_HEADING_SCRIPTS_ID}
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-4 bg-impo_Neutral_Background duration-200 z-30 overflow-hidden"
    >
      <div className="flex flex-row-reverse flex-wrap justify-center gap-1 pt-6 pb-5">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground whitespace-nowrap">
          با ورود به ایمپو،
        </Dark_Typography>

        <Link
          target="_blank"
          href="https://impo.app/terms"
          style={{ ...typographyFontStyles }}
          className="text-impo_Primary_Primary whitespace-nowrap border-b-[1px] border-impo_Primary_Primary"
        >
          قوانین و شرایط
        </Link>

        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground whitespace-nowrap">
          استفاده از اپلیکیشن رو می‌پذیرم
        </Dark_Typography>
      </div>
    </div>
  );
};

export default Otp1Footer;

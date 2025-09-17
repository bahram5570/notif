import { ACTIVATION_HEADING_SCRIPTS_ID } from '@components/activation/ActivationHeading/constants';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

const Otp1Footer = () => {
  const { colors, typography } = useTheme();

  const linkFont = typography.Body.Medium;
  const linkColor = colors.PrimaryWoman_Primary;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-4 duration-200 z-30 overflow-hidden"
      style={{ backgroundColor: colors.Neutral_Background }}
      id={ACTIVATION_HEADING_SCRIPTS_ID}
    >
      <div className="flex flex-row-reverse flex-wrap justify-center gap-1 pt-6 pb-5">
        <Typography scale="Body" size="Medium" className="whitespace-nowrap">
          با ورود به ایمپو،
        </Typography>

        <Link
          target="_blank"
          href="https://impo.app/terms"
          className="whitespace-nowrap border-b-[1px]"
          style={{ ...linkFont, color: linkColor, borderColor: linkColor }}
        >
          قوانین و شرایط
        </Link>

        <Typography scale="Body" size="Medium" className="whitespace-nowrap">
          استفاده از اپلیکیشن رو می‌پذیرم
        </Typography>
      </div>
    </div>
  );
};

export default Otp1Footer;

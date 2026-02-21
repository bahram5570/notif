import EmailIcon from '@assets/icons/email.svg';
import InstagramIcon from '@assets/icons/instagram2.svg';
import LinkdinIcon from '@assets/icons/linkedin1.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import XIcon from '@assets/icons/x.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { currentDate } from '@utils/dates';

import CustomLink from '@components/ui/CustomLink';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useSystem } from '@repo/core/hooks/useSystem';

const { jYear } = currentDate();

const FooterSocials = () => {
  const { breakPoint } = useSystem();

  return (
    <>
      <div className="w-full h-[1px] my-6 md:opacity-0 md:mt-0 md:mb-9 bg-impo_Neutral_Surface" />

      <div className="w-full flex flex-col items-center gap-4 pb-4">
        <div className="flex justify-center gap-4">
          <CustomLink href="support@impo.app" target="_blank" aria-label="FooterSocials">
            <EmailIcon className="w-6 stroke-impo_Surface_Outline" />
          </CustomLink>

          <CustomLink href="https://t.me/impo_app" target="_blank" aria-label="FooterSocials">
            <TelegramIcon className="w-6 stroke-impo_Surface_Outline" />
          </CustomLink>

          <CustomLink href="https://twitter.com/impoapp" target="_blank" aria-label="FooterSocials">
            <XIcon className="w-6 stroke-impo_Surface_Outline" />
          </CustomLink>

          <CustomLink href="https://www.instagram.com/impo.app" target="_blank" aria-label="FooterSocials">
            <InstagramIcon className="w-6 stroke-impo_Surface_Outline" />
          </CustomLink>

          <CustomLink href="https://www.linkedin.com/company/impoapp" target="_blank" aria-label="FooterSocials">
            <LinkdinIcon className="w-6 stroke-impo_Surface_Outline" />
          </CustomLink>
        </div>

        <CustomTypography
          className="px-4 text-center !text-impo_Surface_Outline"
          fontSize={breakPoint.tablet ? 'Lable_Small' : 'Body_Small'}
        >
          {`کپی رایت © ${jYear} تمامی حقوق مادی و معنوی متعلق به هلدینگ تاک است.`}
        </CustomTypography>

        <CustomTypography fontSize={'Lable_Small'} className="!text-impo_Surface_Outline" numbersMode="english">
          {APP_VERSION}
        </CustomTypography>
      </div>
    </>
  );
};

export default FooterSocials;

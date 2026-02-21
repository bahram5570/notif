'use client';

import DlPair from '@assets/images/dlpair.webp';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import useDownloadLinks from '@hooks/useDownloadLinks';

const DownloadPairPage = () => {
  const { womanDirectApplcationalink, manDirectApplcationalink } = useDownloadLinks();

  return (
    <div className="w-full max-w-[500px] relative py-6 px-4 bg-gradient-to-b from-pink-100 to-white h-dvh dark:bg-none">
      <div className="grid">
        <CustomTypography className="!text-impo_Pink_500 text-center" fontSize="Headline_Medium">
          پیام‌رسان جدید ایمپو برای
        </CustomTypography>
        <CustomTypography className="!text-impo_Pink_500 text-center" fontSize="Headline_Medium">
          گفتگو با همدل
        </CustomTypography>
        <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-2" fontSize="Body_Medium">
          فقط کافیه هر دو نفر ایمپو مخصوص خودتون رو آپدیت کنید تا بتونید بدون محدودیت در قسمت گفتگو با همدل ایمپو با هم
          صحبت کنید
        </CustomTypography>
        <div className="flex gap-x-3 mt-4">
          <CustomLink
            href={womanDirectApplcationalink}
            className="rounded-full w-full h-12 lg:h-[60px] flex items-center justify-center gap-2 bg-impo_Black"
          >
            <CustomTypography fontSize="Lable_Large" className="!text-impo_White">
              دانلود اپ بانوان
            </CustomTypography>
          </CustomLink>
          <CustomLink
            href={manDirectApplcationalink}
            className="rounded-full w-full h-12 lg:h-[60px] flex items-center justify-center gap-2 bg-impo_Black"
          >
            <CustomTypography fontSize="Lable_Large" className="!text-impo_White">
              دانلود اپ آقایان
            </CustomTypography>
          </CustomLink>
        </div>
        <div className="bg-impo_Neutral_Surface mt-4 rounded-xl py-4 px-3">
          <CustomTypography className="!text-impo_Neutral_OnBackground text-center" fontSize="Lable_Medium">
            نکته مهم:
          </CustomTypography>
          <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-1" fontSize="Body_Medium">
            گفتگوی نامحدود با همدل فعلا برای گوشی‌های سیستم عامل IOS در دسترس نیست
          </CustomTypography>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <CustomImage alt="mockup" src={DlPair} className="w-64" />
      </div>
    </div>
  );
};

export default DownloadPairPage;

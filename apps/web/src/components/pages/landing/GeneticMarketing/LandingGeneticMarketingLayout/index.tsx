'use client';

import collaborationlogo from '@assets/images/geneticMarketing/collaborationlogo.webp';
import drProfileMini from '@assets/images/geneticMarketing/drProfileMini.webp';
import Verified from '@assets/images/geneticMarketing/verified.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import GeneticMarketingLayout from '../GeneticMarketingLayout';

const LandingGeneticMarketingLayout = () => {
  return (
    <GeneticMarketingLayout goBack={false}>
      <CustomTypography tagType="h2" fontSize="Title_Small" className="text-center !text-impo_Neutral_OnBackground">
        یکِ سرنوشت‌ساز
      </CustomTypography>
      <div className="mt-2 text-center">
        <CustomTypography tagType="p" fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
          گاهی فقط یک انتخاب درست ما، آینده‌ی زندگی فرزندمون رو می‌سازه.یک تست ساده می‌تونه خیال تو رو از سلامتی فرزند
          آینده‌ات راحت کنه. متخصص‌های ما براتون تست آنلاینی طراحی کردن که میزان ریسک داشتن فرزند با مشکل ژنتیکی رو
          تخمین میزنه.
        </CustomTypography>
        <CustomTypography tagType="p" fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
          یادت نره انجام آزمایش ژنتیک یک ضرورت برای حفظ سلامت نسل آینده‌ست
        </CustomTypography>
      </div>

      <div className="mt-6 rounded-2xl flex w-full gap-x-2 items-center py-2 px-4 bg-impo_Surface_SurfaceVariant">
        <CustomImage src={drProfileMini} alt="drProfileMini" width={999} height={999} className="w-[48px] h-[48px]" />
        <div className="flex gap-x-1">
          <CustomTypography tagType="p" fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
            تهیه و تایید علمی توسط:
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Lable_Medium" className="!text-impo_Neutral_OnBackground">
            دکتر سارا فرخی
          </CustomTypography>
          <Verified />
        </div>
      </div>
      <div className="w-full mx-auto grid gap-y-6 justify-items-center justify-center fixed right-0 bottom-6">
        <CustomLink
          href="/landing/geneticMarketing/phoneNumber"
          className="w-fit px-10 py-[12px] rounded-full flex justify-center !bg-impo_Primary_Primary"
        >
          <CustomTypography fontSize="Lable_Medium" className="!text-impo_Primary_OnPrimary">
            شروع و تکمیل پرسشنامه
          </CustomTypography>
        </CustomLink>
        <CustomImage src={collaborationlogo} alt="collaborationlogo" width={999} height={999} className="w-[112px]" />
      </div>
    </GeneticMarketingLayout>
  );
};

export default LandingGeneticMarketingLayout;

import drProfileMini from '@assets/images/geneticMarketing/drProfileMini.webp';
import Verified from '@assets/images/geneticMarketing/verified.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import GeneticMarketingLayout from '../GeneticMarketingLayout';

const LandingGeneticMarketingLayout = async () => {
  return (
    <GeneticMarketingLayout goBack={false}>
      <CustomTypography tagType="h2" fontSize="Title_Small" className="text-center">
        یکِ سرنوشت‌ساز
      </CustomTypography>
      <div className="mt-2 text-center">
        <CustomTypography tagType="p" fontSize="Body_Medium">
          یکی بیشتر، گاهی می‌تونه سرنوشت و زندگی یک فرد رو تغییر بده؛ مثل یک کروموزوم اضافه در جفت 21 جنین که منجر به
          بروز سندرم داون میشه.
        </CustomTypography>
        <CustomTypography tagType="p" fontSize="Body_Medium">
          با جواب دادن به پرسش‌نامه صفحه بعد که توسط پزشک متخصص طراحی شده، می‌تونی از میزان ریسک ابتلای فرزند آینده‌ات
          به بیماری‌های ژنتیک مطلع بشی.
        </CustomTypography>
        <CustomTypography tagType="p" fontSize="Body_Medium">
          یادت نره انجام آزمایش ژنتیک فقط یک انتخاب نیست،
        </CustomTypography>
        <CustomTypography tagType="p" fontSize="Body_Medium">
          یک ضرورت برای حفظ سلامت نسل آینده‌ست.
        </CustomTypography>
        <CustomTypography tagType="p" fontSize="Body_Medium">
          اگر تصمیم به بارداری گرفتی تو هم این پرسش‌نامه کوتاه رو پر کن تا در کنار هم به تولد نوزادانی سالم کمک کنیم.
        </CustomTypography>
      </div>

      <div
        className="mt-6 rounded-2xl flex w-full gap-x-2 items-center py-2 px-4"
        style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
      >
        <CustomImage src={drProfileMini} alt="drProfileMini" width={999} height={999} className="w-[48px] h-[48px]" />
        <div className="flex gap-x-1">
          <CustomTypography tagType="p" fontSize="Body_Small">
            تهیه و تایید علمی توسط:
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Lable_Medium">
            دکتر سارا فرخی
          </CustomTypography>
          <Verified />
        </div>
      </div>
      <div className="w-full mx-auto flex justify-center fixed right-0 bottom-6">
        <CustomLink
          href="/landing/geneticMarketing/phoneNumber"
          className="w-fit px-10 py-[12px] rounded-full flex justify-center"
          style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
        >
          <CustomTypography fontSize="Lable_Medium" color={'White'}>
            شروع و تکمیل پرسشنامه
          </CustomTypography>
        </CustomLink>
      </div>
    </GeneticMarketingLayout>
  );
};

export default LandingGeneticMarketingLayout;

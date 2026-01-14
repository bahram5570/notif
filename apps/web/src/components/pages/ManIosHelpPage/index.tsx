'use client';

import s1 from '@assets/images/manioshelp/s1.webp';
import s2 from '@assets/images/manioshelp/s2.webp';
import s3 from '@assets/images/manioshelp/s3.webp';
import s4 from '@assets/images/manioshelp/s4.webp';
import s5 from '@assets/images/manioshelp/s5.webp';

import { Divider } from '@mui/material';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const ManIosHelpPage = () => {
  return (
    <div className="w-full max-w-[500px] relative py-6 px-4 bg-gradient-to-b from-blue-100 to-white h-dvh dark:bg-none">
      <div className="grid">
        <CustomTypography className="!text-impo_Blue_500 text-center" fontSize="Headline_Medium">
          اگر ایمپو آقایان روی باز نمیشه
        </CustomTypography>
        <CustomTypography className="!text-impo_Blue_500 text-center" fontSize="Headline_Medium">
          با سیستم عامل IOS
        </CustomTypography>
        <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-2" fontSize="Lable_Large">
          مراحل زیر رو برای باز شدن اپلیکیشن دنبال کنید
        </CustomTypography>
      </div>
      <div className="grid mt-4">
        <div className="grid justify-center justify-items-center gap-y-2">
          <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-2" fontSize="Body_Medium">
            1- اگه موقع باز کردن ایمپو آقایان از این صفحه نتونستی جلوتر بری
          </CustomTypography>
          <CustomImage alt="help" src={s1} />
        </div>
        <Divider className="!my-4 !border-impo_Neutral_OnBackground opacity-10" />
        <div className="grid justify-center justify-items-center gap-y-2">
          <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-2" fontSize="Body_Medium">
            2- از قسمت تنظیمات (impo men) رو سرچ کن
          </CustomTypography>
          <CustomImage alt="help" src={s2} />
        </div>
        <Divider className="!my-4 !border-impo_Neutral_OnBackground opacity-10" />
        <div className="grid justify-center justify-items-center gap-y-2">
          <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-2" fontSize="Body_Medium">
            3- از اینجا Notifications رو انتخاب کن
          </CustomTypography>
          <CustomImage alt="help" src={s3} />
        </div>
        <Divider className="!my-4 !border-impo_Neutral_OnBackground opacity-10" />
        <div className="grid justify-center justify-items-center  gap-y-2">
          <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-2" fontSize="Body_Medium">
            4- و دسترسی Notifications رو خاموش کن
          </CustomTypography>
          <CustomImage alt="help" src={s4} />
        </div>
        <Divider className="!my-4 !border-impo_Neutral_OnBackground opacity-10" />
        <div className="grid justify-center justify-items-center gap-y-2 mb-8">
          <CustomTypography className="!text-impo_Neutral_OnBackground text-center mt-2" fontSize="Body_Medium">
            5- بعد از اون اپلیکیشن ایمپو آقایان به این صورت باز میشه
          </CustomTypography>
          <CustomImage alt="help" src={s5} />
        </div>
      </div>
    </div>
  );
};

export default ManIosHelpPage;

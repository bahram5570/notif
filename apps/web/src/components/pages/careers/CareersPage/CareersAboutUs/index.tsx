import { CAREER_CONTAINER_MAX_WIDTH } from '@components/pages/careers/constants';
import CustomTypography from '@components/ui/CustomTypography';

const CareersAboutUs = () => {
  return (
    <div
      style={{ maxWidth: CAREER_CONTAINER_MAX_WIDTH }}
      className="w-full flex flex-col items-center mx-auto px-4 pt-4 md:pt-10"
    >
      <CustomTypography tagType="h1" fontSize="Headline_Medium" className="!text-impo_Neutral_OnBackground">
        درباره ما
      </CustomTypography>

      <CustomTypography
        fontSize="Body_Large"
        className="pt-1 md:pt-2 pb-6 md:pb-12 text-center whitespace-pre-line !text-impo_Neutral_OnBackground"
      >
        {
          'دوست داری نتیجه کارِت کم کردن درد افراد باشه؟ \n تمایل داری به آدما کمک کنی تا خودشون رو بیشتر دوست داشته باشن؟ \n می‌خوای تو افزایش آگاهی خانم‌ها از جسم و روحشون نقش داشته باشی؟ \n عاشق این هستی که به بهبود زندگی و رابطه عاطفی افراد کمک کنی؟ \n دوست داری خروجی کارت، کمک به تولد یک نوزاد سالم در یک شهر کوچیک باشه؟ \n اینجا تو ایمپو، هر نقشی که داشته باشی، نتیجه‌اش به افزایش آگاهی، کمک به سلامت جسمی و روحی زنان و مردان و در نتیجه خودمراقبتی منجر میشه؛ دوست داری عضوی از این تیم باشی؟ \n نقشت رو از اینجا انتخاب کن.'
        }
      </CustomTypography>

      <div className="w-full h-[1px] !bg-impo_Neutral_Surface" />
    </div>
  );
};

export default CareersAboutUs;

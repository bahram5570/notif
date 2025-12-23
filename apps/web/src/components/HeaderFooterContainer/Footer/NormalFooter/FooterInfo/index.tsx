import ImpoIcon from '@assets/icons/impo.svg';
import ImpoNameIcon from '@assets/icons/impoName.svg';

import CustomTypography from '@components/ui/CustomTypography';

const FooterInfo = () => {
  return (
    <div className="md:col-span-8 md:row-span-1">
      <div className="flex items-center gap-4 pb-4">
        <ImpoIcon className="w-[60px] hidden md:block" />
        <ImpoNameIcon className="w-[86px] fill-impo_Pink_500" />
      </div>

      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
        ایمپو بزرگترین پلتفرم حوزه سلامت و خودمراقبتی، در سال 1398 توسط تیمی از متخصصین حوزه های پزشکی، روانشناسی، سکس
        تراپی و مهندسین حوزه فناوری اطلاعات با هدف ارتقاء سلامت جسمانی و روانی زنان در دوران قاعدگی و بارداری ایجاد و در
        اختیار ایمپویی ها قرار گرفت. در ادامه برای اولین بار در ایران، نسخه ویژه آقایان نیز با هدف ارتقاء سلامت و بهبود
        رابطه جنسی و عاطفی منتشر و مورد استقبال خیلی خوب کاربران قرار گرفت. پلتفرم ایمپو تا امروز، با درک نیازهای
        کاربران، نسخه های جدیدتر و کامل تری در بازه های زمانی مختلف منتشرکرده و در ادامه نیز، توسعه و بهبود پرقدرت ادامه
        خواهد یافت.
      </CustomTypography>
    </div>
  );
};

export default FooterInfo;

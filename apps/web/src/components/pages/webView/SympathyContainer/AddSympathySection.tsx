'use client';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useOperatingSystem from '@hooks/useOperatingSystem';

const AddSympathySection = () => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem, isWeb: true });
  const typographyFontStyles1 = typographyFontStylesMaker({ fontSize: 'Lable_Medium', operatingSystem, isWeb: true });
  return (
    <div className="flex flex-col  gap-3">
      <CustomTypography fontSize="Title_Small" className="!text-impo_Black">
        فقط با دو تا قدم کوچیک، همدلی رو شروع کن 🥰
      </CustomTypography>
      <div className="rounded-xl py-6 px-3 flex flex-col gap-4 justify-center items-center bg-impo_Purple_100">
        <div className="flex justify-center items-center gap-[30px]">
          <div>
            <CustomTypography fontSize="Lable_Large" className="!text-impo_Black">
              {`${toPersianNumbers(1)}. دعوت از پارتنرت`}
            </CustomTypography>
            <CustomTypography fontSize="Body_Small" className="!text-impo_Black">
              از طریق دکمه پایین صفحه، وارد صفحه شروع همدلی میشی و شماره پارتنرت رو وارد میکنی تا پیامک دعوت به همدلی
              براش ارسال بشه
            </CustomTypography>
          </div>
          <CustomImage
            src="/assets/images/webView/sympathy/2.webp"
            alt="sympathy2"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center gap-[30px]">
          <div>
            <CustomTypography fontSize="Lable_Large" className="!text-impo_Black">
              {`${toPersianNumbers(2)}. وصل شدن به پارتنرت`}
            </CustomTypography>
            <p style={{ ...typographyFontStyles }} className="!text-impo_Black">
              پارتنرت باید اپلیکیشن
              <span style={{ ...typographyFontStyles1 }} className="!text-impo_Black inline">
                "ایمپو آقایان"
              </span>
              رو نصب و درخواست همدلیت رو از تب همدلی قبول کنه، تا به همدیگه وصل بشید و همدلی شروع شه
            </p>
          </div>
          <CustomImage
            src="/assets/images/webView/sympathy/3.webp"
            alt="sympathy3"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AddSympathySection;

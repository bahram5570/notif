import { toPersianNumbers } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const AddSympathySection = () => {
  return (
    <div className="flex flex-col  gap-3">
      <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
        فقط با دو تا قدم کوچیک، همدلی رو شروع کن 🥰
      </CustomTypography>
      <div className="rounded-xl py-6 px-3 flex flex-col gap-4 justify-center items-center bg-impo_Purple_100">
        <div className="flex justify-center items-center gap-[30px]">
          <div>
            <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground">
              {`${toPersianNumbers(1)}. دعوت از پارتنرت`}
            </CustomTypography>
            <CustomTypography fontSize="Body_Small" color="Neutral_OnBackground">
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
            <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground">
              {`${toPersianNumbers(2)}. وصل شدن به پارتنرت`}
            </CustomTypography>
            <CustomTypography fontSize="Body_Small" color="Neutral_OnBackground">
              پارتنرت باید اپلیکیشن
              <CustomTypography fontSize="Lable_Medium" color="Neutral_OnBackground" className=" inline" tagType="span">
                "ایمپو آقایان"
              </CustomTypography>
              رو نصب و درخواست همدلیت رو از تب همدلی قبول کنه، تا به همدیگه وصل بشید و همدلی شروع شه
            </CustomTypography>
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

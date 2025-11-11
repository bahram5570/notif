import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

const AddSympathySection = () => {
  return (
    <div className="flex flex-col  gap-3">
      <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
        با دو قدم ساده به پارتنرت وصل شو 🥰
      </CustomTypography>
      <div
        className="rounded-xl py-6 px-3 flex flex-col gap-4 justify-center items-center"
        style={{ backgroundColor: COLORS_LIST.Purple_100 }}
      >
        <div className="flex justify-center items-center gap-[33px]">
          <div>
            <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground">
              دعوت از پارتنرت
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium" color="Neutral_OnBackground">
              از طریق دکمه پایین صفحه وارد صفحه جوین همدلی شو و شماره پارتنرت رو وارد کن تا پیامک براش ارسال بشه
            </CustomTypography>
          </div>
          <CustomImage
            src="/assets/images/webView/sympathy/2.webp"
            alt="sympathy2"
            width={88}
            height={88}
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center gap-[33px]">
          <div>
            <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground">
              وصل شدن به پارتنرت
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium" color="Neutral_OnBackground">
              پارتنرت
              <CustomTypography fontSize="Lable_Medium" color="Neutral_OnBackground" className=" inline" tagType="span">
                “ایمپو اقایان”
              </CustomTypography>
              رو نصب میکنه و از تب همدلی، باید درخواستت رو قبول کنه تا به هم وصل بشین
            </CustomTypography>
          </div>
          <CustomImage
            src="/assets/images/webView/sympathy/3.webp"
            alt="sympathy3"
            width={88}
            height={88}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AddSympathySection;

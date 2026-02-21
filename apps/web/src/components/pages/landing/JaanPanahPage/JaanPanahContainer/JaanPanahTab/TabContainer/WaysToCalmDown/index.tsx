import StarIcon from '@assets/icons/Stars.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import { useSystem } from '@repo/core/hooks/useSystem';

import useCopy from '../Distract/__hooks__/useCopy';

const WaysToCalmDown = () => {
  const { copylink } = useCopy();
  const { breakPoint, operatingSystem } = useSystem();

  const typographyDetails = typographyFontStylesMaker({
    operatingSystem,
    isLargeScreen: !breakPoint.laptop,
    fontSize: 'Lable_LargeProminet',
  });

  return (
    <div className="p-4 flex flex-col gap-2">
      <CustomTypography fontSize="Lable_Large" className="p-4 !text-impo_Neutral_OnBackground text-center">
        آرامش؛ سخته ولی لازم
      </CustomTypography>

      <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
        <div className="flex justify-start items-center gap-2">
          <StarIcon />
          {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
        </div>

        <CustomTypography fontSize="Body_Medium" className="text-justify ">
          آروم‌ بودن، این روزها نه نشونه‌ی بی‌خیالیه و نه بی‌خبری. شاید تنها راهیه که بشه تو دل شلوغی‌ها خودتو سرپا نگه
          داری. ما باور داریم وسط این شلوغی و آشفتگی، حتی چند لحظه آرامش می‌تونه از تو و ذهنت محافظت کنه؛ درست مثل یک
          سنگر.
        </CustomTypography>
      </div>

      <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#ECFBE3] to-[#F7F7F7]">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            چند لحظه آرامش؛ مدیتیشن
          </CustomTypography>

          <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
            مدیتیشن چطور می‌تونه به ما کمک کنه؟
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
            مدیتیشن کمک می‌کنه مغز از حالت هشدار مداوم خارج بشه. وقتی اضطراب تو بدن می‌چرخه، مدیتیشن باعث:
          </CustomTypography>
        </div>

        <CustomImage
          height={0}
          width={520}
          sizes="520px"
          alt="waysToCalmDown1"
          src="/assets/images/jaanPanah/JaanPanahTab/waysToCalmDown/1.webp"
          className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
          hasPreviewImage
        />

        <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
        <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
          چه مدل‌هایی از مدیتیشن برای این روزها مناسب‌تره؟
        </CustomTypography>

        <CustomImage
          height={0}
          width={520}
          sizes="520px"
          alt="waysToCalmDown2"
          src="/assets/images/jaanPanah/JaanPanahTab/waysToCalmDown/2.webp"
          className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
          hasPreviewImage
        />

        <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
            از کجا می‌تونی مدیتیشن مناسب پیدا کنی؟
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
            <CustomLink target="_blank" href="https://aramia.me/" className="md:mb-5 !text-impo_Success_Success">
              آرامیا
            </CustomLink>
            برای کمک به حفظ آرامش در این شرایط، دوره‌های مدیتیشن خودشون رو با کد تخفیف ۱۰۰٪ در دسترس عموم قرار دادن.
          </CustomTypography>

          <div className="flex  gap-1 justify-start items-center">
            <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
              کد تخفیف 100 درصدی:
            </CustomTypography>
            <u
              style={{ ...typographyDetails }}
              className=" cursor-pointer text-impo_Primary_Primary"
              onClick={copylink}
            >
              Janpanah
            </u>
          </div>
        </div>
      </div>

      <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#E3FBF4] to-[#F7F7F7]">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            نُت‌هایی از جنس آرامش؛ موسیقی
          </CustomTypography>

          <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
            موسیقی آرامش‌بخش چطور می‌تونه کمک‌کننده باشه؟
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
            وقتی استرس و تنش تو بدن جمع می‌شه، موسیقی می‌تونه مثل یک نسیم آروم، ذهن رو به‌جای امن‌تری ببره. گوش‌دادن به
            موسیقی بی‌کلام یا صداهای طبیعت می‌تونه باعث:
          </CustomTypography>
        </div>

        <CustomImage
          height={0}
          width={520}
          sizes="520px"
          alt="waysToCalmDown3"
          src="/assets/images/jaanPanah/JaanPanahTab/waysToCalmDown/3.webp"
          className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
          hasPreviewImage
        />

        <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
        <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
          چه مدل‌هایی از مدیتیشن برای این روزها مناسب‌تره؟
        </CustomTypography>

        <CustomImage
          height={0}
          width={520}
          sizes="520px"
          alt="waysToCalmDown4"
          src="/assets/images/jaanPanah/JaanPanahTab/waysToCalmDown/4.webp"
          className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
          hasPreviewImage
        />

        <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
            از کجا موسیقی مناسب پیدا کنی؟
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
            پلتفرم‌های صوتی مثل …. و کانال‌های پادکست، پلی‌لیست‌های آرامش‌بخش ویژه‌ای دارن که کمک می‌کنن توی فضای پرتنش،
            چند دقیقه آروم‌تر باشی. با پیگیری و همراهی ایمپو، بخشی از این پلی‌لیست‌ها برای استفاده رایگان و عمومی در
            دسترس قرار گرفته
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default WaysToCalmDown;

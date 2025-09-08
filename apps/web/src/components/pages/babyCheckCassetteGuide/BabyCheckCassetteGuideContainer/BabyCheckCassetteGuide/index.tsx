import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

const BabyCheckCassetteGuide = () => {
  return (
    <div style={{ background: COLORS_LIST.Surface_SurfaceVariant }} className="min-w-full px-4 py-5">
      <div className="rounded-xl mb-3 px-4 py-5" style={{ background: COLORS_LIST.White }}>
        <CustomTypography fontSize="Body_Medium" className="mb-3">
          برای انجام تست، باید موارد زیر رو در نظر داشته باشید:
        </CustomTypography>
        <div className="my-[18px] pr-[10px]">
          <CustomTypography fontSize="Lable_Large" className="mb-2">
            ۱. زمان مناسب کیت:
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium">
            تست رو در زمان مناسب یعنی یک هفته بعد از تاخیر در قاعدگی انجام بده. ما در کارت چرخه ایمپو، بهترین زمان انجام
            تست رو بهت اعلام می‌کنیم
          </CustomTypography>
        </div>
        <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
        <div className="my-[18px] pr-[10px]">
          <CustomTypography fontSize="Lable_Large" className="mb-2">
            ۲. نکات ضروری قبل از استفاده:
          </CustomTypography>
          <ol className="list-disc pr-4">
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">تست رو در محیط و با دمای طبیعی نگهداری کنید.</CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">قبل از انجام به تاریخ انقضای کیت توجه کنید.</CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                اگر بسته‌بندی کیت، آسیب‌دیده یا پاره بود، ازش استفاده نکنید.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                نوار تست نسبت به رطوبت بسیار حساسه، پس از خارج کردن از بسته، بلافاصله استفاده کنید
              </CustomTypography>
            </li>
          </ol>
          <CustomImage
            src="/assets/images/babyCheckGuide/cassetteImg.webp"
            alt="babyCheckGuideImg1"
            width={1496}
            height={416}
            className="-mt-5"
          />
        </div>
        <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
        <div className="my-[18px] pr-[10px]">
          <CustomTypography fontSize="Lable_Large" className="mb-2">
            ۳. جمع‌آوری نمونه ادرار:
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" className="mb-2">
            برای انجام تست بهتره از نمونه ادرار در بازه زمانی 10 صبح تا 8 شب، استفاده کنید. استفاده از ادرار اول صبح
            اصلا توصیه نمیشه. بهتره در هر دوره در زمان معینی از روز تست رو انجام دهید (مثلا هر روز بین ساعت 10 تا 12
            صبح)
          </CustomTypography>
          <ol className="list-disc pr-[10px]">
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                ادرار رو در ظرفی تمیز و به ارتفاع 1 تا 1.5 سانتی‌متر بریزید.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                کاست رو از بسته خارج کرده و روی سطح صاف قرار بدین.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                با استفاده از قطره‌چکان موجود در بسته‌بندی، 2 تا 3 قطره ادرار برداشته و در حرفه بیضی شکل کاست که با حرف
                S مشخص شده، بریزید.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                به مدت 3 تا 10 دقیقه صبر کنید، تا جواب تست در پنجره مستطیل شکل مشخص بشه
              </CustomTypography>
            </li>
          </ol>
        </div>
        <CustomImage
          src={'/assets/images/babyCheckGuide/bannerCassette.webp'}
          alt="babyCheckBanner"
          className="object-contain"
          hasPreviewImage
          width={1496}
          height={416}
        />
      </div>
    </div>
  );
};

export default BabyCheckCassetteGuide;

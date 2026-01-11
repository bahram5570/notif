import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import ContentCardContainer from '@components/ui/WebView/ContentCardContainer';

const SympathySupport = () => {
  return (
    <div className="flex flex-col  gap-4">
      <CustomTypography fontSize="Title_Small" className="!text-impo_Black">
        هر روز حس حمایت و توجه رو تجربه کن 🤗
      </CustomTypography>

      <ContentCardContainer bgUrl="/assets/images/webView/sympathy/bg-2.webp">
        <CustomTypography fontSize="Body_Medium" className="px-3 pt-4 !text-impo_Black">
          ایمپو بهت کمک می‌کنه تا پارتنرت از حالت با خبر باشه و رابطه‌تون هر روز قشنگ‌تر بشه
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/sympathy/6.webp"
          alt={'sympathy6'}
          width={984}
          height={1143}
          className="w-full h-auto px-4"
        />
      </ContentCardContainer>
      <ContentCardContainer bgUrl="/assets/images/webView/sympathy/bg-3.webp">
        <CustomTypography fontSize="Body_Medium" className="px-3 pt-4 !text-impo_Black ">
          ایمپو روزهای پریود , PMS و تخمک‌گذاریت رو به پارتنرت خبر میده تا هم هوات رو بیشتر داشته باشه هم برای باهم بودن
          برنامه‌ریزی کنید.
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/sympathy/7.webp"
          alt={'sympathy7'}
          width={984}
          height={1143}
          className="w-full h-auto px-4 pb-3"
        />
      </ContentCardContainer>

      <ContentCardContainer bgUrl="/assets/images/webView/sympathy/bg-1.webp">
        <CustomTypography fontSize="Body_Medium" className="px-3 pt-4 !text-impo_Black">
          کلی برنامه مشترک برای اینکه رابطه‌تو بهتر بشه و هیچ مشکلی پیش نیاد
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/sympathy/8.webp"
          alt={'sympathy8'}
          width={984}
          height={1143}
          className="w-full h-auto p-4"
        />
      </ContentCardContainer>
    </div>
  );
};

export default SympathySupport;

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const HeadingContent = () => {
  return (
    <div>
      <CustomTypography
        tagType="h1"
        fontSize="Title_Medium"
        className="text-right mb-4 !text-impo_Neutral_OnBackground"
      >
        ابزار آنلاین محاسبه زمان تخمک‌گذاری بعد از پریود
      </CustomTypography>

      <CustomTypography tagType="p" fontSize="Body_Medium" className="text-right mb-4 !text-impo_Neutral_OnBackground">
        با استفاده از ابزار آنلاین محاسبه زمان تخمک‌گذاری، زمان‌های طلایی بارداری را بهتر بشناسید. در این بازه‌های حساس
        می‌توانید برای بارداری اقدام یا از آن پیشگیری کنید و چرخۀ خود را بهتر پیش‌بینی کنید.
      </CustomTypography>
    </div>
  );
};

export default HeadingContent;

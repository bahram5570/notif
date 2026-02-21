import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const WarningSection = () => {
  return (
    <div className="rounded-xl bg-impo_Pink_50 border border-impo_Pink_500 p-4 flex flex-col gap-2 mt-4">
      <CustomTypography fontSize="Lable_Medium">
        با توجه به تیپ مخصوص خودت بهتره چه تمرین‌هایی رو انجام بدی؟
      </CustomTypography>
      <ul className="list-disc px-4 mr-2">
        <li>
          <CustomTypography fontSize="Body_Small">
            هدف از این تفسیر، مقایسه نیست، بلکه شناخت بدن خودته و هیچ تیپی «بهتر» از دیگری نیست.
          </CustomTypography>
        </li>
        <li>
          <CustomTypography fontSize="Body_Small">
            تمرینات هر تیپ را به‌صورت روزانه یا حداقل سه بار در هفته انجام بده.
          </CustomTypography>
        </li>
        <li>
          <CustomTypography fontSize="Body_Small">
            بعد از ۳ تا ۴ هفته با تکرار تمرین‌ها، آگاهی بدنی و شناخت نقاط طلایی تغییر می‌کنه.
          </CustomTypography>
        </li>
      </ul>
    </div>
  );
};

export default WarningSection;

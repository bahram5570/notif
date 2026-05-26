import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const ClinicBanner = () => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const clickHandler = () => {
    pageNavigationHandler({
      id: 'newPartnerMessage',

      linkTo: '/protected/clinic',
    });
  };
  return (
    <div className="bg-impo_Blue_100 dark:bg-impo_Blue_800 flex  pt-4 rounded-xl ">
      <CustomImage src="/assets/images/clinic.webp" className="mx-2" />

      <div className="flex flex-col items-end gap-1 pr-2">
        <div className="flex flex-col items-end gap-1">
          <CustomTypography fontSize="Lable_LargeProminet" className="whitespace-nowrap">
            همین الان سوالت رو بپرس!
          </CustomTypography>

          <CustomTypography fontSize="Body_Small">
            سوالاتت رو از متخصصین ایمپو بپرس تا در سریع ترین زمان , بهت پاسخ بدن
          </CustomTypography>
        </div>

        <CustomButton
          fontSize="Lable_Large"
          className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan !w-fit "
          onClick={clickHandler}
        >
          کلینیک ایمپو
        </CustomButton>
      </div>
    </div>
  );
};

export default ClinicBanner;

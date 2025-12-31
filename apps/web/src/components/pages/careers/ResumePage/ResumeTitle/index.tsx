import CustomTypography from '@components/ui/CustomTypography';

const ResumeTitle = () => {
  return (
    <div className="w-full flex flex-col gap-1 pb-4 md:pb-6">
      <CustomTypography fontSize="Title_Medium" className="!text-impo_Neutral_OnBackground">
        اطلاعات شخصی
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
        بعد از پر کردن اطلاعات،فایل رزومه را آپلود کنید
      </CustomTypography>
    </div>
  );
};

export default ResumeTitle;

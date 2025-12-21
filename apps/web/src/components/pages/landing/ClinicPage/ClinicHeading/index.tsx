import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const ClinicHeading = () => {
  return (
    <div className="mx-[16px] mt-4 grid [grid-template-columns:1fr_40%] items-center justify-between !bg-impo_Pink_50 px-[16px] lg:px-0 rounded-xl lg:rounded-3xl lg:h-72">
      <div className="py-[16px] lg:pr-10 lg:mb-14">
        <h1>
          <CustomTypography fontSize="Title_Small" className="mb-2 lg:block " tagType="span">
            ویزیت دکتر آنلاین؛
          </CustomTypography>
          <CustomTypography fontSize="Title_Small" tagType="span">
            مشاوره پزشکی سریع،تخصصی و مطمئن در
          </CustomTypography>
          <CustomTypography fontSize="Title_Medium" tagType="span">
            ایمپو
          </CustomTypography>
        </h1>
      </div>
      <CustomImage
        alt=""
        height={0}
        width={10000}
        src="/assets/images/clinicLanding/heading.webp"
        className="mt-[-50px] lg:mt-[-20px] w-full h-auto lg:pl-6 lg:scale-75"
      />
    </div>
  );
};

export default ClinicHeading;

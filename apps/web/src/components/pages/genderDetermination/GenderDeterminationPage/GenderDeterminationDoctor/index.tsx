import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

const GenderDeterminationDoctor = () => {
  return (
    <>
      <div
        className="
                    absolute 
                    -top-[60px] 
                    left-0
                    right-0
                    mx-auto
                    md:-top-[40px] 
                    md:right-0 
                    md:left-auto
                    w-[120px] 
                    h-[120px] 
                    md:w-[180px] 
                    md:h-[180px] 
                    p-1 
                    rounded-full 
                    bg-gradient-to-br 
                    from-[#FF8BBD] 
                    to-[#87CCFF] 
                "
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-impo_White">
          <CustomImage
            alt=""
            fill={true}
            className="object-cover p-2 rounded-full"
            src="/assets/images/genderDeterminationDoctor.webp"
          />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start pt-[80px] md:pt-[40px] md:pb-[60px] md:pr-[180px]">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 pb-3">
          <CustomTypography fontSize="Title_Medium" tagType="h3" className="!text-impo_Neutral_OnBackground">
            مهدیه فتح‌الهی
          </CustomTypography>

          <CustomTypography fontSize="Body_Large" tagType="h4" className="!text-impo_Neutral_OnBackground">
            کارشناس مامایی
          </CustomTypography>
        </div>

        <CustomTypography className="!text-impo_Neutral_OnBackground">
          دارای مدرک دوره تعیین جنسیت موسس عصر جدید مامایی
        </CustomTypography>
        <div className="w-full h-[1px] my-6 md:hidden bg-impo_Pink_200" />
      </div>
    </>
  );
};

export default GenderDeterminationDoctor;

import CustomTypography from '@components/ui/CustomTypography';

import { SelectNameAuthorProfileProps } from './type';

const SelectNameAuthorProfile = (props: SelectNameAuthorProfileProps) => {
  return (
    <>
      <div className="w-full lg:w-6/12 flex flex-col md:flex-row md:items-center justify-between mt-6 pr-4">
        <div className="w-fit flex items-center justify-between pr-[70px] md:pr-0">
          <div className="flex items-center gap-2 md:gap-4">
            <CustomTypography fontSize="Lable_Medium" className="!text-impo_Surface_Outline">
              {props.readingTime}
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" className="!text-impo_Surface_Outline">
              .
            </CustomTypography>

            <CustomTypography fontSize="Lable_Medium" className="!text-impo_Surface_Outline">
              {props.publishDate}
            </CustomTypography>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-6/12 h-[1px] my-3 bg-impo_Surface_OutlineVariant" />
    </>
  );
};

export default SelectNameAuthorProfile;

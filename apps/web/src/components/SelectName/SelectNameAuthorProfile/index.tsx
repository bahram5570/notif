import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { SelectNameAuthorProfileProps } from './type';

const SelectNameAuthorProfile = (props: SelectNameAuthorProfileProps) => {
  return (
    <>
      <div className="w-full lg:w-6/12 flex flex-col md:flex-row md:items-center justify-between mt-6 pr-4">
        <div className="flex gap-3">
          <div className="relative lg:top-0 top-[17px] lg:w-16 lg:h-16 !w-14 !h-14">
            <CustomImage
              fill={true}
              sizes="64px"
              alt={props.name}
              src={props.imageUrl}
              className="rounded-full object-cover lg:w-16 lg:h-16 !w-14 !h-14"
            />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <CustomTypography fontSize="Lable_Large">{`نویسنده:${props.name}`}</CustomTypography>
          </div>
        </div>

        <div className="w-fit flex items-center justify-between pr-[70px] md:pr-0">
          <div className="flex items-center gap-2 md:gap-4">
            <CustomTypography fontSize="Lable_Medium" color={'Surface_Outline'}>
              {props.readingTime}
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" color={'Surface_Outline'}>
              .
            </CustomTypography>

            <CustomTypography fontSize="Lable_Medium" color={'Surface_Outline'}>
              {props.publishDate}
            </CustomTypography>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] my-3" style={{ backgroundColor: '#D0D0D020' }} />
    </>
  );
};

export default SelectNameAuthorProfile;

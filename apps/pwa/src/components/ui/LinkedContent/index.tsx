import CalendarArrow from '@assets/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { LinkedContentPropsType } from './type';

const LinkedContent = ({ onClickHandler, className, discription, title }: LinkedContentPropsType) => {
  return (
    <div className={`  p-4  ${className} bg-impo_Neutral_Background`}>
      <div className="flex flex-col items-end gap-2 " onClick={onClickHandler}>
        {title && (
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Lable_MediumProminet">
            {title}
          </CustomTypography>
        )}

        <div className=" flex flex-row justify-between items-center  w-full">
          <CalendarArrow className="w-4 h-4 stroke-impo_Surface_Outline" />
          <CustomTypography className="text-impo_Surface_Outline" fontSize="Body_Small">
            {discription}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default LinkedContent;

import CalendarArrow from '@assets/icons/calendarArrow.svg';

import Dark_Typography from '../Dark_Typography';
import { LinkedContentPropsType } from './type';

const LinkedContent = ({ onClickHandler, className, discription, title }: LinkedContentPropsType) => {
  return (
    <div className={`  p-4  ${className} bg-impo_Neutral_Background`}>
      <div className="flex flex-col items-end gap-2 " onClick={onClickHandler}>
        {title && (
          <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Lable_MediumProminet">
            {title}
          </Dark_Typography>
        )}

        <div className=" flex flex-row justify-between items-center  w-full">
          <CalendarArrow className="w-4 h-4 stroke-impo_Surface_Outline" />
          <Dark_Typography className="text-impo_Surface_Outline" fontSize="Body_Small">
            {discription}
          </Dark_Typography>
        </div>
      </div>
    </div>
  );
};

export default LinkedContent;

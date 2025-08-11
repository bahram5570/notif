import CalendarArrow from '@assets/icons/calendarArrow.svg';

import useTheme from '@hooks/useTheme';

import Typography from '../Typography';
import { LinkedContentPropsType } from './type';

const LinkedContent = ({ onClickHandler, className, discription, title }: LinkedContentPropsType) => {
  const { colors } = useTheme();
  return (
    <div className={`  p-4  ${className}`} style={{ backgroundColor: colors.White }}>
      <div className="flex flex-col items-end gap-2" onClick={onClickHandler}>
        {title && (
          <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
            {title}
          </Typography>
        )}

        <div className=" flex flex-row justify-between items-center p-2 w-full">
          <CalendarArrow style={{ stroke: colors.Surface_Outline }} className="w-4 h-4" />
          <Typography scale="Body" size="Small" color="Surface_Outline">
            {discription}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LinkedContent;

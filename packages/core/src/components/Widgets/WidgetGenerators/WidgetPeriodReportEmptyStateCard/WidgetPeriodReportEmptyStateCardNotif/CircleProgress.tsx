import { CustomTypography } from '../../../../ui/CustomTypography';
import { CircleProgressProps } from './types';

const CircleProgress = ({ days, percent }: CircleProgressProps) => {
  const zeroPercent = 471;
  const hundredPercent = 71;
  const totalPercent = zeroPercent - hundredPercent;

  const filledPercent = percent > 0 ? percent : 0.01;
  const resultPercent = -(totalPercent * filledPercent - zeroPercent);

  return (
    <div className="relative w-[48px] h-[48px] min-w-[48px] min-h-[48px] overflow-hidden flex items-center justify-center rounded-full bg-impo_White">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <CustomTypography fontSize="Lable_Small" className="text-impo_Black">
          {`${days} روز`}
        </CustomTypography>
      </div>

      <svg
        viewBox="-21.25 -21.25 212.5 212.5"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-45 min-w-[60px] min-h-[60px]"
      >
        <circle
          r="75"
          cx="85"
          cy="85"
          strokeWidth="12"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="471px"
          strokeDashoffset={resultPercent}
          className=" !stroke-impo_Primary_Primary"
        />
      </svg>
    </div>
  );
};

export default CircleProgress;

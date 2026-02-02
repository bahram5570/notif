import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { PredictFooterProps } from './types';

const PredictFooter = ({ btn, script, isPregnancy, openDatesHandler }: PredictFooterProps) => {
  return (
    <div
      className={`
                  w-[calc(100%-32px)] 
                  mx-auto 
                  pt-4 
                  rounded-b-2xl 
                  overflow-hidden 
                  bg-impo_Neutral_Background 
                  ${isPregnancy ? '-translate-y-2' : '-translate-y-4'}
                `}
    >
      <div className="w-full flex justify-between items-center gap-3 p-3 bg-impo_Primary_Primary">
        <CustomButton
          fontSize="Lable_Medium"
          onClick={openDatesHandler}
          navigationLoadingId="PredictFooter"
          className="!bg-impo_Primary_OnPrimary !text-impo_Black !w-fit !min-w-fit px-2 py-3"
        >
          {btn}
        </CustomButton>

        <CustomTypography fontSize="Lable_Medium" className="text-impo_Primary_OnPrimary">
          {script}
        </CustomTypography>
      </div>
    </div>
  );
};

export default PredictFooter;

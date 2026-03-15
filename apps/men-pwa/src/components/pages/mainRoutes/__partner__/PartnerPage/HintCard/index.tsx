import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HintCardPropsType } from './type';

const HintCard = ({ hintTitle, hints }: HintCardPropsType) => {
  return (
    <div className="w-full h-fit rounded-2xl bg-impo_Neutral_Background">
      <div className="flex w-full justify-end items-center border-b-[1px] pb-3 mb-3 border-impo_Neutral_Surface">
        <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
          {hintTitle}
        </CustomTypography>
      </div>

      <div className="w-full flex flex-col items-end gap-3 px-4 bg-impo_Neutral_Surface rounded-xl">
        {hints.map((item, index) => {
          const isLastChild = index === hints.length - 1;
          return (
            <div
              className={`w-full flex flex-col p-2 items-end gap-1 border-impo_Grey_200 ${isLastChild ? '' : 'border-b-[1px] pb-3'}`}
              key={index}
            >
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                {item.text}
              </CustomTypography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HintCard;

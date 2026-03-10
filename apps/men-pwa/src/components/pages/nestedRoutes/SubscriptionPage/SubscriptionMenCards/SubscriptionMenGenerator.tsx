import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { addCommas } from '@repo/core/utils/numbers';

import { SubscriptionMenGeneratorTypes } from './types';

const SubscriptionMenGenerator = (props: SubscriptionMenGeneratorTypes) => {
  const realValue = props.realValue === props.value ? null : addCommas(props.realValue);
  const value = props.isFree ? 'رایگان' : `${addCommas(props.value)} ${props.unit}`;

  return (
    <div
      onClick={props.onSelect}
      className={`
                    relative
                    w-full 
                    h-[90px] 
                    flex 
                    flex-row-reverse
                    items-center
                    gap-3
                    border-[1px] 
                    rounded-xl 
                    px-2 
                    ${
                      props.isSelected
                        ? 'bg-impo_Blue_50 dark:bg-impo_Blue_700 border-impo_PrimaryMan_PrimaryMan'
                        : 'bg-impo_Neutral_Background border-impo_Surface_OutlineVariant'
                    }
                `}
    >
      {props.specificText && (
        <div className="absolute -top-[1px] -left-[1px] bg-impo_PrimaryMan_PrimaryMan rounded-br-lg rounded-tl-lg">
          <CustomTypography fontSize="Lable_Small" className="text-impo_White px-3 py-1">
            {props.specificText}
          </CustomTypography>
        </div>
      )}

      <div
        className={`
                    w-5
                    h-5 
                    border-[2px] 
                    rounded-full 
                    p-[2px]
                    flex 
                    items-center 
                    justify-center 
                    ${props.isSelected ? 'border-impo_PrimaryMan_PrimaryMan' : 'border-impo_Surface_OutlineVariant'}
                  `}
      >
        {props.isSelected && <div className="w-full h-full rounded-full bg-impo_PrimaryMan_PrimaryMan" />}
      </div>

      <div className="flex flex-col items-end gap-1">
        <CustomTypography
          fontSize="Body_Medium"
          className={`text-impo_Neutral_OnBackground ${props.isSelected && 'dark:text-impo_Black'}`}
        >
          {props.text}
        </CustomTypography>

        <div className="flex flex-row-reverse items-center gap-2">
          {realValue && (
            <CustomTypography
              fontSize="Body_Small"
              className="text-impo_Surface_OutlineVariant line-through decoration-impo_Red_500"
            >
              {`${realValue} ${props.unit}`}
            </CustomTypography>
          )}

          <CustomTypography
            fontSize="Body_Small"
            className={`text-impo_Neutral_OnBackground ${props.isSelected && 'dark:text-impo_Black'}`}
          >
            {value}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionMenGenerator;

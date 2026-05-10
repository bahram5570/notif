import { useEffect, useRef } from 'react';

import TickIcon from '@assets/shared/icons/subscriptionTick.svg';
import subscriptionbg from '@assets/shared/lottie/subscription_background.json';

import { LottieRefCurrentProps } from 'lottie-react';

import { LottieJson } from '../../lib/LottieJson';
import { CustomTypography } from '../ui/CustomTypography';
import MarkDownText from './MarkDownText';
import { SubscriptionGeneratorTypes } from './types';

//todo change color of text in selected card  in dark mode

export const SubscriptionGenerator = (props: SubscriptionGeneratorTypes) => {
  const isSelected = typeof props.isSelected === 'undefined' ? true : props.isSelected;
  const totalPayText = props.isFree ? 'رایگان' : `${props.amount}`;
  const realValueText = props.isFree ? null : props.realValueText;
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const selectHandler = () => {
    if (props.onSelect) {
      props.onSelect();
    }
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  return (
    <div
      onClick={selectHandler}
      className={`w-full rounded-2xl border-[1px] relative ${props.specialText && 'mt-5'} ${!isSelected && 'border-impo_Surface_OutlineVariant !bg-impo_Neutral_Surface'}`}
      style={{
        background: isSelected ? 'linear-gradient(260.29deg, #E62A6F 3.07%, #7A1BFF 108.68%)' : '',
      }}
    >
      {props.isSpecial && isSelected && (
        <LottieJson animationData={subscriptionbg} lottieRef={lottieRef} loop={true} className="absolute inset-0 z-0" />
      )}

      {props.specialText && (
        <div className="flex justify-center py-2 my-2 w-fit rounded-full px-4 absolute -top-[1.75rem] right-0 mr-5 bg-impo_Calendar_Period_Background">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Black">
            {props.specialText}
          </CustomTypography>
        </div>
      )}
      {props.discountText && (
        <div className="flex justify-start w-fit px-2 py-2 rounded-ss-[14px]  rounded-ee-2xl bg-impo_Calendar_Period_Background">
          <CustomTypography fontSize="Lable_Medium" className="px-2 text-impo_Black">
            {props.discountText}
          </CustomTypography>
        </div>
      )}

      <div className={`w-full p-4 ${props.specialText && 'pt-2'} flex flex-col items-end gap-2`}>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-1">
            {!props.isFree && (
              <CustomTypography
                fontSize="Lable_Small"
                className={`${isSelected ? 'text-impo_Neutral_Background  dark:text-impo_Neutral_OnBackground' : 'text-impo_Neutral_OnBackground'}`}
              >
                {props.unit}
              </CustomTypography>
            )}

            <CustomTypography
              fontSize="Title_Small"
              className={`${isSelected ? 'text-impo_Neutral_Background dark:text-impo_Neutral_OnBackground' : 'text-impo_Neutral_OnBackground'} mr-1`}
            >
              {totalPayText}
            </CustomTypography>
            <CustomTypography
              fontSize="Lable_Medium"
              className={`${isSelected ? 'text-impo_Neutral_Background dark:text-impo_Neutral_OnBackground' : 'text-impo_Neutral_OnBackground'} opacity-90`}
            >
              {props.subTitle}
            </CustomTypography>

            {realValueText && (
              <div className="relative">
                <CustomTypography
                  fontSize="Lable_Small"
                  className={`${isSelected ? 'text-impo_Neutral_Background' : 'text-impo_Surface_Outline'} `}
                >
                  {realValueText}
                </CustomTypography>

                <div
                  className={`absolute top-1.5 left-0 right-0 w-full h-[1px] block ${isSelected ? 'bg-impo_Neutral_OnBackground' : 'bg-impo_Surface_Outline'}`}
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <CustomTypography
              fontSize={isSelected ? 'Title_Large' : 'Title_Small'}
              className={`${isSelected ? 'text-impo_Neutral_Background dark:text-impo_Neutral_OnBackground' : 'text-impo_Neutral_OnBackground'} `}
            >
              {props.title}
            </CustomTypography>

            {isSelected && <TickIcon className="w-6 h-auto stroke-impo_Primary_OnPrimary" style={{ strokeWidth: 2 }} />}

            {!isSelected && (
              <div className="w-4 h-4 min-w-4 min-h-4 my-2 rounded-full border-[1px] border-impo_Surface_OutlineVariant" />
            )}
          </div>
        </div>
        {isSelected && props.markdown && (
          <>
            <div
              className={`w-full h-[1px] block opacity-50 ${isSelected ? 'bg-impo_Neutral_Background' : 'bg-impo_Surface_OutlineVariant'}`}
            />
            <MarkDownText markdown={props.markdown} />
          </>
        )}
      </div>
    </div>
  );
};

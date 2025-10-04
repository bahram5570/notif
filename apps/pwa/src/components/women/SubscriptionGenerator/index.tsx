import { useEffect, useRef } from 'react';

import TickIcon from '@assets/icons/subscriptionTick.svg';
import subscriptionbg from '@assets/lottie/subscription_background.json';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';
import { LottieRefCurrentProps } from 'lottie-react';

import MarkDownText from './MarkDownText';
import { SubscriptionGeneratorTypes } from './types';

const SubscriptionGenerator = (props: SubscriptionGeneratorTypes) => {
  const { colors } = useTheme();

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
      className={`w-full   rounded-2xl border-[1px]  relative ${props.specialText && 'mt-5'}`}
      style={{
        borderColor: !isSelected ? colors.Surface_OutlineVariant : '',
        background: isSelected
          ? 'linear-gradient(260.29deg, #E62A6F 3.07%, #7A1BFF 108.68%)'
          : colors.Neutral_Background,
      }}
    >
      {props.isSpecial && (
        <LottieJson animationData={subscriptionbg} lottieRef={lottieRef} loop={true} className="absolute inset-0 z-0" />
      )}

      {props.specialText && (
        <div
          className="flex justify-center py-2 my-2 w-fit  rounded-full px-4 absolute -top-[1.75rem] right-0 mr-5"
          style={{ background: colors.CalendarWoman_Period_Background }}
        >
          <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
            {props.specialText}
          </Typography>
        </div>
      )}
      {props.discountText && (
        <div
          className="flex justify-start w-fit px-2 py-2 rounded-ss-[14px]  rounded-ee-2xl"
          style={{ background: colors.CalendarWoman_Period_Background }}
        >
          <Typography scale="Lable" size="Medium" className="px-2">
            {props.discountText}
          </Typography>
        </div>
      )}

      <div className={`w-full p-4 ${props.specialText && 'pt-2'}   flex flex-col items-end gap-2`}>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-1">
            {!props.isFree && (
              <Typography scale="Lable" size="Small" color={isSelected ? 'Neutral_Background' : 'Neutral_OnBackground'}>
                {props.unit}
              </Typography>
            )}

            <Typography
              scale="Title"
              size="Small"
              color={isSelected ? 'Neutral_Background' : 'Neutral_OnBackground'}
              className="mr-1"
            >
              {totalPayText}
            </Typography>

            <Typography
              scale="Lable"
              size="Medium"
              color={isSelected ? 'Neutral_Background' : 'Surface_OnSurfaceVariant'}
              className="opacity-90"
            >
              {props.subTitle}
            </Typography>
            {realValueText && (
              <div className="relative">
                <Typography scale="Lable" size="Small" color={isSelected ? 'Neutral_Background' : 'Surface_Outline'}>
                  {realValueText}
                </Typography>

                <div
                  style={{ backgroundColor: isSelected ? colors.Neutral_OnBackground : colors.Surface_Outline }}
                  className="absolute top-1.5 left-0 right-0 w-full h-[1px] block"
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Typography
              scale="Title"
              size={isSelected ? 'Large' : 'Small'}
              color={isSelected ? 'Neutral_Background' : 'Neutral_OnBackground'}
            >
              {props.title}
            </Typography>

            {isSelected && (
              <TickIcon className="w-6 h-auto" style={{ stroke: colors.PrimaryWoman_OnPrimary, strokeWidth: 2 }} />
            )}

            {!isSelected && (
              <div
                className="w-4 h-4 min-w-4 min-h-4 my-2 rounded-full border-[1px]"
                style={{ borderColor: colors.Surface_OutlineVariant }}
              />
            )}
          </div>
        </div>
        {isSelected && props.markdown && (
          <>
            <div
              className="w-full h-[1px] block opacity-50"
              style={{ backgroundColor: isSelected ? colors.Neutral_Background : colors.Surface_OutlineVariant }}
            />
            <MarkDownText markdown={props.markdown} />
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionGenerator;

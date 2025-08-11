import ArrowIcon from '@assets/icons/arrow.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { OnboardingIntroFooterPropsType } from './type';

const OnboardingIntroFooter = ({
  lastIndex,
  clickHandler,
  currentIndex,
  finalButton,
}: OnboardingIntroFooterPropsType) => {
  const { colors } = useTheme();
  const route = useRouter();

  return (
    <div className="flex justify-center items-center mt-4">
      <div className={`mt-4 flex ${lastIndex ? 'gap-8' : 'gap-20'}   justify-between items-center`}>
        <Button
          onClick={() => {
            clickHandler(currentIndex - 1);
            route.back();
          }}
          variant="fill"
          size="medium"
          color="onBackground"
          className="!w-10 h-10 px-0 flex justify-center items-center rounded-full"
          style={{ backgroundColor: colors.Black }}
          fullWidth={false}
          isDisable={currentIndex === 0}
        >
          <ArrowIcon className="w-4 h-4" style={{ stroke: colors.White }} />
        </Button>
        <Button
          onClick={() => clickHandler(currentIndex + 1)}
          variant="fill"
          size="medium"
          color="onBackground"
          className={`${lastIndex ? '!w-[244px]' : '!w-10'} h-10 px-0 flex justify-center items-center rounded-full`}
          style={{ backgroundColor: colors.Neutral_OnSurface }}
          fullWidth={false}
        >
          {lastIndex ? (
            <Typography size="Large" scale="Lable" color="PrimaryMan_OnPrimaryMan">
              {finalButton.text}
            </Typography>
          ) : (
            <ArrowIcon className="w-4 h-4 transform rotate-180" style={{ stroke: colors.White }} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingIntroFooter;

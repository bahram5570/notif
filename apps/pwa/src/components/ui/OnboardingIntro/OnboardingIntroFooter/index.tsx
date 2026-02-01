import ArrowIcon from '@assets/icons/arrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useRouter } from 'next/navigation';

import { OnboardingIntroFooterPropsType } from './type';

const OnboardingIntroFooter = ({
  lastIndex,
  clickHandler,
  currentIndex,
  finalButton,
}: OnboardingIntroFooterPropsType) => {
  const route = useRouter();

  return (
    <div className="flex justify-center items-center mt-4">
      <div className={`mt-4 flex ${lastIndex ? 'gap-8' : 'gap-20'}   justify-between items-center`}>
        <div
          onClick={() => {
            clickHandler(currentIndex - 1);
            route.back();
          }}
          className={`!w-10 !h-10  px-0 flex justify-center items-center rounded-full !bg-impo_Black !border-impo_Black ${currentIndex === 0 && 'pointer-events-none'}`}
        >
          <ArrowIcon className="w-4 h-4 stroke-impo_White" />
        </div>
        <div
          onClick={() => clickHandler(currentIndex + 1)}
          className={`${lastIndex ? '!w-[244px]' : '!w-10'} h-10 px-0 flex justify-center items-center rounded-full !bg-impo_Black !border-impo_Black`}
        >
          {lastIndex ? (
            <CustomTypography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
              {finalButton.text}
            </CustomTypography>
          ) : (
            <ArrowIcon className="w-4 h-4 transform rotate-180 stroke-impo_White" />
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingIntroFooter;

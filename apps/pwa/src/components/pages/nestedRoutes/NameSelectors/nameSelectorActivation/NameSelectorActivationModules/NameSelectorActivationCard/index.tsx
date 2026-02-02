import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { NameSelectorActivationCardProps } from './types';

const NameSelectorActivationCard = ({
  currentStep,
  isLoading,
  isDisable,
  children,
  onClick,
  btnText,
}: NameSelectorActivationCardProps) => {
  return (
    <div className="w-full h-fit min-h-[520px] flex flex-col py-8 px-3 rounded-2xl mt-6 bg-[#ffffffdd] dark:bg-impo_Neutral_Surface">
      <>{children}</>

      <div className="w-full flex justify-center pt-5 mt-auto">
        <CustomButton
          onClick={onClick}
          isLoading={isLoading}
          isDisable={isDisable}
          className="!w-[206px]"
          fontSize="Lable_Large"
          id={`BabyNameActivationStep${currentStep}`}
        >
          {btnText}
        </CustomButton>
      </div>
    </div>
  );
};

export default NameSelectorActivationCard;

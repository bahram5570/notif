import { CustomButton } from '@repo/core/components/ui/CustomButton';

import ActivationBtn from '../ActivationBtn';
import { BtnProps, RewardBtnTypes } from './types';

const Btn = ({ btnLabel, btnLabel2, btnHandler, isOnMountModule, isLoading }: BtnProps) => {
  const clickHandler: RewardBtnTypes = (v) => {
    btnHandler(v);
  };

  return (
    <div className="w-full flex flex-col mt-auto px-4 pb-[60px] pt-1">
      <div className="flex mx-auto w-[204px] min-w-fit">
        {btnLabel2 && (
          <CustomButton navigationLoadingId={'rewardModuleBtn'} onClick={() => clickHandler({ isBtn2: true })}>
            {btnLabel2}
          </CustomButton>
        )}

        <ActivationBtn
          showBtn={true}
          isLoading={isLoading}
          onClick={clickHandler}
          btnTestId="rewardModuleBtn"
          navigationLoadingId={isOnMountModule ? undefined : 'rewardModuleBtn'}
        >
          {btnLabel}
        </ActivationBtn>
      </div>
    </div>
  );
};

export default Btn;

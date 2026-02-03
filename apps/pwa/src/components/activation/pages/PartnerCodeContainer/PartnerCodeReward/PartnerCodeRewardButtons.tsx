import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PARTNER_CODE_SHOW_INPUT_QUERY_NAME } from '../constants';
import { PartnerCodeRewardButtonsProps } from './types';

const PartnerCodeRewardButtons = (props: PartnerCodeRewardButtonsProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const completeHandler = () => {
    if (props.onComplete) {
      props.onComplete();
    }
  };

  const showInputHandler = () => {
    newQueryParamsHandler({ [PARTNER_CODE_SHOW_INPUT_QUERY_NAME]: 'true' });
  };

  return (
    <div className="w-full flex flex-col mt-auto px-4 pb-9 pt-1">
      <div className="w-full flex flex-col gap-1">
        {props.btnLabel2 && (
          <CustomButton
            fontSize="Lable_Large"
            onClick={completeHandler}
            navigationLoadingId="PartnerCodeCompleteBtn"
            className="bg-transparent border-transparent !text-impo_Neutral_OnBackground"
          >
            {props.btnLabel2}
          </CustomButton>
        )}

        <CustomButton fontSize="Lable_Large" onClick={showInputHandler} navigationLoadingId="PartnerCodeShowInputBtn">
          {props.btnLabel}
        </CustomButton>
      </div>
    </div>
  );
};

export default PartnerCodeRewardButtons;

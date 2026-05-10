import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import RadioButton from '@components/ui/RadioButton';

import useSubmit from '../__hooks__/useSubmit';
import useValues from '../__hooks__/useValues';
import TicketModal from './TicketModal';

const QuestionGenerator = ({ items }: { items: string[] }) => {
  const { value, valuesHandler } = useValues();
  const { submitHandler, submitLoading, responseData } = useSubmit();

  return (
    <div>
      <div className="grid gap-y-2 mt-3">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => valuesHandler(item)}
              className={`w-full grid [grid-template-columns:1fr_10%] rounded-lg p-2 items-center gap-2 border-[1px] ${value === item ? 'border-impo_PrimaryMan_PrimaryMan bg-impo_Blue_50 dark:bg-impo_Blue_700' : 'border-impo_Transparent'}`}
              style={{ direction: 'rtl' }}
            >
              <CustomTypography
                fontSize={`Lable_MediumProminet`}
                className={`${value === item ? 'text-impo_PrimaryMan_PrimaryMan' : 'text-impo_Neutral_OnSurface'}`}
              >
                {item}
              </CustomTypography>
              <RadioButton isChecked={value === item} />
            </div>
          );
        })}
      </div>
      <CustomButton
        onClick={() => submitHandler(value)}
        className="mt-6 !bg-impo_PrimaryMan_PrimaryMan border-none"
        isDisable={value ? false : true}
        isLoading={submitLoading}
      >
        ارسال تیکت
      </CustomButton>
      {responseData?.valid && <TicketModal text={responseData.result} />}
    </div>
  );
};

export default QuestionGenerator;

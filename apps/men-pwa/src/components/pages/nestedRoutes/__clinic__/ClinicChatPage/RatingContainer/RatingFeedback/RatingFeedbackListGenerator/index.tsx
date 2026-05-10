import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { RatingFeedbackListGeneratorProps } from './types';

const RatingFeedbackListGenerator = ({
  feedbackValuesHandler,
  feedbackValues,
  tabType,
  list,
}: RatingFeedbackListGeneratorProps) => {
  const contextColor = tabType === 'positive' ? 'text-impo_Success_Success' : 'text-impo_Error_Error';
  const borderColor = tabType === 'positive' ? 'border-impo_Success_Success' : 'border-impo_Error_Error';
  const backgroundColor = tabType === 'positive' ? 'bg-impo_Success_SuccessContainer' : 'bg-impo_Error_ErrorContainer';
  const selectedValues = tabType === 'positive' ? feedbackValues.feedbackPositive : feedbackValues.feedbackNegative;

  return (
    <div className="w-full grid grid-cols-2 gap-4 px-3 py-4  ">
      {list.map((item, index) => {
        const isSelected = selectedValues.includes(item);

        const selectHandler = () => {
          let updatedList = selectedValues;

          const name = tabType === 'positive' ? 'feedbackPositive' : 'feedbackNegative';

          if (isSelected) {
            updatedList = selectedValues.filter((i) => i !== item);
          } else {
            updatedList.push(item);
          }

          feedbackValuesHandler({ name, value: updatedList });
        };

        return (
          <div
            key={index}
            onClick={selectHandler}
            className={`w-[145px] h-[42px] mx-auto rounded-lg flex items-center justify-center border-[1px] cursor-pointer ${isSelected ? `${backgroundColor} ${borderColor} ` : 'bg-impo_Transparent border-impo_Surface_OutlineVariant'}`}
          >
            <CustomTypography
              fontSize="Body_Small"
              className={`scale-90 text-center ${isSelected ? contextColor : 'text-impo_Neutral_OnBackground'}`}
            >
              {item}
            </CustomTypography>
          </div>
        );
      })}
    </div>
  );
};

export default RatingFeedbackListGenerator;

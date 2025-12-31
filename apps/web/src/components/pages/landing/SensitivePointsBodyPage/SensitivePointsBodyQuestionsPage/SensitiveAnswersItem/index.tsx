import CustomTypography from '@components/ui/CustomTypography';

import { SensitiveAnswersItemPropsType } from './type';

const SensitiveAnswersItem = ({ answer, score, selectedIndex, selectHandler }: SensitiveAnswersItemPropsType) => {
  const isSelected = selectedIndex === score;
  const onClick = () => {
    selectHandler(score);
  };
  return (
    <div
      onClick={onClick}
      className={`w-full rounded-2xl py-4 px-6 border-[1px] cursor-pointer ${isSelected ? 'border-impo_Pink_500 bg-impo_Pink_50' : 'border-impo_Transparent bg-impo_Grey_50'}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full border-[1px] p-[2px] ${isSelected ? 'border-impo_Pink_500' : 'border-impo_Grey_200'} `}
        >
          {isSelected && <div className="w-full h-full rounded-full bg-impo_Pink_500" />}
        </div>

        <CustomTypography fontSize="Body_Medium">{answer}</CustomTypography>
      </div>
    </div>
  );
};

export default SensitiveAnswersItem;

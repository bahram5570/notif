import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import RadioButton from '@components/ui/RadioButton';

import { RadioButtonGeneratorPropsType } from '../type';

const RadioButtonGenerator = ({
  imageUrl,
  title,
  value,
  selectedValue,
  handleChange,
}: RadioButtonGeneratorPropsType) => {
  return (
    <div
      onClick={() => handleChange(value)}
      className={`w-full rounded-2xl flex flex-col items-center justify-between gap-3 pt-4 px-4 bg-impo_Neutral_Background border ${selectedValue === value ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant'} `}
    >
      <div className="w-full flex flex-col  gap-3 cursor-pointer">
        <div className="flex flex-row-reverse items-center">
          <RadioButton isChecked={selectedValue === value} />
          <CustomTypography
            className="text-impo_Neutral_OnBackground"
            fontSize={`${selectedValue === value ? 'Lable_Medium' : 'Body_Medium'}`}
          >
            {title}
          </CustomTypography>
        </div>
        <div className="flex justify-center items-center w-full  ">
          <CustomImage_NEW src={imageUrl} className="mt-3" width={372} height={444} />
        </div>
      </div>
    </div>
  );
};

export default RadioButtonGenerator;

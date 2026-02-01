import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_RadioButton from '@components/ui/Dark_RadioButton';

import { LIST_LABEL } from './constants';
import { PartnerRadioButtonPropsType } from './type';

const PartnerRadioButton = ({ onChange, value }: PartnerRadioButtonPropsType) => {
  return (
    <div className="flex flex-col gap-2 items-end ">
      {LIST_LABEL.map((item, index) => {
        const lastItem = LIST_LABEL.length - 1 === index;
        return (
          <div
            className={`flex items-center justify-end gap-3 w-full ${!lastItem && 'border-b border-b-impo_Neutral_Surface'}`}
            key={index}
          >
            <label htmlFor={item.name}>
              <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
                {item.name}
              </CustomTypography>
            </label>
            <Dark_RadioButton isChecked={value === item.value} onClick={() => onChange(item.value)} />
          </div>
        );
      })}
    </div>
  );
};

export default PartnerRadioButton;

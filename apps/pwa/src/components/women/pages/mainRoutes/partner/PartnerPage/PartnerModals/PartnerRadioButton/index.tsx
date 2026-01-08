import Dark_RadioButton from '@components/ui/Dark_RadioButton';
import Dark_Typography from '@components/ui/Dark_Typography';

import { LIST_LABEL } from './constants';
import { PartnerRadioButtonPropsType } from './type';

const PartnerRadioButton = ({ onChange, value }: PartnerRadioButtonPropsType) => {
  return (
    <div className="flex flex-col gap-2 items-end divide-y-[1px]">
      {LIST_LABEL.map((item, index) => {
        return (
          <div className="flex items-center justify-end gap-3 w-full" key={index}>
            <label htmlFor={item.name}>
              <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
                {item.name}
              </Dark_Typography>
            </label>
            <Dark_RadioButton isChecked={value === item.value} onClick={() => onChange(item.value)} />
          </div>
        );
      })}
    </div>
  );
};

export default PartnerRadioButton;

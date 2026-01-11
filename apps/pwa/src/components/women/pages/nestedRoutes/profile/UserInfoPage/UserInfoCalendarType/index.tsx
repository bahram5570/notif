import Dark_RadioButton from '@components/ui/Dark_RadioButton';
import Dark_Typography from '@components/ui/Dark_Typography';

import { CHANGE_CALENDAR_TYPE_LIST } from './constants';
import { UserInfoCalendarTypeTypes } from './types';

const UserInfoCalendarType = ({ value, valueHandler }: UserInfoCalendarTypeTypes) => {
  return (
    <>
      {CHANGE_CALENDAR_TYPE_LIST.map((item, index) => (
        <div
          key={index}
          onClick={() => valueHandler(item.value)}
          className={`w-full h-12 flex items-center gap-2 border-t-[1px] ${index > 0 ? 'border-impo_Neutral_Surface' : 'border-impo_Transparent'}`}
          style={{ direction: 'rtl' }}
        >
          <Dark_RadioButton isChecked={item.value === value} />

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface">
            {item.text}
          </Dark_Typography>
        </div>
      ))}
    </>
  );
};

export default UserInfoCalendarType;

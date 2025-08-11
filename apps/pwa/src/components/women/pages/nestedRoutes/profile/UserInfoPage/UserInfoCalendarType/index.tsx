import RadioButton from '@components/ui/RadioButton';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CHANGE_CALENDAR_TYPE_LIST } from './constants';
import { UserInfoCalendarTypeTypes } from './types';

const UserInfoCalendarType = ({ value, valueHandler }: UserInfoCalendarTypeTypes) => {
  const { colors } = useTheme();

  return (
    <>
      {CHANGE_CALENDAR_TYPE_LIST.map((item, index) => (
        <div
          key={index}
          onClick={() => valueHandler(item.value)}
          className="w-full h-12 flex items-center gap-2 border-t-[1px]"
          style={{ borderTopColor: index > 0 ? colors.Neutral_Surface : colors.Transparent, direction: 'rtl' }}
        >
          <RadioButton isChecked={item.value === value} />

          <Typography scale="Body" size="Medium" color="Neutral_OnSurface">
            {item.text}
          </Typography>
        </div>
      ))}
    </>
  );
};

export default UserInfoCalendarType;

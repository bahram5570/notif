import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RoutinTabNameEnum } from './enum';
import { RoutinTabProps } from './type';

const RoutinTab = ({ commentTabName, itemsTabName, tab, tabHandler }: RoutinTabProps) => {
  const { colors } = useTheme();

  const options = [
    { id: RoutinTabNameEnum.Items, text: itemsTabName },
    { id: RoutinTabNameEnum.Comments, text: commentTabName },
  ];

  return (
    <div className="flex flex-row-reverse mx-4 mt-8">
      {options.map((option) => (
        <div
          onClick={() => tabHandler(option.id)}
          className="border-b-[1px] pb-2 flex justify-center w-1/2 select-none cursor-pointer"
          style={{ borderColor: option.id === tab ? colors.PrimaryWoman_Primary : colors.Neutral_Surface }}
          key={option.id}
        >
          {option.id === tab ? (
            <Typography scale="Lable" size="Large" textAlign="center" color="PrimaryWoman_Primary">
              {option.text}
            </Typography>
          ) : (
            <Typography scale="Body" size="Medium" textAlign="center" color="Surface_Outline">
              {option.text}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoutinTab;

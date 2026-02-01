import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { RoutinTabNameEnum } from './enum';
import { RoutinTabProps } from './type';

const RoutinTab = ({ commentTabName, itemsTabName, tab, tabHandler }: RoutinTabProps) => {
  const options = [
    { id: RoutinTabNameEnum.Items, text: itemsTabName },
    { id: RoutinTabNameEnum.Comments, text: commentTabName },
  ];

  return (
    <div className="flex flex-row-reverse  mt-8">
      {options.map((option) => (
        <div
          onClick={() => tabHandler(option.id)}
          className={`border-b-[1px] pb-2 flex justify-center w-1/2 select-none cursor-pointer ${option.id === tab ? 'border-impo_Primary_Primary' : 'border-impo_Neutral_Surface'}`}
          key={option.id}
        >
          <CustomTypography
            className={`${option.id === tab ? 'text-impo_Primary_Primary' : 'text-impo_Surface_Outline'} text-center`}
            fontSize={`${option.id === tab ? 'Lable_Large' : 'Body_Medium'}`}
          >
            {option.text}
          </CustomTypography>
        </div>
      ))}
    </div>
  );
};

export default RoutinTab;

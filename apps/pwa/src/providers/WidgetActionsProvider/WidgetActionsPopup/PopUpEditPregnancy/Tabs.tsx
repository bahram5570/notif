import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { EDIT_PREGNANCY_TABS_LIST } from './constants';
import { TabsTypes } from './types';

const Tabs = ({ tab, tabHandler }: TabsTypes) => {
  return (
    <div className="flex flex-row-reverse mx-4 mt-20">
      {EDIT_PREGNANCY_TABS_LIST.map((option) => (
        <div
          key={option.id}
          onClick={() => tabHandler(option.id)}
          className={`
                      w-1/2
                      pb-2 
                      flex 
                      justify-center 
                      border-b-[1px] 
                      ${option.id === tab ? 'border-b-impo_Primary_Primary' : 'border-b-impo_Neutral_Surface'}
                    `}
        >
          <CustomTypography
            fontSize="Lable_Medium"
            className={`
                        text-center 
                        ${option.id === tab ? 'text-impo_Primary_Primary' : 'text-impo_Surface_Outline'}
                      `}
          >
            {option.text}
          </CustomTypography>
        </div>
      ))}
    </div>
  );
};

export default Tabs;

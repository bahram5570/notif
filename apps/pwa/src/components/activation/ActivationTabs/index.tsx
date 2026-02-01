import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ActivationTabsTypes } from './types';

const ActivationTabs = ({ tab, tabHandler, tabsList }: ActivationTabsTypes) => {
  return (
    <div className="flex flex-row-reverse mx-4 mt-8" data-testid="activation_tabs">
      {tabsList.map((item) => (
        <div
          key={item.value}
          data-testid={`tab_${item.value}`}
          onClick={() => tabHandler(item.value)}
          className={`
                      w-1/2 
                      pb-2 
                      flex 
                      justify-center 
                      select-none 
                      cursor-pointer
                      border-b-[1px] 
                      ${item.value === tab ? 'border-impo_Primary_Primary' : 'border-impo_Neutral_Surface'}
                    `}
        >
          <CustomTypography
            fontSize="Lable_Medium"
            className={`text-center ${item.value === tab ? 'text-impo_Primary_Primary' : 'text-impo_Surface_Outline'}`}
          >
            {item.text}
          </CustomTypography>
        </div>
      ))}
    </div>
  );
};

export default ActivationTabs;

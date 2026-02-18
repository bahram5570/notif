import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ActivationTabsTypes } from './types';

const ActivationTabs = ({ tab, tabHandler, tabsList }: ActivationTabsTypes) => {
  return (
    <div className="relative w-[calc(100%_-_48px)] flex flex-row-reverse mx-auto mt-8">
      {tabsList.map((item) => (
        <div
          key={item.value}
          onClick={() => tabHandler(item.value)}
          className={`
                      w-1/2 
                      pb-2 
                      flex 
                      justify-center 
                      select-none 
                      cursor-pointer
                      border-b-[1px] 
                      ${item.value === tab ? 'border-impo_PrimaryMan_PrimaryMan' : 'border-impo_Neutral_Surface'}
                    `}
        >
          <CustomTypography
            fontSize="Lable_Medium"
            className={`text-center ${item.value === tab ? 'text-impo_PrimaryMan_PrimaryMan' : 'text-impo_Surface_Outline'}`}
          >
            {item.text}
          </CustomTypography>
        </div>
      ))}
    </div>
  );
};

export default ActivationTabs;

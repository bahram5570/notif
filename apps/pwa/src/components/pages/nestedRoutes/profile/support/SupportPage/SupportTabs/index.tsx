import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SupportTabsEnum } from '../../__hooks__/useSupportTabs/Enum';
import { SUPPORT_TABS_LIST } from '../../__hooks__/useSupportTabs/constants';
import { SupportTabsTypes } from './types';

const SupportTabs = ({ tab, supportTabHandler, hadPendingTicket }: SupportTabsTypes) => {
  return (
    <div className="w-full mt-2 mb-4 flex flex-row-reverse border-b-[1px] border-b-impo_Surface_OutlineVariant">
      {SUPPORT_TABS_LIST.map((item, index) => {
        const isSelected = tab === item.type;

        return (
          <div
            key={index}
            onClick={() => supportTabHandler(item.type)}
            className={`
                        w-full 
                        h-full 
                        py-2 
                        flex 
                        items-center 
                        justify-center 
                        border-b-[2px] 
                        ${isSelected ? 'border-b-impo_Primary_Primary' : 'border-b-transparent'}
                      `}
          >
            {hadPendingTicket && item.type === SupportTabsEnum.Tickets && (
              <div className="w-2 h-2 mx-1 rounded-full bg-impo_Warning_Warning animate-pulse" />
            )}

            <CustomTypography
              fontSize="Lable_Medium"
              className={`${isSelected ? '!text-impo_Neutral_OnBackground' : '!text-impo_Surface_Outline'}`}
            >
              {item.title}
            </CustomTypography>
          </div>
        );
      })}
    </div>
  );
};

export default SupportTabs;

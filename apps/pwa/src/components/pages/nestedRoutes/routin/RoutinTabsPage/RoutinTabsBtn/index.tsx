import { useEffect, useRef } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import { RoutinTabsBtnPropsType } from './type';

const RoutinTabsBtn = ({ activeTab, handleTabChange, tabsOrder }: RoutinTabsBtnPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (activeTab && tabRefs.current[activeTab]) {
      tabRefs.current[activeTab]?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeTab]);

  return (
    <div
      className=" overflow-x-auto overflow-y-hidden flex flex-row-reverse fixed gap-3 px-4 py-2 z-40 mx-auto left-0 right-0 bg-impo_Neutral_Background"
      style={{ top: HEADER_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
      ref={containerRef}
    >
      {tabsOrder.map((tab, index) => {
        return (
          <div
            ref={(el) => {
              tabRefs.current[activeTab] = el;
            }}
            className={`rounded-full  py-2 w-full ${activeTab === index ? 'px-3 bg-impo_Primary_PrimaryContainer' : 'bg-impo_Neutral_Surface'} border border-impo_Neutral_Surface`}
            key={tab.tabType}
            onClick={() => handleTabChange(index)}
          >
            <CustomTypography
              className={`${activeTab === index ? 'text-impo_Primary_Primary' : 'text-impo_Neutral_OnBackground'}  text-center !w-32 `}
              fontSize={`${activeTab === index ? 'Lable_Medium' : 'Body_Small'}`}
            >
              {tab.tabName}
            </CustomTypography>
          </div>
        );
      })}
    </div>
  );
};

export default RoutinTabsBtn;

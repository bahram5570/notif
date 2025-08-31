import { useEffect, useRef } from 'react';

import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { RoutinTabsBtnPropsType } from './type';

const RoutinTabsBtn = ({ activeTab, handleTabChange, tabsOrder }: RoutinTabsBtnPropsType) => {
  const { colors } = useTheme();
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
      className=" overflow-x-auto overflow-y-hidden flex flex-row-reverse fixed gap-3 p-4 z-40 mx-auto left-0 right-0"
      style={{ backgroundColor: colors.White, top: HEADER_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
      ref={containerRef}
    >
      {tabsOrder.map((tab, index) => {
        return (
          <div
            ref={(el) => {
              tabRefs.current[activeTab] = el;
            }}
            style={{
              border: `1px solid ${colors.Neutral_Surface}`,
              backgroundColor: activeTab === index ? colors.PrimaryWoman_PrimaryContainer : colors.Neutral_Background,
            }}
            className={`rounded-full  py-2 w-full ${activeTab === index && 'px-3'}`}
            key={tab.tabType}
            onClick={() => handleTabChange(index)}
          >
            <Typography
              scale={activeTab === index ? 'Lable' : 'Body'}
              size={activeTab === index ? 'Medium' : 'Small'}
              color={activeTab === index ? 'PrimaryWoman_Primary' : 'Neutral_OnBackground'}
              className="!w-32"
              textAlign="center"
            >
              {tab.tabName}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default RoutinTabsBtn;

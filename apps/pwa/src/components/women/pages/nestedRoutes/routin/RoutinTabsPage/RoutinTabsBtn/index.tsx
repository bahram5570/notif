import { useEffect, useRef } from 'react';

import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import { ROUTIN_TABS } from './constants';
import { RoutinTabsBtnPropsType } from './type';

const RoutinTabsBtn = ({ activeTab, handleTabChange }: RoutinTabsBtnPropsType) => {
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
      className=" max-w-full overflow-x-auto overflow-y-hidden flex flex-row-reverse fixed gap-3 p-4 z-40"
      style={{ backgroundColor: colors.White, top: HEADER_HEIGHT }}
      ref={containerRef}
    >
      {ROUTIN_TABS.map((tab) => {
        return (
          <div
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            style={{
              border: `1px solid ${colors.Neutral_Surface}`,
              backgroundColor: activeTab === tab.id ? colors.PrimaryWoman_PrimaryContainer : colors.Neutral_Background,
            }}
            className={`rounded-full  py-2 w-full ${activeTab === tab.id && 'px-3'}`}
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
          >
            <Typography
              scale={activeTab === tab.id ? 'Lable' : 'Body'}
              size={activeTab === tab.id ? 'Medium' : 'Small'}
              color={activeTab === tab.id ? 'PrimaryWoman_Primary' : 'Neutral_OnBackground'}
              className="!w-32"
              textAlign="center"
            >
              {tab.label}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default RoutinTabsBtn;

import { useEffect, useRef, useState } from 'react';

import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';

import RoutinCard from '@components/__routin__/RoutinCard';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { ProgramScrollPropType } from './type';

const WidgetProgramScroll = ({ data }: ProgramScrollPropType) => {
  const { callEvent } = useAnalytics();
  const { operatingSystem } = useOperatingSystem();
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isWindows = operatingSystem === 'windows';
  const hasOneItem = data.items.length === 1;

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      setContainerWidth(containerRef.current!.offsetWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      onClick={() => callEvent('Action_From_ProgramScrollWidget')}
      classNameBtn="dark:text-impo_White text-impo_black bg-impo_Grey_100 border-impo_Grey_100  dark:bg-impo_Neutral_Surface dark:border-impo_Neutral_Surface"
    >
      <div
        className={`overflow-x-auto overflow-y-hidden  max-w-full flex flex-row-reverse gap-3 scrollbar  ${!isWindows && 'hide'}`}
        ref={containerRef}
      >
        {data.items.map((item, index) => (
          <div className="flex flex-row w-full" key={index}>
            <RoutinCard
              data={item}
              showDescription={false}
              className={hasOneItem ? 'w-full' : 'w-20'}
              width={containerWidth - 50}
            />
          </div>
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetProgramScroll;

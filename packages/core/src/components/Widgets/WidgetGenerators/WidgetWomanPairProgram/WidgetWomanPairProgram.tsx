import { useEffect, useRef, useState } from 'react';

import { useSystem } from '../../../../hooks/useSystem';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import WomanPairRoutin from './WomanPairRoutin';
import { WomanPairProgramCardPropsPropsType } from './types';

export const WidgetWomanPairProgram = ({ data, isMan = false }: WomanPairProgramCardPropsPropsType) => {
  const { operatingSystem } = useSystem();
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
    <WidgetCardContainer title={data.title} className="!px-0">
      <div
        className={`overflow-x-auto overflow-y-hidden max-w-full flex flex-row-reverse gap-3 scrollbar ${!isWindows && 'hide'}`}
        ref={containerRef}
      >
        {data.items.map((item, index) => (
          <div className="flex flex-row w-full" key={index}>
            <div
              className={`rounded-2xl flex flex-col  justify-between bg-impo_Neutral_Surface p-4 ${hasOneItem ? 'w-full' : 'w-80'}`}
              style={{ width: containerWidth - 50 }}
            >
              <WomanPairRoutin {...item} isMan={isMan} />
            </div>
          </div>
        ))}
      </div>
    </WidgetCardContainer>
  );
};

import { useEffect, useRef, useState } from 'react';

import { useSystem } from '../../../../hooks/useSystem';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import WomanPairRoutin from './WomanPairRoutin';
import { WomanPairProgramCardPropsPropsType } from './types';

export const WidgetManProgramHealth = ({ data }: WomanPairProgramCardPropsPropsType) => {
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
    <div className="w-full px-0 pt-6 ">
      <div className="w-full h-fit  py-4 pr-4 bg-impo_Neutral_Surface">
        <div className="flex justify-end items-start gap-2 border-b-[1px]  mb-2 border-impo_Neutral_Surface">
          <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
            {data.title}
          </CustomTypography>
        </div>

        <div
          className={`overflow-x-auto overflow-y-hidden max-w-full flex flex-row-reverse gap-3 scrollbar ${!isWindows && 'hide'}`}
          ref={containerRef}
        >
          {data.items.map((item, index) => (
            <div className="flex flex-row w-full justify-end" key={index}>
              <div
                className={`rounded-2xl flex flex-col  justify-between bg-impo_Neutral_Background p-4 ${hasOneItem ? 'w-full' : 'w-80'}`}
                style={{ width: containerWidth - 50 }}
              >
                <WomanPairRoutin {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/vector.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { GOALS_LIST, GOAL_SELECTOR_HEIGHT, GOAL_SELECTOR_WIDTH } from './constants';
import { GoalSelectorProps, SelectHandlerTypes } from './types';

const GoalSelector = ({ selectedGoalTitle, payloadHandler }: GoalSelectorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectHandler: SelectHandlerTypes = (v) => {
    payloadHandler(v);
    setIsOpen(false);
  };

  useEffect(() => {
    // # Closes the dropdown by clicking anywhere outside the parent component
    const parentElement = ref.current;

    const clickHandler = (event: MouseEvent) => {
      const documentElement = event.target as Node | null;

      if (parentElement && documentElement) {
        if (!parentElement.contains(documentElement)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div className="relative ml-auto" ref={ref}>
      <div
        className="px-4 rounded-full flex items-center justify-between cursor-pointer select-none bg-impo_Neutral_Background"
        style={{ width: GOAL_SELECTOR_WIDTH + 10, height: GOAL_SELECTOR_HEIGHT }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowIcon
          className={`
                      w-2 
                      h-auto 
                      stroke-impo_Surface_OnSurfaceVariant
                      ${isOpen ? 'rotate-90' : '-rotate-90'}
                    `}
        />

        <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Surface_OnSurfaceVariant">
          {selectedGoalTitle}
        </CustomTypography>
      </div>

      {isOpen && (
        <div
          style={{ width: GOAL_SELECTOR_WIDTH }}
          className="absolute left-0 right-0 top-8 flex flex-col rounded-xl bg-impo_Neutral_Background overflow-hidden z-10"
        >
          {GOALS_LIST.map((item, index) => (
            <div
              className="w-full px-4 py-1 select-none cursor-pointer hover:bg-impo_Neutral_Surface"
              onClick={() => selectHandler(item.value)}
              key={index}
            >
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground ml-auto">
                {item.title}
              </CustomTypography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoalSelector;

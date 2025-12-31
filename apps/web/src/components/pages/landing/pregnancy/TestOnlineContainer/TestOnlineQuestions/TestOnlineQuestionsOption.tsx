import { useEffect, useRef, useState } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import { TestOnlineQuestionsOptionTypes } from './types';

const TestOnlineQuestionsOption = ({ selectHandler, isSelected, title, message }: TestOnlineQuestionsOptionTypes) => {
  const [messageHeight, setMessageHeight] = useState(0);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message) {
      const el = messageRef.current;

      if (el) {
        const elMargin = 16;
        setMessageHeight(el.offsetHeight + elMargin);
      }
    }
  }, [message, messageRef.current]);

  return (
    <div
      onClick={selectHandler}
      className={`
                  w-full 
                  rounded-2xl 
                  py-4 
                  px-6 
                  border-[1px] 
                  cursor-pointer
                  ${
                    isSelected
                      ? 'bg-impo_Pink_50 dark:bg-impo_Surface_SurfaceVariant border-impo_Primary_Primary'
                      : 'bg-impo_Neutral_Surface border-impo_Transparent'
                  }
                `}
    >
      <div className="flex items-start gap-3">
        <div
          className={`
                      w-[18px] 
                      h-[18px] 
                      min-w-[18px] 
                      min-h-[18px] 
                      rounded-full 
                      border-[1px] 
                      p-[2px] 
                      mt-1
                      ${isSelected ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant dark:border-impo_Surface_Outline'}
                    `}
        >
          {isSelected && <div className="w-full h-full rounded-full bg-impo_Primary_Primary" />}
        </div>

        <CustomTypography className="!text-impo_Neutral_OnBackground">{title}</CustomTypography>
      </div>

      {message && (
        <div style={{ maxHeight: isSelected ? messageHeight : 0 }} className="h-fit duration-200 overflow-hidden">
          <div
            ref={messageRef}
            className="w-[calc(100%_-_30px)] border-t-[1px] border-t-impo_Pink_100 mt-4 mr-auto pt-2"
          >
            <CustomTypography fontSize="Body_Small" className="text-justify !text-impo_Neutral_OnBackground">
              {message}
            </CustomTypography>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestOnlineQuestionsOption;

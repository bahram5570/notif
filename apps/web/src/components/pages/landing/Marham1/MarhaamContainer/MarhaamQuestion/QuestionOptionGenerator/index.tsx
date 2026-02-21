'use client';

import { useEffect, useRef, useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { QuestionOptionGeneratorTypes } from './types';

const QuestionOptionGenerator = ({ title, isSelected, onClick, description }: QuestionOptionGeneratorTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState('0px');

  useEffect(() => {
    setDescriptionHeight((ref.current?.clientHeight || 0) + 6 + 'px');
  }, []);

  return (
    <div onClick={onClick} className="w-full h rounded-xl flex items-center gap-4  cursor-pointer">
      <div
        className={`w-full h-fit p-4 rounded-xl border-[1px] pointer-events-none ${isSelected ? 'border-impo_Primary_Primary bg-[#FFEBF2]' : 'border-impo_Transparent bg-impo_Surface_SurfaceVariant'}`}
      >
        <div className="flex justify-start items-center gap-2">
          <div
            className={`relative w-5 h-5 min-w-5 min-h-5 rounded-full border-[1px] overflow-hidden ${isSelected ? 'border-impo_Primary_Primary bg-impo_Primary_Primary' : 'border-impo_Surface_SurfaceVariant bg-impo_Transparent'}`}
          >
            {isSelected && (
              <>
                <div
                  style={{ borderColor: '#FFEBF2' }}
                  className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] border-[3px] rounded-full m-auto"
                />
              </>
            )}
          </div>
          <CustomTypography fontSize="Lable_Medium"> {title}</CustomTypography>
        </div>

        <div
          style={{ height: `${description && isSelected ? descriptionHeight : 0}` }}
          className={`w-full overflow-hidden transition-all ease-in-out duration-200`}
        >
          <div ref={ref} className="w-full flex flex-col ">
            <div className={`w-full h-[1px] my-2 mr-7 bg-[#FFD2E2]`} />
            <CustomTypography fontSize="Body_Small"> {description}</CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionOptionGenerator;

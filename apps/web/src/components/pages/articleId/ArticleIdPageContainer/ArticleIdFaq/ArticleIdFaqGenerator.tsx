import { useEffect, useRef, useState } from 'react';

import CrossIcon from '@assets/icons/cross.svg';
import MinusIcon from '@assets/icons/minus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ArticleIdFaqGeneratorTypes } from './types';

const ArticleIdFaqGenerator = ({
  selectedItemHandler,
  selectedItem,
  question,
  answer,
  id,
}: ArticleIdFaqGeneratorTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const extraSpace = 8;
      setMaxHeight(el.scrollHeight + extraSpace);
    }
  }, [ref.current?.scrollHeight]);

  const isOpen = id === selectedItem;

  return (
    <div
      onClick={() => selectedItemHandler(id)}
      className={`
                  w-full 
                  px-6 
                  py-5 
                  rounded-xl 
                  border-[1px] 
                  cursor-pointer
                  ${
                    isOpen
                      ? 'bg-impo_Pink_50 dark:bg-impo_Surface_SurfaceVariant border-impo_Primary_Primary'
                      : 'bg-impo_Neutral_Surface border-impo_Transparent'
                  }
                `}
    >
      <div className="flex items-center gap-3">
        {isOpen && <MinusIcon className="w-3 fill-impo_Surface_Outline" />}
        {!isOpen && <CrossIcon className="w-3 rotate-45 fill-impo_Surface_Outline" />}

        <CustomTypography fontSize="Lable_Large" className="!text-impo_Neutral_OnBackground">
          {question}
        </CustomTypography>
      </div>

      <div className="w-full duration-500 overflow-hidden" style={{ maxHeight: isOpen ? maxHeight : 0 }} ref={ref}>
        <CustomTypography fontSize="Body_Medium" className="pt-4 pr-6 !text-impo_Neutral_OnBackground">
          {answer}
        </CustomTypography>
      </div>
    </div>
  );
};

export default ArticleIdFaqGenerator;

import { useEffect, useRef, useState } from 'react';

import ArrowDownIcon from '@assets/icons/ArrowDown.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const ReadMoreText = ({ text, maxLines = 3 }: { text: string; maxLines: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * maxLines + 10;
      setIsTruncated(textRef.current.scrollHeight > maxHeight);
    }
  }, [text]);

  return (
    <div>
      <div
        ref={textRef}
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: isExpanded ? 'unset' : maxLines, // If expanded, show all text
          transition: 'all 0.3s ease',
          maxHeight: isExpanded
            ? 'unset'
            : textRef.current
              ? `${parseInt(window.getComputedStyle(textRef.current).lineHeight) * maxLines}px`
              : 'auto', // Ensure max height is applied
        }}
      >
        <CustomTypography fontSize="Body_Medium" className="py-2 text-impo_Neutral_OnBackground">
          {text}
        </CustomTypography>
      </div>

      {isTruncated && (
        <div onClick={() => setIsExpanded(!isExpanded)} id="PregnancyCheckupCardClick">
          <div className="flex flex-row-reverse gap-1 justify-end mt-3">
            <CustomTypography className="text-impo_Primary_Primary" fontSize="Lable_Small">
              {isExpanded ? 'بستن اطلاعات بیشتر ' : 'خواندن اطلاعات بیشتر'}
            </CustomTypography>
            {isExpanded ? (
              <ArrowDownIcon className="w-4 h-4 stroke-impo_Primary_Primary" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 rotate-180 stroke-impo_Primary_Primary" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMoreText;

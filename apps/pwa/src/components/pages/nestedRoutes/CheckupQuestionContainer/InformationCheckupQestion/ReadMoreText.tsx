import { useEffect, useRef, useState } from 'react';

import ArrowDownIcon from '@assets/icons/ArrowDown.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const ReadMoreText = ({ text, maxLines = 3 }: { text: string; maxLines: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight, 10);
      const maxHeight = lineHeight * maxLines;
      setIsTruncated(textRef.current.scrollHeight > maxHeight);
    }
  }, [text]);

  const collapsedStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical' as const,
    WebkitLineClamp: maxLines as unknown as string,
    overflow: 'hidden',
  };

  const expandedStyle: React.CSSProperties = {
    display: 'block',
    WebkitBoxOrient: 'vertical' as const,
    WebkitLineClamp: 'none',
  };

  return (
    <div>
      <div ref={textRef} style={isExpanded ? expandedStyle : collapsedStyle}>
        <CustomTypography fontSize="Body_Medium" className="py-2 text-impo_Neutral_OnBackground">
          {text}
        </CustomTypography>
      </div>

      {isTruncated && (
        <div onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex flex-row-reverse gap-1 justify-end mt-3">
            <CustomTypography className="text-impo_Primary_Primary" fontSize="Lable_Small">
              {isExpanded ? 'بستن اطلاعات بیشتر ' : 'خواندن اطلاعات بیشتر'}
            </CustomTypography>
            <ArrowDownIcon className={`w-4 h-4 stroke-impo_Primary_Primary ${!isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMoreText;

import { useEffect, useRef, useState } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import { HeaderDesktopMultiLinkContainerTypes } from './types';

const MultiLinkContainer = ({ title, children }: HeaderDesktopMultiLinkContainerTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const enterHandler = () => setIsOpen(true);
      const leaveHandler = () => setIsOpen(false);

      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);

      return () => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
      };
    }
  }, []);

  return (
    <div className="relative cursor-pointer !text-impo_Neutral_OnBackground hover:!text-impo_Primary_Primary" ref={ref}>
      <CustomTypography fontSize="Body_Medium" className="!text-inherit duration-200">
        {title}
      </CustomTypography>

      <div
        style={{ maxHeight: isOpen ? 'none' : '0px' }}
        className="absolute top-0 -right-10 w-fit min-w-[180px] pt-6 overflow-hidden z-10"
      >
        <div
          onClick={() => setIsOpen(false)}
          className="w-full flex flex-col gap-1 px-2 py-3 border-[1px] border-impo_Neutral_Surface bg-impo_Black_And_White rounded-xl"
        >
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default MultiLinkContainer;

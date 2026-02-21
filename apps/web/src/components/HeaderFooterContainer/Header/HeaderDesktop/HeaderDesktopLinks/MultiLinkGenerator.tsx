import { useEffect, useRef, useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

import { HEADER_MULTI_LINK } from '../../types';

const MultiLinkGenerator = ({ linkTo, title }: HEADER_MULTI_LINK) => {
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
          className="w-full flex flex-col gap-1 px-2 py-3 border-[1px] border-impo_Grey_200 dark:border-impo_Surface_SurfaceVariant bg-impo_OnBlack rounded-xl"
        >
          <>
            {linkTo.map((item, index) => (
              <div className="w-full h-9 flex items-center" key={index}>
                <CustomLink href={item.linkTo} className="!w-full hover:opacity-100">
                  <CustomTypography
                    fontSize="Body_Medium"
                    className="
                           !text-impo_Neutral_OnBackground
                           hover:!text-impo_Primary_Primary
                           hover:bg-impo_Surface_SurfaceVariant
                           whitespace-nowrap
                           px-2
                           py-2
                           rounded-md
                           duration-200
                         "
                  >
                    {item.title}
                  </CustomTypography>
                </CustomLink>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default MultiLinkGenerator;

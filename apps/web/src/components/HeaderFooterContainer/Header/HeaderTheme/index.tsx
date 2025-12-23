import { useEffect, useRef, useState } from 'react';

import DarkIcon from '@assets/icons/themeDark.svg';
import { getTheme, themeHandler } from '@utils/theme';

import CustomTypography from '@components/ui/CustomTypography';
import { HEADER_THEME_LIST } from '@constants/links.constants';
import useBreakPoint from '@hooks/useBreakPoint';
import { ThemeTypes } from '@theme/types';

const HeaderTheme = () => {
  const { breakPoint } = useBreakPoint();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeTypes>('dark');

  useEffect(() => {
    setThemeMode(getTheme());
  }, []);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const openHandler = () => setIsOpen(true);
      const closeHandler = () => setIsOpen(false);

      // # Desktop
      if (breakPoint.laptop) {
        const pointerDownHandler = (event: PointerEvent) => {
          const el = ref.current;

          if (el && !el.contains(event.target as Node)) {
            closeHandler();
          }
        };

        el.addEventListener('click', openHandler);
        document.addEventListener('pointerdown', pointerDownHandler, true);

        return () => {
          el.removeEventListener('click', openHandler);
          document.removeEventListener('pointerdown', pointerDownHandler, true);
        };
      }

      // # Mobide and tablet
      if (!breakPoint.laptop) {
        el.addEventListener('mouseenter', openHandler);
        el.addEventListener('mouseleave', closeHandler);

        return () => {
          el.removeEventListener('mouseenter', openHandler);
          el.removeEventListener('mouseleave', closeHandler);
        };
      }
    }
  }, [breakPoint.laptop]);

  const selectHandler = (mode: ThemeTypes) => {
    themeHandler(mode);
    setThemeMode(mode);
  };

  return (
    <div className="relative cursor-pointer !text-impo_Neutral_OnBackground hover:!text-impo_Primary_Primary" ref={ref}>
      <div className="w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-impo_Neutral_Surface">
        <DarkIcon className="w-5 lg:w-6 h-auto pl-[2px] fill-impo_Neutral_OnSurface" />
      </div>

      <div
        style={{ maxHeight: isOpen ? 'none' : '0px' }}
        className="absolute top-6 left-0 lg:-right-10 w-fit min-w-[180px] pt-6 overflow-hidden z-10"
      >
        <div
          onClick={() => setIsOpen(false)}
          className="w-full flex flex-col gap-1 px-2 py-3 border-[1px] border-impo_Grey_200 dark:border-impo_Surface_SurfaceVariant bg-impo_OnBlack rounded-xl"
        >
          <>
            {HEADER_THEME_LIST.map((item, index) => {
              const isSelected = themeMode === item.mode;

              return (
                <div className="w-full h-9 flex items-center" onClick={() => selectHandler(item.mode)} key={index}>
                  <div className="w-full px-2 py-2 flex items-center gap-2 rounded-md hover:bg-impo_Surface_SurfaceVariant hover:opacity-100">
                    <item.Icon
                      className={`
                             w-6
                             h-auto
                             ${isSelected ? 'fill-impo_Primary_Primary' : 'fill-impo_Neutral_OnSurface'}
                           `}
                    />

                    <CustomTypography
                      fontSize="Body_Medium"
                      className={`
                             duration-200
                             ${isSelected ? '!text-impo_Primary_Primary' : '!text-impo_Neutral_OnSurface'}
                           `}
                    >
                      {item.title}
                    </CustomTypography>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default HeaderTheme;

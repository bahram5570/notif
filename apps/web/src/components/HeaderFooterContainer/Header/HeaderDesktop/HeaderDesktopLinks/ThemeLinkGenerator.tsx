import { useEffect, useState } from 'react';

import { getTheme, themeHandler } from '@utils/theme';

import CustomTypography from '@components/ui/CustomTypography';
import { HEADER_THEME_LIST } from '@constants/links.constants';
import { ThemeTypes } from '@theme/types';

import MultiLinkContainer from './MultiLinkContainer';

const ThemeLinkGenerator = () => {
  const [themeMode, setThemeMode] = useState<ThemeTypes>('dark');

  useEffect(() => {
    setThemeMode(getTheme());
  }, []);

  const selectHandler = (mode: ThemeTypes) => {
    themeHandler(mode);
    setThemeMode(mode);
  };

  return (
    <MultiLinkContainer title="حالت نمایش">
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
    </MultiLinkContainer>
  );
};

export default ThemeLinkGenerator;

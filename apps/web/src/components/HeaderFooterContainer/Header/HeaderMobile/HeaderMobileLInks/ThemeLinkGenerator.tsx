import { useEffect, useState } from 'react';

import { getTheme, themeHandler } from '@utils/theme';

import CustomTypography from '@components/ui/CustomTypography';
import { HEADER_THEME_LIST } from '@constants/links.constants';
import { ThemeTypes } from '@theme/types';

import MultiLinkContainer from './MultiLinkContainer';
import { ThemeLinkGeneratorTypes } from './types';

const ThemeLinkGenerator = ({ closeHandler, selectHandler, isSelected }: ThemeLinkGeneratorTypes) => {
  const [themeMode, setThemeMode] = useState<ThemeTypes>('light');

  useEffect(() => {
    setThemeMode(getTheme());
  }, []);

  const themeSelectHandler = (mode: ThemeTypes) => {
    themeHandler(mode);
    setThemeMode(mode);
    closeHandler();
  };

  return (
    <MultiLinkContainer title="حالت نمایش" isSelected={isSelected} selectHandler={selectHandler}>
      {HEADER_THEME_LIST.map((item, index) => {
        const isSelected = themeMode === item.mode;

        return (
          <div className="w-full flex items-center" onClick={() => themeSelectHandler(item.mode)} key={index}>
            <div className="w-full flex items-center gap-2 hover:opacity-100">
              <item.Icon
                className={`
                            w-6 
                            h-auto 
                            ${isSelected ? 'fill-impo_Primary_Primary' : 'fill-impo_Neutral_OnSurface'}
                          `}
              />

              <CustomTypography
                fontSize="Body_Medium"
                className={`${isSelected ? '!text-impo_Primary_Primary' : '!text-impo_Neutral_OnSurface'}`}
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

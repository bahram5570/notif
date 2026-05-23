import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { themeHandler } from '@repo/core/theme/__utils__';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { ThemeTypes } from '@repo/core/theme/types';

import { DARK_MODE_ITEMS_LIST } from './constants';

const DarkModeSettingsModal = () => {
  const router = useCustomRouter();

  const selectHanadler = (v: ThemeTypes) => {
    themeHandler(v);
    router.back();
  };

  return (
    <div className="w-full flex flex-col items-center ga">
      <CustomTypography className="w-full p-2 text-center text-impo_Neutral_OnBackground" fontSize="Title_Small">
        پوسته
      </CustomTypography>

      <div className="w-full flex flex-col" dir="rtl">
        {DARK_MODE_ITEMS_LIST.map((item, index) => (
          <div
            key={index}
            onClick={() => selectHanadler(item.themeType)}
            className={`
                        flex 
                        items-center
                        gap-2 
                        px-2 
                        py-3 
                        border-t-[1px] 
                        ${index === 0 ? 'border-t-impo_Transparent' : 'border-t-impo_Surface_SurfaceVariant'}
                      `}
          >
            <div className="flex justify-center items-center w-12 h-12 border-[1px] border-impo_Surface_SurfaceVariant rounded-full">
              <item.Icon className="w-full h-auto fill-impo_Surface_Outline" />
            </div>

            <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {item.title}
            </CustomTypography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkModeSettingsModal;

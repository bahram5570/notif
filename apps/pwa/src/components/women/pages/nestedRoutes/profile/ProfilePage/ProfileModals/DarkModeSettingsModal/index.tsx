import { themeHandler } from '@repo/core/theme/__utils__';

import Dark_Typography from '@components/ui/Dark_Typography';
import { ThemeTypes } from '@repo/core/theme/types';
import { useRouter } from 'next/navigation';

import { DARK_MODE_ITEMS_LIST } from './constants';

const DarkModeSettingsModal = () => {
  const router = useRouter();

  const selectHanadler = (v: ThemeTypes) => {
    themeHandler(v);
    router.back();
  };

  return (
    <div className="w-full flex flex-col items-center ga">
      <Dark_Typography className="w-full p-2 text-center text-impo_Neutral_OnBackground" fontSize="Title_Small">
        پوسته
      </Dark_Typography>

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
              <item.Icon className="w-full h-auto stroke-impo_Surface_Outline" />
            </div>

            <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {item.title}
            </Dark_Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkModeSettingsModal;

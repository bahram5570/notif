import ImpoIcon from '@assets/icons/impoName.svg';
import TickIcon from '@assets/shared/icons/selectedTick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { LottieJson } from '@lib/LottieJson';

import useMoodTrackerIsLargeScreen from './__hooks__/useMoodTrackerIsLargeScreen';
import useToggleMoodTracker from './__hooks__/useToggleMoodTracker';
import { MOOD_TRACKER_ICONS_LIST } from './constants';
import { StoryMoodTrackerProps } from './types';

const StoryMoodTracker = ({ moodTrackerData }: StoryMoodTrackerProps) => {
  const { selectHandler } = useToggleMoodTracker();
  const { isLargeScreen } = useMoodTrackerIsLargeScreen();

  return (
    <div
      className="
                  absolute 
                  top-0 
                  left-0 
                  right-0 
                  bottom-0 
                  flex 
                  flex-col 
                  pt-[100px] 
                  pb-7 
                  px-4 
                  bg-[url('/assets/images/storyMoodTrackerBg.webp')] 
                  bg-cover 
                  bg-no-repeat
                "
    >
      <div className="w-full flex flex-col items-center" style={{ paddingBottom: isLargeScreen ? 32 : 16 }}>
        <CustomTypography fontSize="Title_Large" className="pb-2 text-impo_Pink_600 dark:text-impo_Pink_300">
          امروز "دوشــــــــنبه"
        </CustomTypography>
        <CustomTypography
          fontSize="Lable_Large"
          className=" text-impo_Surface_InverseSurface dark:text-impo_Surface_InverseOnSurface"
        >
          حال و هوات چطوره؟
        </CustomTypography>
        <CustomTypography
          fontSize="Body_Medium"
          className=" text-impo_Surface_InverseSurface dark:text-impo_Surface_InverseOnSurface"
        >
          از این پایین انتخابش کن
        </CustomTypography>
      </div>

      <div
        className="w-full grid grid-cols-3"
        style={{ columnGap: isLargeScreen ? 48 : 16, rowGap: isLargeScreen ? 48 : 16 }}
      >
        {moodTrackerData.items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2"
              onClick={() => selectHandler(item.isSelected, item.type)}
            >
              <div
                className={`relative w-[72px] h-[72px] p-3 flex items-center justify-center rounded-full border-[2px] ${item.isSelected ? 'bg-impo_Pink_50 dark:bg-impo_Pink_900 border-impo_Primary_Primary' : 'bg-impo_White border-impo_Transparent'}`}
              >
                <LottieJson animationData={MOOD_TRACKER_ICONS_LIST[item.type]} loop={true} />
                {item.isSelected && <TickIcon className="absolute -bottom-1 -right-1 w-8 h-8 z-10" />}
              </div>

              <CustomTypography
                fontSize="Lable_Medium"
                className="text-impo_Surface_InverseSurface dark:text-impo_Surface_InverseOnSurface text-center"
              >
                {item.label}
              </CustomTypography>
            </div>
          );
        })}
      </div>

      <div className="w-full mt-auto flex flex-col items-center gap-2">
        <ImpoIcon className="w-12 h-auto fill-impo_Primary_Primary" />

        {isLargeScreen && (
          <CustomTypography
            fontSize="Body_Medium"
            className="text-impo_Surface_Outline dark:text-impo_Surface_OutlineVariant text-center"
          >
            اگه هر روز حال و هوات رو اینجا ثبت کنی، بعد از 30 روز یک گزارش یک ماهه از مودت رو برات آماده می‌کنیم
          </CustomTypography>
        )}
      </div>
    </div>
  );
};

export default StoryMoodTracker;

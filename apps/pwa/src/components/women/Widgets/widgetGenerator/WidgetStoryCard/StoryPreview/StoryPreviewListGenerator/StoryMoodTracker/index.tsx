import ImpoIcon from '@assets/icons/impoName.svg';
import TickIcon from '@assets/icons/selectedTick.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import useMoodTrackerIsLargeScreen from './__hooks__/useMoodTrackerIsLargeScreen';
import useToggleMoodTracker from './__hooks__/useToggleMoodTracker';
import { MOOD_TRACKER_ICONS_LIST } from './constants';
import { StoryMoodTrackerProps } from './types';

const StoryMoodTracker = ({ moodTrackerData }: StoryMoodTrackerProps) => {
  const { colors } = useTheme();
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
        <Typography scale="Title" size="Large" color="Pink_600" className="pb-2">
          امروز "دوشــــــــنبه"
        </Typography>

        <Typography scale="Lable" size="Large" color="Surface_InverseSurface">
          حال و هوات چطوره؟
        </Typography>

        <Typography scale="Body" size="Medium" color="Surface_InverseSurface">
          از این پایین انتخابش کن
        </Typography>
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
                style={{
                  backgroundColor: item.isSelected ? colors.Pink_50 : colors.White,
                  borderColor: item.isSelected ? colors.PrimaryWoman_Primary : colors.Transparent,
                }}
                className="relative w-[72px] h-[72px] p-3 flex items-center justify-center rounded-full border-[2px]"
              >
                <LottieJson animationData={MOOD_TRACKER_ICONS_LIST[item.type]} loop={true} />
                {item.isSelected && <TickIcon className="absolute -bottom-1 -right-1 w-8 h-8 z-10" />}
              </div>

              <Typography scale="Lable" size="Medium" color="Surface_InverseSurface" textAlign="center">
                {item.label}
              </Typography>
            </div>
          );
        })}
      </div>

      <div className="w-full mt-auto flex flex-col items-center gap-2">
        <ImpoIcon className="w-12 h-auto" style={{ fill: colors.PrimaryWoman_Primary }} />

        {isLargeScreen && (
          <Typography scale="Body" size="Medium" color="Surface_Outline" textAlign="center">
            اگه هر روز حال و هوات رو اینجا ثبت کنی، بعد از 30 روز یک گزارش یک ماهه از مودت رو برات آماده می‌کنیم
          </Typography>
        )}
      </div>
    </div>
  );
};

export default StoryMoodTracker;

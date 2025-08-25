import ChatIcon from '@assets/icons/message-icon.svg';
import BookmarkEmptyIcon from '@assets/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/icons/saveFill.svg';
import StarIcon from '@assets/icons/star-1.svg';
import { textShorter } from '@utils/scripts';

import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import { RoutinCardDetailedPropsType } from './type';

const RoutinCardDetailed = ({ data }: RoutinCardDetailedPropsType) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  const onClick = () => {
    actionHandler(data.button.action);
  };

  return (
    <div onClick={onClick}>
      <div
        style={{ backgroundColor: colors.PrimaryWoman_PrimaryContainer }}
        className="w-full h-14 rounded-t-2xl flex flex-row-reverse items-center px-4 py-3 gap-2  mb-2"
      >
        <CustomImage src="/assets/images/test.webp" />
        <div className="w-full flex flex-col items-end gap-2">
          <Typography scale="Body" size="Large" color="Surface_InverseSurface">
            هنوز شروع نکردی!
          </Typography>
          <div
            className="w-full rounded-full h-1"
            style={{
              backgroundColor: colors.Neutral_Background,
              transform: `rotate(180deg)`,
            }}
          >
            <div
              className=" h-1 rounded-full transition-all duration-300"
              style={{ width: `0%`, backgroundColor: colors.Pink_500 }}
            ></div>
          </div>
        </div>

        <div
          // onClick={clickHandler}
          className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] cursor-pointer"
          id="hintBookMarked"
        >
          {/* {!isBookmarked && ( */}
          <BookmarkEmptyIcon className="w-5 h-auto" style={{ stroke: colors.Surface_InverseSurface }} />
          {/* )} */}
          {/* {isBookmarked && <BookmarkFillIcon className="w-5 h-auto" style={{ fill: colors.Surface_InverseSurface }} />} */}
        </div>
      </div>
      <div className="px-3">
        <div className="flex flex-row-reverse gap-3">
          <div className=" w-14 h-auto basis-28">
            <CustomImage src="/assets/images/routinItem.webp" />
          </div>
          <div className="flex justify-end flex-col items-end gap-2" style={{ borderColor: colors.Red_400 }}>
            <Typography scale="Title" size="Small" color="Neutral_OnBackground">
              {data.title}
            </Typography>

            <Typography scale="Body" size="Small" color="Neutral_OnBackground">
              {textShorter(data.description, 80)}
            </Typography>
          </div>
        </div>

        <div className="w-full h-[1px] my-2" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className=" rounded-xl p-3  grid grid-cols-3 gap-4">
          <div className="flex  items-end justify-end gap-6">
            <div className="flex flex-row items-center justify-center gap-2">
              <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
                23
              </Typography>
              <ChatIcon
                className="w-5 h-5"
                //   style={{
                //     fill: '#FFCF31',
                //     cursor: 'pointer',
                //   }}
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
                4.5
              </Typography>
              <StarIcon
                className="w-5 h-auto"
                style={{
                  fill: '#FFCF31',
                }}
              />
            </div>
          </div>
          <div className="col-span-2">
            <RoutinWriter
              writerName={data.writerName}
              writerIcon={data.writerIcon}
              writerSpeciality={data.writerSpeciality}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinCardDetailed;

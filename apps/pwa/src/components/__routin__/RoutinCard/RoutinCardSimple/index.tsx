import ChatIcon from '@assets/icons/message-icon.svg';
import StarIcon from '@assets/icons/star-1.svg';

import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import { RoutinCardSimplePropsType } from './type';

const RoutinCardSimple = ({ data }: RoutinCardSimplePropsType) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  const onClick = () => {
    actionHandler(data.button.action);
  };

  return (
    <div onClick={onClick}>
      <div className="flex flex-row-reverse gap-3">
        <div className="w-14 h-14 ">
          <CustomImage src="/assets/images/routinItem.webp" />
        </div>
        <div className="flex justify-end flex-col items-end gap-2" style={{ borderColor: colors.Red_400 }}>
          <Typography scale="Title" size="Small" color="Neutral_OnBackground">
            {data.title}
          </Typography>
          <div className="flex w-full items-end justify-end gap-6">
            <div className="flex flex-row items-center justify-center gap-2">
              <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
                {data.commentCount.toString()}
              </Typography>
              <ChatIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
                {data.rateAvg.toFixed().toString()}
              </Typography>
              <StarIcon
                className="w-5 h-auto"
                style={{
                  fill: '#FFCF31',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] my-2" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="flex flex-col items-end rounded-xl p-3 ">
        <RoutinWriter
          writerName={data.writerName}
          writerIcon={data.writerIcon}
          writerSpeciality={data.writerSpeciality}
        />
      </div>
    </div>
  );
};

export default RoutinCardSimple;

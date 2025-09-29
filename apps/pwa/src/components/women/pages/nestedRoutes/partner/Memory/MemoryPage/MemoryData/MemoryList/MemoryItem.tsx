import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import useCalendarDateFormat from '../../../../__hooks__/useCalendarDateFormat';
import { MemoryItemPropsType } from '../../type';

const MemoryItem = (props: MemoryItemPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { currentDate } = useCalendarDateFormat({ date: props.time });

  const memoryImage = props.fileName || '/assets/images/partner.webp';
  const memoryText = textShorter(props.text, 150);

  const onClick = () => {
    pageNavigationHandler({
      id: 'memoryItem',
      showProgressBar: true,
      linkTo: `/protected/memory/memoryDetail?memoryId=${props.id}`,
    });
  };

  return (
    <div onClick={onClick} className="flex flex-col justify-end items-end p-2 gap-2">
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground" textAlign="right" className="w-full">
        {currentDate}
      </Typography>
      <CustomImage src={memoryImage} height={293} className="rounded-2xl w-full" />
      <div className="flex flex-col justify-end items-end">
        <div className="flex gap-2 items-center">
          <Typography scale="Lable" size="Large">
            {props.title}
          </Typography>
          <div className="w-2 h-2 rounded-full" style={{ background: colors.PrimaryWoman_Primary }}></div>
        </div>

        <Typography scale="Body" size="Small">
          {memoryText}
        </Typography>
      </div>
    </div>
  );
};

export default MemoryItem;

import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import useCalendarDateFormat from '../../../../__hooks__/useCalendarDateFormat';
import { MemoryItemPropsType } from '../../type';

const MemoryItem = (props: MemoryItemPropsType) => {
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
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-right w-full">
        {currentDate}
      </Dark_Typography>

      <CustomImage src={memoryImage} height={293} className="rounded-2xl w-full" />
      <div className="flex flex-col justify-end items-end">
        <div className="flex gap-2 items-center">
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground ">
            {props.title}
          </Dark_Typography>

          <div className="w-2 h-2 rounded-full bg-impo_Primary_Primary" />
        </div>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground ">
          {memoryText}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default MemoryItem;

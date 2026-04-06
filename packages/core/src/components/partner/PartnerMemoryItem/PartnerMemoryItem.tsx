import { textShorter } from '../../../utils/scripts';

import { useCalendarDateFormat } from '../../../hooks/useCalendarDateFormat';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { CustomImage } from '../../ui/CustomImage';
import { CustomTypography } from '../../ui/CustomTypography';
import { PartnerMemoryItemPropsType } from './type';

export const PartnerMemoryItem = (props: PartnerMemoryItemPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { currentDate } = useCalendarDateFormat({ date: props.time });

  const memoryImage = props.fileName || '/assets/shared/images/partner.webp';
  const memoryText = textShorter(props.text, 150);

  const onClick = () => {
    pageNavigationHandler({
      id: 'memoryItem',
      showProgressBar: true,
      linkTo: `/protected/memoryDetail?memoryId=${props.id}&partnerName=${props.partName}`,
    });
  };

  return (
    <div onClick={onClick} className="flex flex-col justify-end items-end p-2 gap-2">
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-right w-full">
        {currentDate}
      </CustomTypography>

      <CustomImage src={memoryImage} height={293} className="rounded-2xl w-full" />
      <div className="flex flex-col justify-end items-end">
        <div className="flex gap-2 items-center">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground ">
            {props.title}
          </CustomTypography>

          <div
            className={`w-2 h-2 rounded-full ${props.isMan ? 'bg-impo_PrimaryMan_PrimaryMan' : 'bg-impo_Primary_Primary'} `}
          />
        </div>
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground ">
          {memoryText}
        </CustomTypography>
      </div>
    </div>
  );
};

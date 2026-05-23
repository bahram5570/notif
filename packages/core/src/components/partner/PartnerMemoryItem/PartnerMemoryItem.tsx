import { useMemo } from 'react';

import { textShorter } from '../../../utils/scripts';

import { useCalendarDateFormat } from '../../../hooks/useCalendarDateFormat';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useSystem } from '../../../hooks/useSystem';
import { CustomImage_NEW } from '../../ui/CustomImage_NEW';
import { CustomTypography } from '../../ui/CustomTypography';
import { PartnerMemoryItemPropsType } from './type';

export const PartnerMemoryItem = (props: PartnerMemoryItemPropsType) => {
  const { appName } = useSystem();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { currentDate } = useCalendarDateFormat({ date: props.time });

  const memoryImage = props.fileName || '/assets/shared/images/partner.webp';
  const memoryText = textShorter(props.text, 150);

  const onClick = () => {
    pageNavigationHandler({
      id: 'memoryItem',
      navigationType: 'logo',
      linkTo: `/protected/memoryDetail?memoryId=${props.id}&partnerName=${props.partName}`,
    });
  };

  const bg = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return 'bg-impo_PrimaryMan_PrimaryMan';

      default:
        return 'bg-impo_Primary_Primary';
    }
  }, [appName]);

  return (
    <div onClick={onClick} className="flex flex-col justify-end items-end p-2 gap-2">
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-right w-full">
        {currentDate}
      </CustomTypography>
      <div className="rounded-2xl w-full" style={{ height: 293 }}>
        <CustomImage_NEW src={memoryImage} fill />
      </div>

      <div className="flex flex-col justify-end items-end">
        <div className="flex gap-2 items-center">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground ">
            {props.title}
          </CustomTypography>

          <div className={`w-2 h-2 rounded-full ${bg} `} />
        </div>
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground ">
          {memoryText}
        </CustomTypography>
      </div>
    </div>
  );
};

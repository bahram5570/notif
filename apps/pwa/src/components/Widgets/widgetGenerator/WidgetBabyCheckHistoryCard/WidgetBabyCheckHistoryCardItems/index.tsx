import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { WidgetBabyCheckHistoryCardItemsProps } from './types';

const WidgetBabyCheckHistoryCardItems = (props: WidgetBabyCheckHistoryCardItemsProps) => {
  const clickHandler = (v: number, hasData: boolean) => {
    if (props.onSelect && hasData) {
      props.onSelect(v);
    }
  };

  return (
    <div className="w-full flex flex-col py-4" style={{ gap: props.onSelect ? '16px' : '8px' }}>
      {props.items.map((item, index) => (
        <div
          key={index}
          onClick={() => clickHandler(index, item.details.length > -1)}
          className={`w-full h-[40px] px-2 rounded-lg flex items-center justify-between bg-impo_Surface_SurfaceVariant ${props.isPdfDownloading && 'dark:!bg-impo_Grey_50'}`}
        >
          <div className="flex items-center gap-1">
            <div className="w-[54px] h-[22px] flex items-center justify-center rounded-full bg-impo_Success_Success">
              <CustomTypography fontSize="Lable_Small" className="text-impo_Primary_OnPrimary">
                {item.positive}
              </CustomTypography>
            </div>

            <div className="w-[54px] h-[22px] flex items-center justify-center rounded-full bg-impo_Error_Error">
              <CustomTypography fontSize="Lable_Small" className="text-impo_Primary_OnPrimary">
                {item.negative}
              </CustomTypography>
            </div>
          </div>
          <CustomTypography
            fontSize="Body_Medium"
            className={`text-impo_Neutral_OnBackground ${props.isPdfDownloading && '!text-impo_Black'}`}
          >
            {item.text}
          </CustomTypography>
        </div>
      ))}
    </div>
  );
};

export default WidgetBabyCheckHistoryCardItems;

import { CustomTypography } from '../../../../ui/CustomTypography';
import { WidgetOvulationHistoryCardItemsProps } from './types';

const WidgetOvulationHistoryCardItems = (props: WidgetOvulationHistoryCardItemsProps) => {
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
          onClick={() => clickHandler(index, item.details.length > 0)}
          className="w-full h-[40px] px-2 rounded-lg flex items-center justify-between bg-impo_Surface_SurfaceVariant"
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

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {item.text}
          </CustomTypography>
        </div>
      ))}
    </div>
  );
};

export default WidgetOvulationHistoryCardItems;

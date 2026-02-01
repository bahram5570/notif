import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useSignIcon from '@components/SignGenerator/__hooks__/useSignIcon';
import { ICONS_WIDTH, SIGNS_LIST } from '@components/SignGenerator/constants';

import { WidgetMostRepeatedSignsListProps } from './types';

const WidgetMostRepeatedSignsList = ({ items, isPdfDownloading }: WidgetMostRepeatedSignsListProps) => {
  return (
    <div
      style={{ direction: 'rtl' }}
      className={`w-full grid gap-6 pt-4 ${isPdfDownloading ? 'grid-cols-8' : 'grid-cols-4'}`}
    >
      {items.map((item, index) => {
        const { icon } = useSignIcon({ category: item.category, sign: item.sign });
        const title = SIGNS_LIST?.[item.category]?.signs?.[item.sign]?.title || '';

        return (
          <div className="w-full h-full flex flex-col items-center gap-2" key={index}>
            <div
              className="relative flex items-center justify-center rounded-full border-[1px] border-impo_Neutral_Surface"
              style={{
                width: ICONS_WIDTH,
                height: ICONS_WIDTH,
                minWidth: ICONS_WIDTH,
                minHeight: ICONS_WIDTH,
              }}
            >
              <>{icon}</>

              <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center bg-impo_Primary_Primary">
                <CustomTypography fontSize="Lable_SmallProminet" className="text-impo_White">
                  {item.count.toString()}
                </CustomTypography>
              </div>
            </div>
            <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
              {title}
            </CustomTypography>
          </div>
        );
      })}
    </div>
  );
};

export default WidgetMostRepeatedSignsList;

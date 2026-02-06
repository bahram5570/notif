import SignGenerator from '@components/SignGenerator';
import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import useSelectedSigns from './__hooks__/useSelectedSigns';
import { CategoryGeneratorProps, SelectedSignsHandlerTypes } from './types';

const CategoryGenerator = ({
  updateSingSelectedList,
  selectHandler,
  category,
  title,
  signs,
  info,
}: CategoryGeneratorProps) => {
  const { callEvent } = useAnalytics();
  const { selectedSigns, selectedSignsHandler } = useSelectedSigns(info.initialSelectedSigns);

  const selectSignHandler: SelectedSignsHandlerTypes = (ca, si) => {
    callEvent('SignsChanged');
    selectedSignsHandler(ca, si);

    if (updateSingSelectedList) {
      updateSingSelectedList({ category: ca, sign: si });
    }

    if (selectHandler) {
      selectHandler(ca, si);
    }
  };

  const list = Object.entries(signs);

  return (
    <WidgetCardContainer title={title} className="!px-0 !pt-0">
      <div className="grid grid-cols-4 gap-4" style={{ direction: 'rtl' }}>
        {list.map((item, index) => {
          const key = `WidgetCardContainer-${index}`;

          const sign = Number(item[0]);
          const initialIsSelected = selectedSigns.some((s) => s.category === category && s.sign === sign);

          return (
            <SignGenerator
              key={key}
              sign={sign}
              category={category}
              onSelect={selectSignHandler}
              selectedDate={info.gregorianDate}
              initialIsSelected={initialIsSelected}
            />
          );
        })}
      </div>
    </WidgetCardContainer>
  );
};

export default CategoryGenerator;

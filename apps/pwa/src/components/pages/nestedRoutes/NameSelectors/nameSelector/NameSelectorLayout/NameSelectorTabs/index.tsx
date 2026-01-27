import Dark_Typography from '@components/ui/Dark_Typography';

import useNameSelectorTabs from '../../__hooks__/useNameSelectorTabs';
import { NAME_SELECTOR_TABS_LIST } from '../constants';

const NameSelectorTabs = () => {
  const { tab, tabHandler } = useNameSelectorTabs();

  return (
    <div className="w-[calc(100%_-32px)] mx-auto grid grid-cols-3 border-b-[1px] border-b-impo_Neutral_Surface">
      {NAME_SELECTOR_TABS_LIST.map((item, index) => {
        const isSelected = item.tab === tab;

        const btnStyles: any = isSelected
          ? { fontSize: 'Lable_Large', className: 'text-impo_Neutral_OnBackground' }
          : { fontSize: 'Body_Medium', className: 'text-impo_Surface_Outline' };

        return (
          <div
            key={index}
            onClick={() => tabHandler(item.tab)}
            className={`
                        flex 
                        justify-center 
                        py-3 
                        border-b-[1px]
                        ${isSelected ? 'border-b-impo_Neutral_OnBackground' : 'border-b-impo_Transparent'}
                      `}
          >
            <Dark_Typography {...btnStyles}>{item.title}</Dark_Typography>
          </div>
        );
      })}
    </div>
  );
};

export default NameSelectorTabs;

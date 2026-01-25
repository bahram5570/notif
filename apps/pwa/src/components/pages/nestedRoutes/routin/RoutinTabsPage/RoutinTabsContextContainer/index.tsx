import { ProgramWidgetPageEnum } from '../__hooks__/useConfig/enum';
import ActiveRoutins from './ActiveRoutins';
import CategoriesRoutin from './CategoriesRoutin';
import SavedRoutin from './SavedRoutin';
import SuggestionRoutin from './SuggestionRoutin';
import { RoutinTabsContextContainerPropsType } from './type';

const RoutinTabsContextContainer = ({ activeTab, tabsOrder }: RoutinTabsContextContainerPropsType) => {
  let currentRoutin: JSX.Element | null = null;

  switch (tabsOrder[activeTab]?.tabType) {
    case ProgramWidgetPageEnum.Recommended:
      currentRoutin = <SuggestionRoutin />;
      break;
    case ProgramWidgetPageEnum.Active:
      currentRoutin = <ActiveRoutins />;
      break;
    case ProgramWidgetPageEnum.Categorized:
      currentRoutin = <CategoriesRoutin />;
      break;
    case ProgramWidgetPageEnum.Bookmarked:
      currentRoutin = <SavedRoutin />;
      break;
  }

  return currentRoutin === null ? <></> : <div className="pt-6">{currentRoutin}</div>;
};

export default RoutinTabsContextContainer;

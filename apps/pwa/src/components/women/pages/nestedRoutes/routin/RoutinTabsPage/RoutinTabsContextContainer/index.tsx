import { RoutinTabsEnum } from '../RoutinTabsBtn/enum';
import ActiveRoutins from './ActiveRoutins';
import CategoriesRoutin from './CategoriesRoutin';
import SavedRoutin from './SavedRoutin';
import SuggestionRoutin from './SuggestionRoutin';
import { RoutinTabsContextContainerPropsType } from './type';

const RoutinTabsContextContainer = ({ activeTab }: RoutinTabsContextContainerPropsType) => {
  let currentRoutin: JSX.Element | null = null;

  switch (activeTab) {
    case RoutinTabsEnum.SUGGESTION:
      currentRoutin = <SuggestionRoutin />;
      break;
    case RoutinTabsEnum.ACTIVE_PROGRAMS:
      currentRoutin = <ActiveRoutins />;
      break;
    case RoutinTabsEnum.CATEGORIES:
      currentRoutin = <CategoriesRoutin />;
      break;
    case RoutinTabsEnum.SAVED:
      currentRoutin = <SavedRoutin />;
      break;
  }

  return currentRoutin === null ? <></> : <div className="pt-14">{currentRoutin}</div>;
};

export default RoutinTabsContextContainer;

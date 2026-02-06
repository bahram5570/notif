'use client';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { NameSelectorTabsEnum } from '../NameSelectorLayout/enum';
import useNameSelectorTabs from '../__hooks__/useNameSelectorTabs';
import NameSelectorAll from './NameSelectorAll';
import NameSelectorFavorites from './NameSelectorFavorites';
import NameSelectorSuggestion from './NameSelectorSuggestion';

const NameSelectorPage = () => {
  const { tab } = useNameSelectorTabs();
  useAnalytics({ mountTimer_eventName: 'BabyNameSelectionEnd', pageView_eventName: 'BabyNameSelectionStart' });

  return (
    <>
      {tab === NameSelectorTabsEnum.All && <NameSelectorAll />}
      {tab === NameSelectorTabsEnum.Favorites && <NameSelectorFavorites />}
      {tab === NameSelectorTabsEnum.Suggestion && <NameSelectorSuggestion />}
    </>
  );
};

export default NameSelectorPage;

'use client';

import { useEffect } from 'react';

import useAnalytics from '@hooks/useAnalytics';

import { NameSelectorTabsEnum } from '../NameSelectorLayout/enum';
import useNameSelectorTabs from '../__hooks__/useNameSelectorTabs';
import NameSelectorAll from './NameSelectorAll';
import NameSelectorFavorites from './NameSelectorFavorites';
import NameSelectorSuggestion from './NameSelectorSuggestion';

const NameSelectorPage = () => {
  const { callEvent } = useAnalytics();
  const { tab } = useNameSelectorTabs();

  useEffect(() => {
    callEvent('BabyNameSelectionStart');
  }, []);

  return (
    <>
      {tab === NameSelectorTabsEnum.All && <NameSelectorAll />}
      {tab === NameSelectorTabsEnum.Favorites && <NameSelectorFavorites />}
      {tab === NameSelectorTabsEnum.Suggestion && <NameSelectorSuggestion />}
    </>
  );
};

export default NameSelectorPage;

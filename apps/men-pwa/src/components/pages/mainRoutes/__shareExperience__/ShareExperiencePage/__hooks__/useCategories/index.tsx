import { useEffect, useState } from 'react';

import { SelectedCategoryHandlerTypes } from '@repo/core/components/ShareExperience';

import { CategoriesListTypes } from './types';

const useCategories = (data: CategoriesListTypes) => {
  const [categories, setCategories] = useState<null | CategoriesListTypes>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<null | string>(null);
  const [showAssociation, setShowAssociation] = useState(false);

  useEffect(() => {
    if (data) {
      setCategories(data);

      const initialSelected = data.find((item) => item.isSelected);

      if (initialSelected) {
        setSelectedCategoryId(initialSelected.id);
        setShowAssociation(initialSelected.showAssociation);
      }
    }
  }, [data]);

  const selectedCategoryHandler: SelectedCategoryHandlerTypes = (id, showAssociation) => {
    setSelectedCategoryId(id);
    setShowAssociation(showAssociation);
  };

  return { categories, selectedCategoryId, selectedCategoryHandler, showAssociation };
};

export default useCategories;

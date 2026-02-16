import { useEffect, useState } from 'react';

import { CategoriesListTypes, SelectedCategoryHandlerTypes } from './types';

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

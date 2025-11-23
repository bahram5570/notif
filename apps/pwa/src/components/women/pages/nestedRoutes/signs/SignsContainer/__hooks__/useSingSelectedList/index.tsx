import { useState } from 'react';

import { SingSelectedListType, UpdateSingSelectedListType } from './type';

const useSingSelectedList = () => {
  const [singSelectedList, setSingSelectedList] = useState<SingSelectedListType>([]);

  const updateSingSelectedList: UpdateSingSelectedListType = (newItem) => {
    setSingSelectedList((prev) => {
      const exists = prev.some((item) => item.category === newItem.category && item.sign === newItem.sign);

      return exists
        ? prev.filter((item) => !(item.category === newItem.category && item.sign === newItem.sign))
        : [...prev, newItem];
    });
  };

  return { updateSingSelectedList, singSelectedList };
};

export default useSingSelectedList;

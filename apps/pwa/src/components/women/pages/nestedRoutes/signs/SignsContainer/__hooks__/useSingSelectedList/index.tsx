import { useEffect, useState } from 'react';

import { SingSelectedListType, UpdateSingSelectedListType, UseSingSelectedListPropsType } from './type';

const useSingSelectedList = ({ info }: UseSingSelectedListPropsType) => {
  const [singSelectedList, setSingSelectedList] = useState<SingSelectedListType>([]);
  const [isDisableBtn, setIsDisableBtn] = useState(true);

  const updateSingSelectedList: UpdateSingSelectedListType = (newItem) => {
    setIsDisableBtn(false);
    setSingSelectedList((prev) => {
      const exists = prev.some((item) => item.category === newItem.category && item.sign === newItem.sign);

      return exists
        ? prev.filter((item) => !(item.category === newItem.category && item.sign === newItem.sign))
        : [...prev, newItem];
    });
  };

  useEffect(() => {
    if (info) {
      setSingSelectedList(info.initialSelectedSigns);
    }
  }, [info]);

  return { updateSingSelectedList, singSelectedList, isDisableBtn };
};

export default useSingSelectedList;

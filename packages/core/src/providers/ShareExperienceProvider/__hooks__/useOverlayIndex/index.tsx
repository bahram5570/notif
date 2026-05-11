import { useState } from 'react';

import { MODAL_DEFAULT_Z_INDEX } from '../../../../components/ui/CustomModal/constants';

import { GetZindexHandlerType, IncreaseZIndexHandlerType } from '../../type';

const useOverlayIndex = () => {
  const [modalZIndexes, setModalZIndexes] = useState<Record<string, number>>({});

  const handleIncreaseZIndex: IncreaseZIndexHandlerType = (modalKey, value) => {
    let instanceKey;
    if (value) {
      instanceKey = `${modalKey}:${value}`;
    } else {
      instanceKey = `${modalKey}`;
    }

    setModalZIndexes((prev) => {
      const maxZ = Math.max(MODAL_DEFAULT_Z_INDEX, ...Object.values(prev));
      return { ...prev, [instanceKey]: maxZ + 1 };
    });
  };

  const getZIndex: GetZindexHandlerType = (modalKey, value) => {
    let instanceKey;
    if (value) {
      instanceKey = `${modalKey}:${value}`;
    } else {
      instanceKey = `${modalKey}`;
    }

    return modalZIndexes[instanceKey] ?? MODAL_DEFAULT_Z_INDEX;
  };

  return { handleIncreaseZIndex, getZIndex };
};

export default useOverlayIndex;

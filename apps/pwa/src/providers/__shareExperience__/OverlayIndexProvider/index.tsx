'use client';

import { createContext, useState } from 'react';

import { MODAL_DEFAULT_Z_INDEX } from '@components/ui/CustomModal/constants';

import { GetZindexHandlerType, IncreaseZIndexHandlerType, OverlayIndexContextType } from './type';

export const OverlayIndexContext = createContext<OverlayIndexContextType>({
  increaseZIndex: () => {},
  getZIndex: () => MODAL_DEFAULT_Z_INDEX,
});

const OverlayIndexProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalZIndexes, setModalZIndexes] = useState<Record<string, number>>({});

  // use id for makes uniq key of modalZIndex object

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

  return (
    <OverlayIndexContext.Provider value={{ increaseZIndex: handleIncreaseZIndex, getZIndex }}>
      {children}
    </OverlayIndexContext.Provider>
  );
};

export default OverlayIndexProvider;

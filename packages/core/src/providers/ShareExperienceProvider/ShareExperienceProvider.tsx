'use client';

import { createContext } from 'react';

import { MODAL_DEFAULT_Z_INDEX } from '../../components/ui/CustomModal/constants';

import BlockMessageToast from './BlockMessageToast';
import useOverlayIndex from './__hooks__/useOverlayIndex';
import useShowBlockToast from './__hooks__/useShowBlockToast';
import { ShareExperienceContextType, ShareExperienceProviderProps } from './type';

export const ShareExperienceContext = createContext<ShareExperienceContextType>({
  increaseZIndex: () => {},
  getZIndex: () => MODAL_DEFAULT_Z_INDEX,
  accessOptionHandler: () => {},
});

export const ShareExperienceProvider = ({ children }: ShareExperienceProviderProps) => {
  const { handleIncreaseZIndex, getZIndex } = useOverlayIndex();
  const { accessOption, accessOptionHandler } = useShowBlockToast();

  return (
    <ShareExperienceContext.Provider value={{ increaseZIndex: handleIncreaseZIndex, getZIndex, accessOptionHandler }}>
      {accessOption.isBan && (
        <BlockMessageToast textMessage={accessOption.textMessage} btnText={accessOption.btnText} />
      )}
      {children}
    </ShareExperienceContext.Provider>
  );
};

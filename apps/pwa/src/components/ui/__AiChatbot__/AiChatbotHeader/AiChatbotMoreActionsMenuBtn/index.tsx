import { useState } from 'react';

import DotIcon from '@assets/icons/MenuDots.svg';

import MoreActionsMenu from '../MoreActionsMenu';
import MoreActionMenuModals from '../MoreActionsMenu/MoreActionMenuModals';
import { AiChatbotMoreActionsMenuBtnPropsType } from './type';

const AiChatbotMoreActionsMenuBtn = ({ showSuggestionBtn, disableDeleteBtn }: AiChatbotMoreActionsMenuBtnPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="flex justify-center items-center w-12 h-12 rounded-full glass-card !bg-white/70 dark:!bg-white/5 cursor-pointer shadow-sm"
        onClick={closeHandler}
      >
        <DotIcon className="w-6 h-6 fill-impo_Surface_InverseSurface" />
      </div>
      <MoreActionsMenu
        isOpen={isOpen}
        closeHandler={closeHandler}
        showSuggestionBtn={showSuggestionBtn}
        disableDeleteBtn={disableDeleteBtn}
      />
      <MoreActionMenuModals />
    </>
  );
};

export default AiChatbotMoreActionsMenuBtn;

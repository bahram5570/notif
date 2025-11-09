import { useState } from 'react';

import DotIcon from '@assets/icons/MenuDots.svg';

import useTheme from '@hooks/useTheme';

import MoreActionsMenu from '../MoreActionsMenu';
import MoreActionMenuModals from '../MoreActionsMenu/MoreActionMenuModals';
import { AiChatbotMoreActionsMenuBtnPropsType } from './type';

const AiChatbotMoreActionsMenuBtn = ({
  welcomingType,
  chatId,
  disableDeleteBtn,
}: AiChatbotMoreActionsMenuBtnPropsType) => {
  const { colors } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="flex justify-center items-center w-12 h-12 rounded-full glass-card !bg-white/70 cursor-pointer shadow-sm"
        onClick={closeHandler}
      >
        <DotIcon className="w-6 h-6" style={{ fill: colors.Surface_InverseSurface }} />
      </div>
      <MoreActionsMenu
        isOpen={isOpen}
        closeHandler={closeHandler}
        welcomingType={welcomingType}
        disableDeleteBtn={disableDeleteBtn}
      />
      <MoreActionMenuModals chatId={chatId} />
    </>
  );
};

export default AiChatbotMoreActionsMenuBtn;

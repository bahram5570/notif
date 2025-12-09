import UploadIcon from '@assets/icons/Paperclip-1.svg';

import useTheme from '@hooks/useTheme';

import { AiChatbotUploadImagePropsType } from './type';

const AiChatbotUploadImage = ({ closeHandler, disableBtn }: AiChatbotUploadImagePropsType) => {
  const { colors } = useTheme();

  return (
    <>
      <div
        className={`!w-14 !h-14 rounded-full glass-card !bg-white/60 shadow-sm flex justify-center items-center ${disableBtn && 'pointer-events-none'}`}
        onClick={closeHandler}
      >
        <UploadIcon
          className="w-7 h-auto"
          style={{ stroke: disableBtn ? colors.Surface_OutlineVariant : colors.Surface_InverseSurface }}
        />
      </div>
    </>
  );
};

export default AiChatbotUploadImage;

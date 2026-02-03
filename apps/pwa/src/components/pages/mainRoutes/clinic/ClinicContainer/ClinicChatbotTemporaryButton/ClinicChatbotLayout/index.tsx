import { useEffect, useRef } from 'react';

import CrossIcon from '@assets/icons/plus.svg';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import { ClinicChatbotLayoutPropsType } from './type';

const ClinicChatbotLayout = ({
  onChangeValueHandler,
  handleCloseModal,
  isModalVisible,
  className,
  children,
}: ClinicChatbotLayoutPropsType) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current) {
      const currentHeight = targetRef.current.offsetHeight;
      onChangeValueHandler(currentHeight);
    }
  }, []);

  return (
    <div
      ref={targetRef}
      className={`fixed left-0 right-0 mx-auto z-30 bg-white ${isModalVisible ? 'h-96' : 'h-14'} ${className}`}
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
        bottom: isModalVisible ? FOOTER_HEIGTH + 16 : FOOTER_HEIGTH + 30,
      }}
    >
      <>
        {isModalVisible && (
          <div className="absolute w-10 top-4 left-4 h-10 flex flex-col justify-center items-center cursor-pointer rounded-full bg-impo_White z-50">
            <CrossIcon
              onClick={handleCloseModal}
              className="w-6 h-auto rotate-45 mx-auto stroke-[2px] stroke-impo_Surface_Outline"
            />
          </div>
        )}

        {children}
      </>
    </div>
  );
};

export default ClinicChatbotLayout;

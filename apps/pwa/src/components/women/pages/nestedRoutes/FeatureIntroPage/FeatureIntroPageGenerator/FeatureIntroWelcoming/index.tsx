import { useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import { LottieCanvas } from '@lib/LottieCanvas';

import FeatureIntroBtn from '../FeatureIntroBtn';
import FeatureIntroContainer from '../FeatureIntroContainer';
import { FeatureIntroWelcomingPropsType } from './type';

const FeatureIntroWelcoming = ({ data, goToNext }: FeatureIntroWelcomingPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateBack, setAnimateBack] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setAnimateBack(true);
      }, 100);
    }
  };

  return (
    <FeatureIntroContainer description={data.description} title={data.title}>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="relative  cursor-pointer" onClick={handleClick}>
          {!isOpen && <img src={data.primaryImage} className=" inset-0 w-full h-full object-contain" />}

          {isOpen && (
            <img
              src={data.secondaryImage}
              className=" inset-0 w-full h-full object-contain transition-transform duration-[2000ms] ease-in-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: animateBack
                  ? 'scale(0.95) translateZ(-100px) translateY(10px) rotateX(5deg)'
                  : 'scale(1) translateZ(0) translateY(0) rotateX(0deg)',
                opacity: 1,
              }}
            />
          )}
        </div>
        {!isOpen && (
          <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnSurface">
            {data.primaryText}
          </Dark_Typography>
        )}

        {isOpen && (
          <>
            <div className="px-4 w-full">
              <LottieCanvas
                autoplay={true}
                style={{ maxWidth: MAX_SCREEN_WIDTH }}
                src={data.backgroundAnimation}
                className={`fixed left-0 right-0 bottom-[35%] w-full h-[50dvh]  mx-auto select-none pointer-events-none `}
              />
              <CustomImage src={data.footerContent} className="px-4 transition-opacity duration-700 ease-in-out z-10" />
            </div>
            <FeatureIntroBtn onClick={goToNext} textBtn={data.textBtn} />
          </>
        )}
      </div>
    </FeatureIntroContainer>
  );
};

export default FeatureIntroWelcoming;

import React from 'react';

import chatbotJson from '@assets/lottie/chatbot.json';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LottieJson } from '@lib/LottieJson';

import { WelcomingLayoutPropsType } from './type';

const WelcomingLayout = ({ children, lottieRef }: WelcomingLayoutPropsType) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(360deg, #D7BAFD -15.17%, rgba(194, 211, 251, 0.8) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%) ',
      }}
      className="flex flex-col min-h-[100dvh] overflow-y-auto"
    >
      <>
        <div style={{ paddingTop: HEADER_HEIGHT - 20 }} className="h-full ">
          <div ref={lottieRef} className="flex-1 flex items-center justify-center overflow-hidden">
            <LottieJson animationData={chatbotJson} loop={true} autoPlay={true} width={500} />
          </div>

          {children}
        </div>
      </>
    </div>
  );
};

export default WelcomingLayout;

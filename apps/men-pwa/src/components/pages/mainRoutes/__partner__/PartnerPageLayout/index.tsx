'use client';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import BackgroundImage from './BackgroundImage';
import ProfileButton from './ProfileButton';
import { PartnerPageLayoutPropsType } from './type';

const PartnerPageLayout = ({ children, coverImage, isValid }: PartnerPageLayoutPropsType) => {
  return (
    <div
      className="relative w-full min-h-[100dvh]  pb-[100px] dark:bg-impo_Neutral_Surface"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <BackgroundImage isValid={isValid} coverImage={coverImage} />
      <div className={`relative flex flex-col px-4 ${coverImage ? 'gap-28' : 'gap-16'} z-10`}>
        <>
          <ProfileButton />
          {children}
        </>
      </div>
    </div>
  );
};

export default PartnerPageLayout;

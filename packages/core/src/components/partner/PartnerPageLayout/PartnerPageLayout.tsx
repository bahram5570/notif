'use client';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { ProfileButton } from './ProfileButton';
import { PartnerPageLayoutPropsType } from './type';

export const PartnerPageLayout = ({ children, coverImage, isValid, defaultCoverImage }: PartnerPageLayoutPropsType) => {
  return (
    <div
      className="relative w-full min-h-[100dvh]  pb-[100px] dark:bg-impo_Neutral_Surface"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <BackgroundImage isValid={isValid} coverImage={coverImage} defaultCoverImage={defaultCoverImage} />
      <div className={`relative flex flex-col px-4 ${coverImage ? 'gap-28' : 'gap-20'} z-10`}>
        <>
          <ProfileButton coverImage={coverImage} />
          {children}
        </>
      </div>
    </div>
  );
};

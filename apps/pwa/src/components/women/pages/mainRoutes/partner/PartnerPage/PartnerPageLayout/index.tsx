'use client';

import BackgroundImage from './BackgroundImage';
import ProfileButton from './ProfileButton';
import { PartnerPageLayoutPropsType } from './type';

const PartnerPageLayout = ({ children, coverImage, isValid }: PartnerPageLayoutPropsType) => {
  return (
    <div className="relative w-full min-h-[100dvh] pb-[100px] ">
      <BackgroundImage isValid={isValid} coverImage={coverImage} />
      <div className={`relative flex flex-col ${coverImage ? 'gap-28' : 'gap-16'} z-10`}>
        <>
          <ProfileButton />
          {children}
        </>
      </div>
    </div>
  );
};

export default PartnerPageLayout;

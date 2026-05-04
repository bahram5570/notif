'use client';

import { HEADER_HEIGHT } from '../../../constants/app.constants';
import { MainPageLayout } from '../../MainPageLayout';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
// import { ProfileButton } from './ProfileButton';
import { PartnerPageLayoutPropsType } from './type';

export const PartnerPageLayout = ({ children, coverImage, isValid, defaultCoverImage }: PartnerPageLayoutPropsType) => {
  return (
    <MainPageLayout
      className="dark:bg-impo_Neutral_Surface"
      leftElement1="Profile"
      headerClassName="!bg-[#ffffff50] dark:!bg-[#20202050]"
      paddingTop={0}
      paddingBottom={100}
    >
      {/* <div className="relative w-full    "> */}
      <BackgroundImage isValid={isValid} coverImage={coverImage} defaultCoverImage={defaultCoverImage} />
      <div
        className={`relative flex flex-col px-4 ${coverImage ? 'gap-28' : 'gap-20'} z-10`}
        style={{ paddingTop: HEADER_HEIGHT + 100 }}
      >
        <>
          {/* <ProfileButton coverImage={coverImage} /> */}
          {children}
        </>
      </div>
      {/* </div> */}
    </MainPageLayout>
  );
};

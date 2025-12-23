import LandingHeading from '@components/LandingHeading';

import HomeHeadingContent from './HomeHeadingContent';

const HomeHeading = () => {
  const contentElement = <HomeHeadingContent />;

  return (
    <LandingHeading
      imagePosition="center"
      contentElement={contentElement}
      imageClassName="lg:max-w-[700px]"
      image="/assets/images/headingMain.webp"
      className="!bg-gradient-to-b !from-[#FEF2F5] !to-[#FFDDE6] dark:!bg-impo_Surface_InverseOnSurface dark:!from-inherit dark:!to-inherit"
    />
  );
};

export default HomeHeading;

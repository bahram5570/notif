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
      className="!bg-gradient-to-b !from-[#FEF2F5] !to-[#FFDDE6]"
      backgroundImage=""
    />
  );
};

export default HomeHeading;

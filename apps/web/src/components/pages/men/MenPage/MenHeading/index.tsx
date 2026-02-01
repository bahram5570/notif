import LandingHeading from '@components/LandingHeading';

import MenHeadingContents from './MenHeadingContents';

const MenHeading = () => {
  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={<MenHeadingContents />}
      image="/assets/images/menLandingImage.webp"
      backgroundImage="/assets/images/menLandingBackground.webp"
      className={`dark:!bg-gradient-to-b dark:from-impo_Surface_InverseOnSurface dark:to-impo_Surface_InverseOnSurface`}
    />
  );
};

export default MenHeading;

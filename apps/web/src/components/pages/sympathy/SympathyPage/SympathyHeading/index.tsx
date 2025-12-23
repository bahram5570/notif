import LandingHeading from '@components/LandingHeading';

import SympathyHeadingContents from './SympathyHeadingContents';

const SympathyHeading = () => {
  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={<SympathyHeadingContents />}
      image="/assets/images/sympathyLandingImage.webp"
      backgroundImage="/assets/images/sympathyLandingBackground.webp"
      className="dark:!bg-[url()] dark:!bg-impo_Surface_InverseOnSurface "
    />
  );
};

export default SympathyHeading;

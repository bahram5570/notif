import { LoadingLogo } from '@repo/core/providers/PageNavigationProvider';

const ShareExperienceInitialLoading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0  z-10">
      <LoadingLogo />
    </div>
  );
};

export default ShareExperienceInitialLoading;

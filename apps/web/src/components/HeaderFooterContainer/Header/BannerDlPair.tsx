import dlpairbanner from '@assets/images/dlpairbanner.webp';
import dlpairbannermobile from '@assets/images/dlpairbannermobile.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';

const BannerDlPair = ({ mobile }: { mobile: boolean }) => {
  return (
    <CustomLink href={'/dlpair'}>
      <CustomImage alt="landing" src={mobile ? dlpairbannermobile : dlpairbanner} />
    </CustomLink>
  );
};

export default BannerDlPair;

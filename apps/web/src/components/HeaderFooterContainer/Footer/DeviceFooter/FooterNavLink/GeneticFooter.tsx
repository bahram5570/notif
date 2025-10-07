import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import { FOOTER_HEIGHT } from '@constants/app.constants';

const GeneticFooter = () => {
  return (
    <CustomLink className="fixed left-4 z-20" style={{ bottom: FOOTER_HEIGHT }} href={'landing/geneticMarketing'}>
      <CustomImage src={'/assets/images/geneticMarketing/genetic-footer-logo.webp'} alt="" width={120} height={120} />
    </CustomLink>
  );
};

export default GeneticFooter;

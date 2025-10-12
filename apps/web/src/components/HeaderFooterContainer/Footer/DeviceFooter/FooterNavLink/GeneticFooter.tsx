import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import { FOOTER_HEIGHT } from '@constants/app.constants';
import { usePathname } from 'next/navigation';

const GeneticFooter = () => {
  const pathname = usePathname();
  const list = ['/landing/iran-girl-name', '/landing/iran-boy-name', '/landing/girl-name', '/landing/boy-name'];

  const shouldShowFooter = list.some((item) => pathname?.includes(item));

  if (shouldShowFooter) {
    return <></>;
  }

  return (
    <CustomLink className="fixed right-4 z-20" style={{ bottom: FOOTER_HEIGHT }} href="/landing/geneticMarketing">
      <CustomImage src="/assets/images/geneticMarketing/genetic-footer-logo.webp" alt="" width={120} height={120} />
    </CustomLink>
  );
};

export default GeneticFooter;

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import Link from 'next/link';

import { ArticleGeneratorProps } from './types';

const ArticleGenerator = ({ image, link, title }: ArticleGeneratorProps) => {
  const { callEvent } = useAnalytics();

  return (
    <Link href={link} target="_blank" className="w-[140px] min-w-[140px]" onClick={() => callEvent('Article')}>
      <CustomImage src={image} width={140} height={80} className="rounded-lg" />

      <Dark_Typography className="text-impo_Neutral_OnBackground text-right" fontSize="Lable_Medium">
        {title}
      </Dark_Typography>
    </Link>
  );
};

export default ArticleGenerator;

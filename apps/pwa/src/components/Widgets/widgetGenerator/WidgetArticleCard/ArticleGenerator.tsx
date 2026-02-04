import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useAnalytics from '@hooks/useAnalytics';
import Link from 'next/link';

import { ArticleGeneratorProps } from './types';

const ArticleGenerator = ({ image, link, title }: ArticleGeneratorProps) => {
  const { callEvent } = useAnalytics();

  return (
    <Link href={link} target="_blank" className="w-[140px] min-w-[140px]" onClick={() => callEvent('Article')}>
      <CustomImage src={image} width={140} height={80} className="rounded-lg" />

      <CustomTypography className="text-impo_Neutral_OnBackground text-right" fontSize="Lable_Medium">
        {title}
      </CustomTypography>
    </Link>
  );
};

export default ArticleGenerator;

import Link from 'next/link';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { ArticleGeneratorProps } from './types';

const ArticleGenerator = ({ image, link, title }: ArticleGeneratorProps) => {
  const { callEvent } = useAnalytics();

  return (
    <Link
      href={link}
      target="_blank"
      onClick={() => callEvent('Article')}
      className="flex flex-row-reverse items-start gap-2 w-full"
    >
      <CustomImage src={image} width={88} height={75} objectFit="cover" className="rounded-lg" />

      <CustomTypography className="text-impo_Neutral_OnBackground text-right" fontSize="Lable_Medium">
        {title}
      </CustomTypography>
    </Link>
  );
};

export default ArticleGenerator;

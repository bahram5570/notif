import Link from 'next/link';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { CustomImage_NEW } from '../../../ui/CustomImage_NEW';
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
      <div className="relative w-[88px] h-[75px] rounded-lg overflow-hidden">
        <CustomImage_NEW src={image} fill={true} className="object-cover" />
      </div>

      <CustomTypography className="text-impo_Neutral_OnBackground text-right" fontSize="Lable_Medium">
        {title}
      </CustomTypography>
    </Link>
  );
};

export default ArticleGenerator;

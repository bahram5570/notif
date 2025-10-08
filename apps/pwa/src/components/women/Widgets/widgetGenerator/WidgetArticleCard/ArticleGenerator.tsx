import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useAnalytics from '@hooks/useAnalytics';
import Link from 'next/link';

import { ArticleGeneratorProps } from './types';

const ArticleGenerator = ({ image, link, title }: ArticleGeneratorProps) => {
  const { callEvent } = useAnalytics();

  return (
    <Link href={link} target="_blank" className="w-[140px] min-w-[140px]" onClick={() => callEvent('Article')}>
      <CustomImage src={image} width={140} height={80} className="rounded-lg" />

      <Typography scale="Lable" size="Medium" className="">
        {title}
      </Typography>
    </Link>
  );
};

export default ArticleGenerator;

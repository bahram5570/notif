'use client';

import CustomLink from '@components/ui/CustomLink';
import useUserTracking from '@hooks/useUserTracking';

import { DownloadAppLinkGeneratorTypes } from './types';

const DownloadAppLinkGenerator = ({ href, children, id }: DownloadAppLinkGeneratorTypes) => {
  const { callUserTracking } = useUserTracking();

  return (
    <CustomLink
      id={id}
      href={href}
      target="_blank"
      aria-label={href}
      onClick={() => callUserTracking(id || '')}
      className="w-full h-12 lg:h-[60px] px-2 border-[1px] border-impo_Neutral_Surface rounded-full flex items-center justify-center bg-impo_Surface_SurfaceVariant"
    >
      {children}
    </CustomLink>
  );
};

export default DownloadAppLinkGenerator;

import CustomLink from '@components/ui/CustomLink';
import useUserTracking from '@hooks/useUserTracking';
import { COLORS_LIST } from '@theme/colors';

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
      style={{ backgroundColor: COLORS_LIST.White, borderColor: COLORS_LIST.Neutral_Surface }}
      className="w-full h-12 lg:h-[60px] px-2 border-[1px] rounded-full flex items-center justify-center"
    >
      {children}
    </CustomLink>
  );
};

export default DownloadAppLinkGenerator;

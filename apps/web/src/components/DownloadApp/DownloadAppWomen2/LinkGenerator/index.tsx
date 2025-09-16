'use client';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import useUserTracking from '@hooks/useUserTracking';
import { COLORS_LIST } from '@theme/colors';

import { LinkGeneratorTypes } from './types';

const LinkGenerator = ({ href, directId, title, Icon }: LinkGeneratorTypes) => {
  const { callUserTracking } = useUserTracking();

  return (
    <CustomLink
      href={href}
      id={directId}
      target="_blank"
      onClick={() => callUserTracking(directId)}
      style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
      className="rounded-full w-full h-12 lg:h-[60px] flex items-center justify-center gap-2"
    >
      <CustomTypography fontSize="Title_Small" color="Primary_OnPrimary">
        {title}
      </CustomTypography>

      {Icon}
    </CustomLink>
  );
};

export default LinkGenerator;

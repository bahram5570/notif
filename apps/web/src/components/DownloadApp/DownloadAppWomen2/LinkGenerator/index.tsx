'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';
import useUserTracking from '@hooks/useUserTracking';

import { LinkGeneratorTypes } from './types';

const LinkGenerator = ({ href, directId, title, Icon }: LinkGeneratorTypes) => {
  const { callUserTracking } = useUserTracking();

  return (
    <CustomLink
      href={href}
      id={directId}
      target="_blank"
      onClick={() => callUserTracking(directId)}
      className="rounded-full w-full h-12 lg:h-[60px] flex items-center justify-center gap-2 bg-impo_Black dark:bg-impo_White"
    >
      <CustomTypography fontSize="Title_Small" className="!text-impo_White dark:!text-impo_Black">
        {title}
      </CustomTypography>

      {Icon}
    </CustomLink>
  );
};

export default LinkGenerator;

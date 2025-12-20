import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { DeviceFooterLinkTypes } from './types';

const DeviceFooterLinkGenerator = ({ Icon, href, title, isSelected, id }: DeviceFooterLinkTypes) => {
  const isExternalLink = href.includes('http');

  return (
    <CustomLink
      id={id}
      href={href}
      target={isExternalLink ? '_blank' : '_self'}
      style={{ opacity: isSelected ? '1' : '0.4' }}
      className="w-14 h-14 flex flex-col items-center justify-center"
    >
      {Icon}

      <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>
    </CustomLink>
  );
};

export default DeviceFooterLinkGenerator;

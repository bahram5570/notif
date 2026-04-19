import { useMemo } from 'react';

import ExportIcon from '@assets/shared/icons/Export.svg';

import { useShareNavigator } from '../../hooks/useShareNavigator';
import { useSystem } from '../../hooks/useSystem';
import { CustomTypography } from '../ui/CustomTypography';
import { SharePartnerCodePropsType } from './type';

export const SharePartnerCode = (props: SharePartnerCodePropsType) => {
  const { appName } = useSystem();
  const { handleShare } = useShareNavigator();

  const onClick = () => {
    handleShare(props.shareText || '');
  };

  const theme = useMemo<{ backgroundcolor: string; text: string; stroke: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          backgroundcolor: 'bg-impo_PrimaryMan_PrimaryContainerMan',
          text: 'text-impo_PrimaryMan_PrimaryMan',
          stroke: 'stroke-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          backgroundcolor: 'bg-impo_Primary_PrimaryContainer',
          text: 'text-impo_Primary_Primary',
          stroke: 'stroke-impo_Primary_Primary',
        };
    }
  }, [appName]);

  return (
    <div className="flex justify-center" onClick={onClick}>
      <div
        className={`flex items-center gap-2 px-8 py-1 rounded-full  select-none cursor-pointer w-full h-[48px] ${theme.backgroundcolor}`}
      >
        <CustomTypography fontSize="Body_Large" className={theme.text}>
          {props.text}
        </CustomTypography>

        <ExportIcon className={`w-6 h-6  ${theme.stroke}`} />
      </div>
    </div>
  );
};

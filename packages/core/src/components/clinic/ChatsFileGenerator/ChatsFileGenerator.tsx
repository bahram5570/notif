import { useMemo } from 'react';

import { textShorter } from '../../../utils/scripts';
import DownloadIcon from '@assets/shared/icons/download.svg';
import DownloadedIcon from '@assets/shared/icons/downloaded.svg';

import { useFileDownload } from '../../../hooks/useFileDownload';
import { useSystem } from '../../../hooks/useSystem';
import { CustomSpinner } from '../../ui/CustomSpinner';
import { CustomTypography } from '../../ui/CustomTypography';
import { ChatsFileGeneratorProps } from './types';

export const ChatsFileGenerator = ({ media }: ChatsFileGeneratorProps) => {
  const { downloadHandler, downloadLoading, isDownloaded } = useFileDownload();
  const { appName } = useSystem();

  const theme = useMemo<{ backgroundcolor: string; fill: string; stroke: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          backgroundcolor: 'bg-impo_PrimaryMan_PrimaryMan',
          fill: 'fill-impo_PrimaryMan_OnPrimaryMan',
          stroke: 'stroke-impo_PrimaryMan_OnPrimaryMan',
        };

      default:
        return {
          backgroundcolor: 'bg-impo_Primary_Primary',
          fill: 'fill-impo_Primary_OnPrimary',
          stroke: 'stroke-impo_Primary_OnPrimary',
        };
    }
  }, [appName]);

  const mediaScripts = media.split('.');
  const name = textShorter(mediaScripts[0]) + ' .' + mediaScripts[1];

  return (
    <div className="w-[240px] flex items-center gap-2">
      <div
        className={`relative w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center cursor-pointer  ${theme.backgroundcolor}`}
        onClick={() => downloadHandler(media)}
      >
        {!isDownloaded && !downloadLoading && <DownloadIcon className={`w-6 h-auto  ${theme.fill}`} />}
        {isDownloaded && !downloadLoading && <DownloadedIcon className={`w-6 h-auto  ${theme.stroke}`} />}
        {downloadLoading && <CustomSpinner size={20} className="border-impo_Neutral_Surface" />}
      </div>

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground dark:text-impo_Black">
        {name}
      </CustomTypography>
    </div>
  );
};

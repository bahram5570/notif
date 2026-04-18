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
  const isMan = appName === 'MEN_PWA';

  const mediaScripts = media.split('.');
  const name = textShorter(mediaScripts[0]) + ' .' + mediaScripts[1];

  return (
    <div className="w-[240px] flex items-center gap-2">
      <div
        className={`relative w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center cursor-pointer  ${isMan ? 'bg-impo_PrimaryMan_PrimaryMan' : 'bg-impo_Primary_Primary'}`}
        onClick={() => downloadHandler(media)}
      >
        {!isDownloaded && !downloadLoading && (
          <DownloadIcon
            className={`w-6 h-auto  ${isMan ? 'fill-impo_PrimaryMan_OnPrimaryMan' : 'fill-impo_Primary_OnPrimary'}`}
          />
        )}
        {isDownloaded && !downloadLoading && (
          <DownloadedIcon
            className={`w-6 h-auto  ${isMan ? 'stroke-impo_PrimaryMan_OnPrimaryMan' : 'stroke-impo_Primary_OnPrimary'}`}
          />
        )}
        {downloadLoading && <CustomSpinner size={20} className="border-impo_Neutral_Surface" />}
      </div>

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground dark:text-impo_Black">
        {name}
      </CustomTypography>
    </div>
  );
};

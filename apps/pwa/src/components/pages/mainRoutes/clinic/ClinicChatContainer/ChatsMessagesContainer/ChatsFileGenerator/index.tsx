import DownloadIcon from '@assets/icons/download.svg';
import DownloadedIcon from '@assets/icons/downloaded.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@utils/scripts';

import Dark_Spinner from '@components/ui/Dark_Spinner';
import useFileDownload from '@hooks/useFileDownload';

import { ChatsFileGeneratorProps } from './types';

const ChatsFileGenerator = ({ media }: ChatsFileGeneratorProps) => {
  const { downloadHandler, downloadLoading, isDownloaded } = useFileDownload();

  const mediaScripts = media.split('.');
  const name = textShorter(mediaScripts[0]) + ' .' + mediaScripts[1];

  return (
    <div className="w-[240px] flex items-center gap-2">
      <div
        className="relative w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center cursor-pointer bg-impo_Primary_Primary"
        onClick={() => downloadHandler(media)}
      >
        {!isDownloaded && !downloadLoading && <DownloadIcon className="w-6 h-auto fill-impo_Primary_OnPrimary" />}
        {isDownloaded && !downloadLoading && <DownloadedIcon className="w-6 h-auto stroke-impo_Primary_OnPrimary" />}
        {downloadLoading && <Dark_Spinner size={20} className="border-impo_Neutral_Surface" />}
      </div>

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        {name}
      </CustomTypography>
    </div>
  );
};

export default ChatsFileGenerator;

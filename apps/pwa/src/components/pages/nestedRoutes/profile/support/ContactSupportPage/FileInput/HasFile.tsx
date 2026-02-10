import DownloadedIcon from '@assets/icons/downloaded.svg';
import TrashIcon from '@assets/shared/icons/trash.svg';
import { chatFileTypeDetector } from '@components/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/__utils__';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

import { HasFilePropsType } from './type';

const HasFile = ({ fileName, valuesHandler }: HasFilePropsType) => {
  const { isImageType } = chatFileTypeDetector(fileName);
  const fileNameList = fileName.split('.');
  const fileNameScript = `${textShorter(fileNameList[0])} .${fileNameList[1]}`;

  return (
    <div className="relative w-full flex items-center justify-between gap-5 py-3">
      <div className="flex items-center gap-2">
        {isImageType && <CustomImage src={fileName} width={48} height={48} className="rounded-md" />}
        {!isImageType && (
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-impo_White">
            <DownloadedIcon className="w-7 h-auto fill-impo_Surface_OutlineVariant" />
          </div>
        )}

        <CustomTypography className="break-all text-left text-impo_Neutral_OnBackground" fontSize="Body_Medium">
          {fileNameScript}
        </CustomTypography>
      </div>

      <div
        className="w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center cursor-pointer bg-impo_Error_ErrorContainer"
        onClick={() => valuesHandler({ name: 'fileName', value: '' })}
      >
        <TrashIcon className="w-5 h-auto stroke-impo_Error_Error" />
      </div>
    </div>
  );
};

export default HasFile;

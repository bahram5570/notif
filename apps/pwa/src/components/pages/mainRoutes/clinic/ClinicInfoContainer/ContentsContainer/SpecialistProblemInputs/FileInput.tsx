import { chatFileTypeDetector } from '../../../ClinicChatContainer/ChatsMessagesContainer/__utils__';
import AttachIcon from '@assets/icons/attach.svg';
import DownloadedIcon from '@assets/icons/downloaded.svg';
import TrashIcon from '@assets/icons/trash.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@repo/core/constants/app.contants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { FileInputProps } from './types';

const FileInput = ({ fileName, valuesHandler }: FileInputProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const { isImageType } = chatFileTypeDetector(fileName);
  const fileNameList = fileName.split('.');
  const fileNameScript = `${textShorter(fileNameList[0])} .${fileNameList[1]}`;

  return (
    <div className="w-full px-4 rounded-lg bg-impo_Neutral_Surface">
      {fileName === '' && (
        <div
          className="relative w-full flex items-center justify-center gap-2 py-2 cursor-pointer"
          onClick={() => {
            (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
              pageNavigationHandler({ showProgressBar: false, id: 'specialistProblemModal' }));
          }}
        >
          <>
            <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground pointer-events-none">
              ارسال آزمایش یا گزارش (اختیاری)
            </CustomTypography>

            <AttachIcon className="w-3 h-auto rotate-45 pointer-events-none fill-impo_Neutral_OnBackground" />
          </>
        </div>
      )}

      {fileName !== '' && (
        <div className="relative w-full flex items-center justify-between gap-5 py-3">
          <div className="flex items-center gap-2">
            {isImageType && <CustomImage src={fileName} width={48} height={48} className="rounded-md" />}

            {!isImageType && (
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-impo_White">
                <DownloadedIcon className="w-7 h-auto fill-impo_Surface_OutlineVariant" />
              </div>
            )}

            <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground break-all text-left">
              {fileNameScript}
            </CustomTypography>
          </div>

          <div
            onClick={() => valuesHandler({ name: 'fileName', value: '' })}
            className="w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center bg-impo_Error_ErrorContainer cursor-pointer"
          >
            <TrashIcon className="w-5 h-auto stroke-impo_Black" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FileInput;

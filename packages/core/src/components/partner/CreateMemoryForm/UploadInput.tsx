import { useEffect, useState } from 'react';

import PaperClipIcon from '@assets/shared/icons/paperclip.svg';
import TrashIcon from '@assets/shared/icons/trash.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { UploadInputPropsType } from './type';

export const UploadInput = ({ fileName, uploadImageLoading, onChangeHandler, isMan = false }: UploadInputPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [progress, setProgress] = useState(0);

  const onChange = () => {
    onChangeHandler('', 'fileName');
  };

  const onClick = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: 'UploadMemoryImage',
    }),
      pageNavigationHandler({
        showProgressBar: true,
        id: 'UploadMemoryImage',
      }));
  };

  useEffect(() => {
    if (uploadImageLoading) {
      const intervalId = setInterval(() => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
      }, 500);

      return () => clearInterval(intervalId);
    } else {
      setProgress(100);
    }
  }, [uploadImageLoading]);

  const fileNameList = fileName.split('.');
  const fileNameScript = `${textShorter(fileNameList[0])} .${fileNameList[1]}`;

  return (
    <>
      {fileName !== '' && (
        <div className="flex flex-col gap-3">
          <div className="flex rounded-2xl justify-between items-center px-5 py-3 gap-3 bg-impo_Surface_SurfaceVariant">
            <div className="flex gap-3">
              <CustomImage src={fileName} width={48} height={48} className="rounded-md" />
              <CustomTypography fontSize="Body_Medium" className="break-all text-left text-impo_Neutral_OnBackground">
                {fileNameScript}
              </CustomTypography>
            </div>

            <div
              className="w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center cursor-pointer bg-impo_Error_ErrorContainer"
              onClick={onChange}
            >
              <TrashIcon className="w-5 h-auto stroke-impo_Black" />
            </div>
          </div>
          {uploadImageLoading && (
            <div className="w-full h-1  rounded-full bg-impo_Grey_200">
              <div
                className={`h-full rounded-full ${isMan ? 'bg-impo_PrimaryMan_PrimaryMan' : 'bg-impo_Primary_Primary'} `}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>
      )}

      {fileName === '' && (
        <div className="rounded-2xl py-5 px-2 flex flex-col gap-3 border border-impo_Neutral_Surface">
          <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline w-full text-center">
            میتونی برای خاطره خودت یک عکس آپلود کنی
          </CustomTypography>

          <div className=" p-2 flex  justify-center items-center ">
            <div
              className={`flex  justify-center items-center gap-2 rounded-full pl-6 pr-4 py-3   ${isMan ? 'bg-impo_PrimaryMan_PrimaryContainerMan' : 'bg-impo_Primary_PrimaryContainer'}`}
              onClick={onClick}
            >
              <CustomTypography
                fontSize="Lable_Large"
                className={`${isMan ? ' text-impo_PrimaryMan_PrimaryMan' : 'text-impo_Primary_Primary'}`}
              >
                آپلود عکس
              </CustomTypography>

              <div className="w-5 h-5 flex justify-center items-center">
                <PaperClipIcon
                  className={`w-5 h-5 ${isMan ? ' stroke-impo_PrimaryMan_PrimaryMan' : 'stroke-impo_Primary_Primary'} `}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

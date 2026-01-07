import { useEffect, useState } from 'react';

import PaperClipIcon from '@assets/icons/paperclip.svg';
import TrashIcon from '@assets/icons/trash.svg';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { UploadInputPropsType } from './type';

const UploadInput = ({ fileName, uploadImageLoading, valuesHandler }: UploadInputPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [progress, setProgress] = useState(0);

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
          <div className="flex  rounded-full justify-evenly items-center px-5 py-3 gap-3 bg-impo_Surface_SurfaceVariant">
            <div className="flex gap-3">
              <CustomImage src={fileName} width={48} height={48} className="rounded-md" />
              <Dark_Typography fontSize="Body_Medium" className="break-all text-left text-impo_Neutral_OnBackground">
                {fileNameScript}
              </Dark_Typography>
            </div>

            <div
              className="w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center cursor-pointer bg-impo_Error_ErrorContainer"
              onClick={() => valuesHandler('', 'fileName')}
            >
              <TrashIcon className="w-5 h-auto stroke-impo_Black" />
            </div>
          </div>
          {uploadImageLoading && (
            <div className="w-full h-1  rounded-full bg-impo_Grey_200">
              <div className="h-full rounded-full bg-impo_Primary_Primary" style={{ width: `${progress}%` }}></div>
            </div>
          )}
        </div>
      )}

      {fileName === '' && (
        <div className="rounded-2xl py-5 px-2 flex flex-col gap-3 border border-impo_Neutral_Surface">
          <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_Outline w-full text-center">
            میتونی برای خاطره خودت یک عکس آپلود کنی
          </Dark_Typography>

          <div className=" p-2 flex  justify-center items-center ">
            <div
              className="flex  justify-center items-center gap-2 rounded-full pl-6 pr-4 py-3 bg-impo_Primary_PrimaryContainer dark:bg-impo_Primary_OnPrimaryContainer"
              onClick={onClick}
            >
              <Dark_Typography fontSize="Lable_Large" className="text-impo_Primary_Primary">
                آپلود عکس
              </Dark_Typography>

              <div className="w-5 h-5 flex justify-center items-center">
                <PaperClipIcon className="w-5 h-5 stroke-impo_Primary_Primary" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadInput;

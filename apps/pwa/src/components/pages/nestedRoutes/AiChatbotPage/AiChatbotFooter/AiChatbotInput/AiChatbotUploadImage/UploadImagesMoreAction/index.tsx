import { useEffect } from 'react';

import CameraIcon from '@assets/icons/Camera-1.svg';
import GalleryIcon from '@assets/icons/gallery-1.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import imageCompression from 'browser-image-compression';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import { FileInputTypes } from '@components/ui/FileInputManager/enum';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useAiFileManager from '@hooks/__aichatbot__/useAiFileManager';

import { FileInputHandlerTypes, UploadImagesMoreActionPropsType } from './type';

const UploadImagesMoreAction = ({ closeHandler, isOpen }: UploadImagesMoreActionPropsType) => {
  const { fileDataHandler } = useAiFileManager();

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.height = '100dvh';
      body.style.overflow = 'hidden';
    } else {
      body.style.height = '';
      body.style.overflow = '';
    }
    return () => {
      body.style.height = '';
      body.style.overflow = '';
    };
  }, [isOpen]);

  const handleFileInput: FileInputHandlerTypes = (type) => async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (type === FileInputTypes.CAMERA) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 640,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);

        fileDataHandler({ e, file: compressedFile });
      } catch (error) {
        console.error('Image compression failed:', error);
      }
    } else {
      fileDataHandler({ e });
    }

    closeHandler();
  };

  if (!isOpen) {
    return;
  }

  return (
    <div
      className={` fixed top-0 left-0 right-0 bottom-0 flex justify-center mx-auto ${isOpen ? 'z-40' : 'z-0'}`}
      style={{ background: ' rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(2.5px)', maxWidth: MAX_SCREEN_WIDTH }}
      onClick={closeHandler}
    >
      <div
        className=" p-4 py-6 rounded-3xl w-44  backdrop-blur-[8px] border border-impo_White  shadow-lg absolute right-4 dark:!bg-white/10"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.64)',
          bottom: FOOTER_HEIGTH + 20,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <>
            <input
              type="file"
              accept="image/*"
              id="camera-input"
              className="hidden"
              capture="environment"
              onChange={handleFileInput(FileInputTypes.CAMERA)}
            />
            <label htmlFor="camera-input">
              <div className="flex flex-row-reverse items-center gap-2">
                <div className="flex justify-center items-center rounded-full w-8  h-8 bg-impo_Surface_OutlineVariant">
                  <CameraIcon className="w-[18px] h-[18px] stroke-impo_Surface_Outline" />
                </div>
                <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                  دوربین
                </CustomTypography>
              </div>
            </label>
          </>
          <div className="w-[133px] h-0 rotate-180 my-2  opacity-60 border border-impo_Surface_OutlineVariant" />
          <>
            <input
              type="file"
              accept="image/*"
              id="gallery-input"
              className="hidden"
              onChange={handleFileInput(FileInputTypes.GALLERY)}
            />
            <label htmlFor="gallery-input">
              <div className="flex flex-row-reverse items-center gap-2">
                <div className="flex justify-center items-center rounded-full w-8  h-8 bg-impo_Surface_OutlineVariant">
                  <GalleryIcon className="w-[18px] h-[18px] stroke-impo_Surface_Outline" />
                </div>
                <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                  گالری
                </CustomTypography>
              </div>
            </label>
          </>
        </div>
      </div>
    </div>
  );
};

export default UploadImagesMoreAction;

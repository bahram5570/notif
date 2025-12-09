import { useEffect } from 'react';

import CameraIcon from '@assets/icons/Camera-1.svg';
import GalleryIcon from '@assets/icons/gallery-1.svg';
import imageCompression from 'browser-image-compression';

import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useAiFileManager from '@hooks/__aichatbot__/useAiFileManager';
import useTheme from '@hooks/useTheme';

import { FileInputTypes } from '../../__hooks__/useFileUpload/enum';
import { FileInputHandlerTypes, UploadImagesMoreActionPropsType } from './type';

const UploadImagesMoreAction = ({ closeHandler, isOpen }: UploadImagesMoreActionPropsType) => {
  const { colors } = useTheme();
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
        className=" p-4 py-6 rounded-3xl w-44  backdrop-blur-[8px]  shadow-lg absolute right-4 "
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.64)',
          bottom: FOOTER_HEIGTH + 20,
          border: `1px solid ${colors.White}`,
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
                <div
                  className="flex justify-center items-center rounded-full w-8  h-8"
                  style={{ backgroundColor: colors.Surface_OutlineVariant }}
                >
                  <CameraIcon className="w-[18px] h-[18px]" style={{ stroke: colors.Surface_Outline }} />
                </div>
                <Typography scale="Lable" size="Medium">
                  دوربین
                </Typography>
              </div>
            </label>
          </>
          <div
            className="w-[133px] h-0 rotate-180 my-2  opacity-60"
            style={{ border: `1px solid ${colors.Surface_OutlineVariant}` }}
          />
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
                <div
                  className="flex justify-center items-center rounded-full w-8  h-8"
                  style={{ backgroundColor: colors.Surface_OutlineVariant }}
                >
                  <GalleryIcon className="w-[18px] h-[18px]" style={{ stroke: colors.Surface_Outline }} />
                </div>
                <Typography scale="Lable" size="Medium">
                  گالری
                </Typography>
              </div>
            </label>
          </>
        </div>
      </div>
    </div>
  );
};

export default UploadImagesMoreAction;

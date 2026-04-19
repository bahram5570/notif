import { useMemo, useState } from 'react';

import FileIcon from '@assets/shared/icons/Paper.svg';
import CameraIcon from '@assets/shared/icons/camera.svg';
import GalleryIcon from '@assets/shared/icons/gallery.svg';

// import imageCompression from 'browser-image-compression';

import { useSystem } from '../../hooks/useSystem';
import { CustomSpinner } from '../ui/CustomSpinner';
import { CustomTypography } from '../ui/CustomTypography';
import { FileInputTypes } from './enum';
import { FileInputHandlerTypes, FileInputManagerPropsType } from './type';

export const FileInputManager = ({
  uploadImageLoading,
  fileDataHandler,
  ShowFileInput,
  ShowGalleryInput = true,
  ShowCameraInput = true,
}: FileInputManagerPropsType) => {
  const { appName } = useSystem();
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleFileInput: FileInputHandlerTypes = (type) => async (e) => {
    setActiveInput(type);

    const file = e.target.files?.[0];
    if (!file) return;

    if (type === FileInputTypes.CAMERA) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 640,
        useWebWorker: true,
      };

      try {
        // const compressedFile = await imageCompression(file, options);
        fileDataHandler({ e, file: file });
      } catch (error) {
        console.error('Image compression failed:', error);
      }
    } else {
      fileDataHandler({ e });
    }
  };

  const borderColor = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return 'border-impo_PrimaryMan_PrimaryMan';

      default:
        return 'border-impo_Primary_Primary';
    }
  }, [appName]);

  return (
    <>
      {ShowCameraInput && (
        <div className="px-2 py-3 border-b border-b-impo_Neutral_Surface">
          <input
            type="file"
            accept="image/*"
            id="camera-input"
            className="hidden"
            capture="environment"
            onChange={handleFileInput(FileInputTypes.CAMERA)}
          />

          <label htmlFor="camera-input">
            <div className="flex justify-end items-center gap-2">
              <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
                دوربین
              </CustomTypography>

              <div className="w-12 h-12 border-[1px] border-impo_Surface_SurfaceVariant rounded-full flex justify-center items-center">
                {uploadImageLoading && activeInput === FileInputTypes.CAMERA ? (
                  <CustomSpinner size={20} className={borderColor} />
                ) : (
                  <CameraIcon className="w-10 h-10 stroke-impo_Surface_Outline" />
                )}
              </div>
            </div>
          </label>
        </div>
      )}

      {ShowGalleryInput && (
        <div className={`px-2 py-3  ${ShowFileInput && 'border-b border-b-impo_Neutral_Surface'}`}>
          <input
            type="file"
            accept="image/*"
            id="gallery-input"
            className="hidden"
            onChange={handleFileInput(FileInputTypes.GALLERY)}
          />
          <label htmlFor="gallery-input">
            <div className="flex justify-end items-center gap-2">
              <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
                گالری
              </CustomTypography>

              <div className="w-12 h-12 border-[1px] border-impo_Surface_SurfaceVariant rounded-full flex justify-center items-center">
                {uploadImageLoading && activeInput === FileInputTypes.GALLERY ? (
                  <CustomSpinner size={20} className={borderColor} />
                ) : (
                  <GalleryIcon className="w-5 h-5 stroke-impo_Surface_Outline" />
                )}
              </div>
            </div>
          </label>
        </div>
      )}

      {ShowFileInput && (
        <div className="p-2">
          <input type="file" id="file-input" className="hidden" onChange={handleFileInput(FileInputTypes.FILE)} />
          <label htmlFor="file-input">
            <div className="flex justify-end items-center gap-2">
              <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
                فایل
              </CustomTypography>

              <div className="w-12 h-12 border-[1px] border-impo_Surface_SurfaceVariant rounded-full flex justify-center items-center">
                {uploadImageLoading && activeInput === FileInputTypes.FILE ? (
                  <CustomSpinner size={20} className={borderColor} />
                ) : (
                  <FileIcon className="w-5 h-5 stroke-impo_Surface_Outline" />
                )}
              </div>
            </div>
          </label>
        </div>
      )}
    </>
  );
};

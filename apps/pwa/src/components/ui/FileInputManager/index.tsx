import { useState } from 'react';

import FileIcon from '@assets/icons/Paper.svg';
import CameraIcon from '@assets/icons/camera.svg';
import GalleryIcon from '@assets/icons/gallery.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import imageCompression from 'browser-image-compression';

import Dark_Spinner from '../Dark_Spinner';
import { FileInputTypes } from './enum';
import { FileInputHandlerTypes, FileInputManagerPropsType } from './type';

const FileInputManager = ({
  ShowGalleryInput = true,
  ShowCameraInput = true,
  uploadImageLoading,
  fileDataHandler,
  ShowFileInput,
}: FileInputManagerPropsType) => {
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
        const compressedFile = await imageCompression(file, options);
        fileDataHandler({ e, file: compressedFile });
      } catch (error) {
        console.error('Image compression failed:', error);
      }
    } else {
      fileDataHandler({ e });
    }
  };

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
                  <Dark_Spinner size={20} className="border-impo_Primary_Primary" />
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
                  <Dark_Spinner size={20} className="border-impo_Primary_Primary" />
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
                  <Dark_Spinner size={20} className="border-impo_Primary_Primary" />
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

export default FileInputManager;

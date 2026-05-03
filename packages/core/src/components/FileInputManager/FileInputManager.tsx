import { useMemo, useState } from 'react';

import FileIcon from '@assets/shared/icons/Paper.svg';
import CameraIcon from '@assets/shared/icons/camera.svg';
import GalleryIcon from '@assets/shared/icons/gallery.svg';

import { useSystem } from '../../hooks/useSystem';
import { CustomSpinner } from '../ui/CustomSpinner';
import { CustomTypography } from '../ui/CustomTypography';
import { FileInputTypes } from './enum';
import { FileInputHandlerTypes, FileInputManagerTypes } from './type';

export const FileInputManager = ({
  ShowGalleryInput = true,
  ShowCameraInput = true,
  uploadImageLoading,
  fileDataHandler,
  ShowFileInput,
  maxSize,
}: FileInputManagerTypes) => {
  const { appName } = useSystem();
  const [compressLoading, setCompressLoading] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleFileInput: FileInputHandlerTypes = (type) => async (e) => {
    setActiveInput(type);

    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    setCompressLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`/api/imageConverter?maxSize=${maxSize}`, { method: 'POST', body: formData });
      const blob = await response.blob();

      const compressedFileName = file.name.split('.')[0] + '.webp';
      const compressedFile = new File([blob], compressedFileName, { type: 'image/webp' });

      fileDataHandler({ e, file: compressedFile });
    } catch (error) {
      console.log(error);
    }

    setCompressLoading(false);
  };

  const borderColor = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return 'border-impo_PrimaryMan_PrimaryMan';

      default:
        return 'border-impo_Primary_Primary';
    }
  }, [appName]);

  const isLoading = compressLoading || uploadImageLoading;

  return (
    <>
      {ShowCameraInput && (
        <div className="px-2 py-3 border-b border-b-impo_Neutral_Surface">
          <input
            type="file"
            accept="image/*"
            id="camera-input"
            capture="environment"
            onChange={handleFileInput(FileInputTypes.CAMERA)}
            style={{ opacity: 0, position: 'absolute', width: 0, height: 0 }}
          />

          <label htmlFor="camera-input">
            <div className="flex justify-end items-center gap-2">
              <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
                دوربین
              </CustomTypography>

              <div className="w-12 h-12 border-[1px] border-impo_Surface_SurfaceVariant rounded-full flex justify-center items-center">
                {isLoading && activeInput === FileInputTypes.CAMERA ? (
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
                {isLoading && activeInput === FileInputTypes.GALLERY ? (
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
                {isLoading && activeInput === FileInputTypes.FILE ? (
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

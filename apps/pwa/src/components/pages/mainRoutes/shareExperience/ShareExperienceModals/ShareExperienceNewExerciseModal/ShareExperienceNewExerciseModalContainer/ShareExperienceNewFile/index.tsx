import UploadIcon from '@assets/icons/gallery.svg';
import CrossIcon from '@assets/shared/icons/plus.svg';
import { SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceNewFileProps } from './types';

const ShareExperienceNewFile = ({
  uploadImageLoading,
  removeFileHandler,
  fileDataHandler,
  onChangeBtnTop,
  imageFile,
}: ShareExperienceNewFileProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { increaseZIndex } = useOverlayIndex();
  // const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (onChangeBtnTop) {
  //     onChangeBtnTop();
  //     fileDataHandler({ e });
  //   }
  // };

  const clickHandler = () => {
    if (onChangeBtnTop) {
      onChangeBtnTop();

      increaseZIndex(SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME);
      newQueryParamsHandler({ [SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME]: 'true' });
      // fileDataHandler({ e });
    }
  };

  return (
    <>
      {imageFile && (
        <div className="relative">
          <CustomImage src={imageFile} className="rounded-xl" />

          {!uploadImageLoading && (
            <div
              onClick={removeFileHandler}
              className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center bg-impo_Neutral_Surface"
            >
              <CrossIcon className="w-7 h-auto rotate-45 stroke-impo_Neutral_OnBackground" />
            </div>
          )}

          {uploadImageLoading && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-md rounded-xl">
              <CustomSpinner className="border-impo_Neutral_Surface" />
            </div>
          )}
        </div>
      )}

      {!imageFile && (
        <div className="relative ml-auto" onClick={clickHandler}>
          <UploadIcon className="w-5 h-auto stroke-impo_Surface_Outline" />

          {/* <input
            type="file"
            onChange={clickHandler}
            className="absolute top-0 left-0 right-0 bottom-0 opacity-0 select-none"
          /> */}
        </div>
      )}
    </>
  );
};

export default ShareExperienceNewFile;

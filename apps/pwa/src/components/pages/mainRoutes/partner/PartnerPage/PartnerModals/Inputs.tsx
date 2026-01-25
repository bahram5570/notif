import TrashIcon from '@assets/icons/trash.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import FileInputManager from '@components/ui/FileInputManager';

import { InputsPropsType } from './type';

const Inputs = ({ fileDataHandler, canDeleteImage, deleteHandler, uploadImageLoading }: InputsPropsType) => {
  return (
    <div className="py-5">
      <Dark_Typography fontSize="Title_Small" className="w-full p-2 text-center text-impo_Neutral_OnBackground">
        عکس خود را انتخاب کنید
      </Dark_Typography>

      <div className="flex flex-col gap-3">
        <FileInputManager
          ShowFileInput={false}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />

        {canDeleteImage && JSON.parse(canDeleteImage) && (
          <div
            className="flex justify-end items-center gap-2 p-2 border-t border-t-impo_Neutral_Surface"
            onClick={deleteHandler}
          >
            <Dark_Typography className="text-impo_Error_Error" fontSize="Body_Large">
              حذف عکس
            </Dark_Typography>
            <div className="w-14 h-14 rounded-full flex justify-center items-center border border-impo_Surface_SurfaceVariant">
              <TrashIcon className="w-7 h-7 stroke-impo_Error_Error" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputs;

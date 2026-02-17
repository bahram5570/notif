import FileInputManager from '@components/ui/FileInputManager';

import { UploadFileModalContainerPropsType } from './type';

const UploadFileModalContainer = ({ fileDataHandler, uploadImageLoading }: UploadFileModalContainerPropsType) => {
  return (
    <div className="flex flex-col">
      <FileInputManager
        ShowFileInput={false}
        fileDataHandler={fileDataHandler}
        uploadImageLoading={uploadImageLoading}
      />
    </div>
  );
};

export default UploadFileModalContainer;

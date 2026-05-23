import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useFileUpload } from '@repo/core/hooks/useFileUpload';

import { SupportChatModalPropsType } from './type';

const SupportChatModal = ({ valuesHandler }: SupportChatModalPropsType) => {
  const router = useCustomRouter();

  const successHandler = (v: string) => {
    valuesHandler({ name: 'fileName', value: v });
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => successHandler(v),
    method: 'PUT',
    api: 'file/private/',
  });

  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager
          ShowFileInput={true}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />
      </div>
    </CustomModal>
  );
};

export default SupportChatModal;

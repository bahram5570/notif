import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import useFileUpload from '@hooks/useFileUpload';
import { useRouter } from 'next/navigation';

import { SupportChatModalPropsType } from './type';

const SupportChatModal = ({ valuesHandler }: SupportChatModalPropsType) => {
  const router = useRouter();

  const successHandler = (v: string) => {
    valuesHandler({ name: 'fileName', value: v });
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => successHandler(v),
  });

  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager
          maxSize={1024}
          ShowFileInput={true}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />
      </div>
    </CustomModal>
  );
};

export default SupportChatModal;

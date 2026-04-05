import { useRouter } from 'next/navigation';

import { CustomTextareaInput } from '../../ui/CustomTextareaInput';
import { UploadInput } from './UploadInput';
import { UploadModal } from './UploadModal/UploadModal';
import useFileUpload from './__hooks__/useFileUpload';
import { CreateMemoryFormPropsType } from './type';

export const CreateMemoryForm = ({ inputValue, onChangeHandler, isMan }: CreateMemoryFormPropsType) => {
  const router = useRouter();
  const successHandler = (v: string) => {
    onChangeHandler(v, 'fileName');
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v) => successHandler(v),
    api: 'file/private/',
    method: 'PUT',
  });

  return (
    <>
      <UploadInput
        onChangeHandler={onChangeHandler}
        fileName={inputValue.fileName}
        uploadImageLoading={uploadImageLoading}
        isMan={isMan}
      />
      <CustomTextareaInput
        rows={1}
        placeholder="اسم خاطره‌ت رو اینجا بنویس"
        value={inputValue.title}
        onChangeHandler={onChangeHandler}
        name="title"
        maxLength={400}
      />
      <CustomTextareaInput
        rows={4}
        placeholder="متن خاطره‌ت رو اینجا بنویس"
        value={inputValue.text}
        onChangeHandler={onChangeHandler}
        name="text"
        maxLength={400}
      />

      <UploadModal fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} isMan={isMan} />
    </>
  );
};

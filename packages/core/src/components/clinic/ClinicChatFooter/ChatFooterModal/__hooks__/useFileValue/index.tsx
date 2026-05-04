import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useCustomReactQuery } from '../../../../../../hooks/useCustomReactQuery';
import { useFileUpload } from '../../../../../../hooks/useFileUpload';
import { FileDataHandlerTypes } from '../../../../../../hooks/useFileUpload/type';
import { usePwaApi } from '../../../../../../hooks/usePwaApi';
import useUpdateChatReactQuery from '../../../ChatFooterMessageInput/__hooks__/useUpdateChatReactQuery';

const useFileValue = (ticketId: string) => {
  const [inputFileResetKey, setInputFileResetKey] = useState(Math.random());
  const [uploadingFileType, setUploadingFileType] = useState('');
  const [storedFileName, setStoredFileName] = useState('');
  const { upgateHandler } = useUpdateChatReactQuery();
  const { updateQuery } = useCustomReactQuery();
  const router = useRouter();

  const successHandler = () => {
    upgateHandler({ text: '', fileName: storedFileName });
    setUploadingFileType('');
  };

  const { callApi, isLoading: fileLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: `advice/ticket/${ticketId}`,
  });

  const { fileDataHandler: uploadHandler, uploadImageLoading } = useFileUpload({
    onError: () => {
      setUploadingFileType('');
    },
    onSuccess: (v) => {
      router.back();
      callApi({ text: '', fileName: v });
      setStoredFileName(v);
    },
    api: 'doctor/file',
  });

  useEffect(() => {
    const isLoading = uploadImageLoading || fileLoading;
    updateQuery({ queryKey: ['chatFileLoading'], payload: { isLoading, uploadingFileType } });

    if (!isLoading) {
      setInputFileResetKey(Math.random());
      setStoredFileName('');
    }
  }, [uploadImageLoading, fileLoading]);

  const fileDataHandler: FileDataHandlerTypes = ({ e }) => {
    const fileName = e.target.files?.[0]?.name;

    if (fileName) {
      setUploadingFileType(fileName);
    }

    uploadHandler({ e });
  };

  return { fileDataHandler, inputFileResetKey, uploadImageLoading };
};

export default useFileValue;

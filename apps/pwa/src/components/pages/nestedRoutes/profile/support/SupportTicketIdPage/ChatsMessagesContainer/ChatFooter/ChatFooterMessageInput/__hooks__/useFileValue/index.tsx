import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { FileDataHandlerTypes, useFileUpload } from '@repo/core/hooks/useFileUpload';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useParams } from 'next/navigation';

import useUpdateChatReactQuery from '../useUpdateChatReactQuery';

const useFileValue = () => {
  const [uploadingFileType, setUploadingFileType] = useState('');
  const [storedFileName, setStoredFileName] = useState('');
  const { upgateHandler } = useUpdateChatReactQuery();
  const { updateQuery } = useCustomReactQuery();
  const router = useCustomRouter();

  const ticketId = useParams()?.ticketId;

  const successHandler = () => {
    upgateHandler({ text: '', fileName: storedFileName });
    setUploadingFileType('');
    router.back();
  };

  const { callApi, isLoading: fileLoading } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `support/ticket/${ticketId}`,
  });

  const { fileDataHandler: uploadHandler, uploadImageLoading } = useFileUpload({
    onError: () => {
      setUploadingFileType('');
    },
    onSuccess: (v) => {
      callApi({ text: '', fileName: v });
      setStoredFileName(v);
    },
    api: 'file/private/',
    method: 'PUT',
  });

  useEffect(() => {
    const isLoading = uploadImageLoading || fileLoading;
    updateQuery({ queryKey: ['chatFileLoading'], payload: { isLoading, uploadingFileType } });

    if (!isLoading) {
      setStoredFileName('');
    }
  }, [uploadImageLoading, fileLoading]);

  const fileDataHandler: FileDataHandlerTypes = ({ file }) => {
    const fileName = file?.name;
    if (fileName) {
      setUploadingFileType(fileName);
    }

    uploadHandler({ file });
  };

  return { fileDataHandler, uploadImageLoading };
};

export default useFileValue;

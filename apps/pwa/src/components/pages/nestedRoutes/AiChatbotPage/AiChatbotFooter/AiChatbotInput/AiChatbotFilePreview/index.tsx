import useOperatingSystem from '@hooks/useOperatingSystem';

import FilePreview from './FilePreview';
import { AiChatbotFilePreviewPropsType } from './type';

const AiChatbotFilePreview = ({ files, removeFileHandler, retryUploadHandler }: AiChatbotFilePreviewPropsType) => {
  const { operatingSystem } = useOperatingSystem();

  const isWindows = operatingSystem === 'windows';
  return (
    <div className={`flex w-full overflow-x-auto overflow-y-hidden gap-1 px-2  scrollbar  ${!isWindows && 'hide'}`}>
      {files.map((file, index) => {
        return (
          <div key={index} className="flex-shrink-0">
            <FilePreview {...file} removeFileHandler={removeFileHandler} retryUploadHandler={retryUploadHandler} />
          </div>
        );
      })}
    </div>
  );
};

export default AiChatbotFilePreview;

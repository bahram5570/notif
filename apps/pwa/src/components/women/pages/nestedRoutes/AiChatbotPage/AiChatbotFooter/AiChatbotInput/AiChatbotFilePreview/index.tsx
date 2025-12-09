import useAiFileManager from '@hooks/__aichatbot__/useAiFileManager';
import useOperatingSystem from '@hooks/useOperatingSystem';

import FilePreview from './FilePreview';

const AiChatbotFilePreview = () => {
  const { operatingSystem } = useOperatingSystem();
  const { files, removeFileHandler, retryUploadHandler } = useAiFileManager();

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

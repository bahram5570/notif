import { useSystem } from '@repo/core/hooks/useSystem';

import FilePreview from './FilePreview';
import { AiChatbotFilePreviewPropsType } from './type';

const AiChatbotFilePreview = ({ files, removeFileHandler, retryUploadHandler }: AiChatbotFilePreviewPropsType) => {
  const { operatingSystem } = useSystem();

  return (
    <div
      className={`
                  flex 
                  w-full 
                  overflow-x-auto 
                  overflow-y-hidden 
                  gap-1 
                  px-2 
                  scrollbar ${operatingSystem !== 'windows' && 'hide'}
                `}
    >
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

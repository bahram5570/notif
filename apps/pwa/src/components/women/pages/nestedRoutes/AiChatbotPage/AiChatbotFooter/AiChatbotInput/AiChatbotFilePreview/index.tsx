import FilePreview from './FilePreview';
import { AiChatbotFilePreviewPropsType } from './type';

const AiChatbotFilePreview = ({ files, removeFileHandler }: AiChatbotFilePreviewPropsType) => {
  return (
    <div className="flex gap-1 w-full h-full px-2">
      {files.map((file, index) => {
        return <FilePreview {...file} key={index} removeFileHandler={removeFileHandler} />;
      })}
    </div>
  );
};

export default AiChatbotFilePreview;

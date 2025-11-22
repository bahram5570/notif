import FilePreview from './FilePreview';
import { AiChatbotFilePreviewPropsType } from './type';

const AiChatbotFilePreview = ({ files }: AiChatbotFilePreviewPropsType) => {
  return (
    <div className="flex gap-1 w-full h-full">
      {files.map((file, index) => {
        return <FilePreview {...file} key={index} />;
      })}
    </div>
  );
};

export default AiChatbotFilePreview;

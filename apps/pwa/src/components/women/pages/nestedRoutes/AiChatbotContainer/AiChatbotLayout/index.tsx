import AiChatbotHeader from './AiChatbotHeader';
import { AiChatbotLayoutPropsType } from './type';

const AiChatbotLayout = ({ children, chatTitle }: AiChatbotLayoutPropsType) => {
  return (
    <div
      className="relative w-full  overflow-hidden"
      // style={{
      //   background:
      //     'linear-gradient(360deg, #D7BAFD -15.17%, rgba(194, 211, 251, 0.8) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%)',
      // }}
    >
      <div
        className="absolute rounded-full z-0"
        style={{
          width: '322.88px',
          height: '322.88px',
          left: 'calc(50% - 322.88px / 2 - 55.57px)',
          top: '-0.14px',
          background: '#F24F7A',
          filter: 'blur(250px)',
        }}
      />
      <div
        className="absolute rounded-full z-0"
        style={{
          width: '218.53px',
          height: '218.53px',
          left: 'calc(50% - 218.53px / 2 + 140.76px)',
          top: '52.03px',
          background: '#3B82F6',
          filter: 'blur(150px)',
        }}
      />
      <>
        {chatTitle && <AiChatbotHeader chatTitle={chatTitle} />}
        {children}
      </>
    </div>
  );
};

export default AiChatbotLayout;

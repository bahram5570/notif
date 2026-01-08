import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

const AiChatbotMessageListLayout = ({ children, imageType }: { children: React.ReactNode; imageType: boolean }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(360deg, rgba(215, 186, 253, 0.2) -15.17%, rgba(194, 211, 251, 0.3) 30.1%, rgba(199, 234, 241, 0.25) 75.9%, rgba(230, 240, 232, 0.25) 104.51%)',
      }}
      className="min-h-[100dvh] dark:!bg-none"
    >
      <div style={{ paddingTop: imageType ? HEADER_HEIGHT + 30 : HEADER_HEIGHT }} className="px-4 flex flex-col gap-3">
        <div className={`flex justify-end flex-col gap-4`} style={{ paddingBottom: HEADER_HEIGHT * 2 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AiChatbotMessageListLayout;

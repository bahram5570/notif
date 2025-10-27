import AiIcon from '@assets/icons/aibg.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotInput from './AiChatbotInput';

const questions = ['تاریخ تخمک گذاری بعدی', 'معرفی کن', 'من کی پریود میشم؟', 'کی رابطه جنسی داشته باشم؟'];

const ChatbotMessageWelcoming = ({ top }: { top: number }) => {
  return (
    <div className=" absolute w-full " style={{ top }}>
      <div className=" relative  w-full h-full">
        <AiIcon className="w-full " />
        <div className="px-6 flex flex-col gap-14  absolute top-10  pt-9 ">
          <div className=" flex flex-col gap-2 justify-center items-center px-2">
            <Typography scale="Title" size="Large">
              سلام، من مونس‌ام!
            </Typography>
            <Typography scale="Body" size="Medium" textAlign="justify">
              شما می‌تونید عکس آزمایش‌هاتون رو برای من بفرستید و من نتایج رو براتون تحلیل می‌کنم و راهنمایی‌های لازم رو
              می‌دم.
            </Typography>
          </div>
          <div className=" flex  flex-wrap justify-center items-center   gap-2">
            {questions.map((question, index) => {
              return (
                <div
                  className="glass-card w-fit px-4 py-[10px] flex justify-center items-center rounded-full"
                  key={index}
                >
                  <Typography size="SmallProminet" scale="Lable" color="Surface_InverseSurface">
                    {question}
                  </Typography>
                </div>
              );
            })}
          </div>
          <div className=" fixed bottom-0 left-0 right-0 mx-auto" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
            <div className="py-4 backdrop-blur-[8px]">
              <AiChatbotInput hintPromptText="هرچی دوست داری بپرس..." />

              <div className="flex justify-center items-center">
                <Typography scale="Lable" size="Small" color="Surface_OnSurfaceVariant">
                  مونس هم گاهی اشتباه می‌کنه! حتماً جواب‌ها رو چک کن.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMessageWelcoming;

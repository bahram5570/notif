import Icon from '@assets/icons/Generate B.svg';
import chatbotJson from '@assets/lottie/chatbot.json';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import { LottieJson } from '@lib/LottieJson';

import LiquidGlassCard from '../../AiChatbotContainer/AiChatbotMessageList/LiquidGlassCard';
import AiChatbotHeader from '../AiChatbotHeader';

const WelcomingContainer = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(360deg, #D7BAFD -15.17%, rgba(194, 211, 251, 0.8) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%)',
      }}
      className="h-dvh"
    >
      <>
        <AiChatbotHeader />
        <div style={{ paddingTop: HEADER_HEIGHT }}>
          <LottieJson animationData={chatbotJson} loop={true} autoPlay={true} />

          <LiquidGlassCard
          // className=" fixed mx-auto top-[px] h-[416px] left-0 right-0 bottom-0 px-4 liquid-glass-custom"
          // style={{ maxWidth: MAX_SCREEN_WIDTH }}
          >
            <div className="px-4 flex flex-col gap-14">
              <div className=" flex flex-col gap-3">
                <div className="flex flex-col justify-end items-end gap-1">
                  <Typography scale="Title" size="Large">
                    مونس؛
                  </Typography>
                  <div className="flex flex-row-reverse gap-1">
                    <Typography scale="Title" size="Large">
                      همراه هوش مصنوعی
                    </Typography>
                    <Icon />
                  </div>
                  <Typography scale="Title" size="Large">
                    در مسیر اقدام به بارداری
                  </Typography>
                </div>
                <Typography scale="Body" size="Medium" textAlign="justify">
                  مونس، همراه هوشمند و دلسوز تو در مسیر اقدام به بارداری است. او با تحلیل دقیق داده‌های چرخه‌ت، بهترین
                  مشاوره‌های تغذیه، سبک زندگی و آمادگی‌های روحی را برای افزایش شانس باروری ارائه می‌دهد. برای سؤال‌های
                  روزمره‌ات همیشه در دسترس است تا این مسیر برات راحت‌تر بشه.
                </Typography>
              </div>

              <Button
                variant="fill"
                size="medium"
                color="primary"
                onClick={() => {}}
                fullWidth
                // isLoading={isLoading}
                // isDisable={!valuesProps.rate}
              >
                <Typography scale="Lable" size="Large" color="White">
                  با مونس صحبت کن! ✨
                </Typography>
              </Button>
            </div>
          </LiquidGlassCard>
        </div>
      </>
    </div>
  );
};

export default WelcomingContainer;

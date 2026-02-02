import CustomImage from '@components/ui/CustomImage';
import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import TextBlock from './TextBlock';
import { UserMessagePropsType } from './type';

const UserMessage = (props: UserMessagePropsType) => {
  const { operatingSystem } = useOperatingSystem();

  const isMultiLine = props.text.length > 80;
  const hasMedia = props.media.length > 0;
  const hasText = props.text.trim() !== '';

  const isWindows = operatingSystem === 'windows';

  return (
    <div className="flex flex-col items-end mt-8 gap-3">
      {hasMedia && (
        <div
          className={`flex flex-row-reverse w-full overflow-x-auto overflow-y-hidden gap-1 px-2  scrollbar  ${!isWindows && 'hide'}`}
        >
          {props.media.map((image, index) => {
            return (
              <CustomImage
                src={image}
                width={120}
                height={120}
                className=" rounded-2xl"
                objectFit="cover"
                hasPreviewImage
                key={index}
              />
            );
          })}
        </div>
      )}

      {hasText && (
        <div
          className="!bg-white/50  ml-auto glass-card max-w-72  py-4 flex justify-end items-end border border-impo_Grey_300"
          style={{
            borderRadius: isMultiLine ? '32px 32px 4px 32px' : '100px 100px 4px 100px',
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
          }}
        >
          <TextBlock
            text={props.text}
            isAnimated={props.isAnswered}
            className=" px-4 text-start"
            style={{ direction: 'rtl' }}
          />
        </div>
      )}
    </div>
  );
};

export default UserMessage;

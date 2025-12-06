import CustomImage from '@components/ui/CustomImage';
import useTheme from '@hooks/useTheme';

import TextBlock from './TextBlock';
import { UserMessagePropsType } from './type';

const UserMessage = (props: UserMessagePropsType) => {
  const { colors } = useTheme();
  const isMultiLine = props.text.length > 80;
  const hasMedia = props.media.length > 0;
  const hasText = props.text.trim() !== '';

  return (
    <div className="flex flex-col items-end mt-8 gap-2">
      {hasMedia && (
        <div className="flex flex-row gap-2">
          {props.media.map((image, index) => {
            return (
              <CustomImage
                src={image}
                width={120}
                height={120}
                className=" rounded-2xl !object-contain"
                hasPreviewImage
                key={index}
              />
            );
          })}
        </div>
      )}

      {hasText && (
        <div
          className="!bg-white/50 ml-auto glass-card max-w-72  py-4 flex justify-end items-end"
          style={{
            border: `0.25px solid ${colors.Grey_300}`,
            borderRadius: isMultiLine ? '100px 32px 4px 100px' : '100px 100px 4px 100px',
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

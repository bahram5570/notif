import useTheme from '@hooks/useTheme';

import TextBlock from './TextBlock';
import { UserMessagePropsType } from './type';

const UserMessage = (props: UserMessagePropsType) => {
  const { colors } = useTheme();
  const isMultiLine = props.text.length > 80;

  return (
    <div
      className="!bg-white/50 ml-auto glass-card max-w-fit mt-8 py-4"
      style={{
        border: `0.25px solid ${colors.Grey_300}`,
        borderRadius: isMultiLine ? '100px 32px 4px 100px' : '100px 100px 4px 100px',
      }}
    >
      <TextBlock text={props.text} isAnimated={props.isAnswered} className=" px-4" />
    </div>
  );
};

export default UserMessage;

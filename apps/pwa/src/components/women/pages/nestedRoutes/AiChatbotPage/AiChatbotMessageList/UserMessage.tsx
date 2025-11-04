import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { UserMessagePropsType } from './type';

const UserMessage = (props: UserMessagePropsType) => {
  const { colors } = useTheme();
  const isMultiLine = props.text.length > 80;

  return (
    <div
      className="!bg-white/50 ml-auto glass-card max-w-fit mt-8"
      style={{
        border: `0.25px solid ${colors.Grey_300}`,
        borderRadius: isMultiLine ? '100px 32px 4px 100px' : '100px 100px 4px 100px',
      }}
    >
      <Typography scale="Body" size="Medium" className="p-4 px-6">
        {props.text}
      </Typography>
    </div>
  );
};

export default UserMessage;

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { ShortcutItemPropsType } from './type';

const ShortcutItem = (props: ShortcutItemPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full" onClick={onClick}>
      <CustomImage src={props.icon} height={56} width={56} />
      <div className="mt-auto">
        <Typography
          scale="Lable"
          size="SmallProminet"
          color="Neutral_OnBackground"
          textAlign="center"
          className="text-center min-h-[40px]"
        >
          {props.title}
        </Typography>
      </div>
    </div>
  );
};

export default ShortcutItem;

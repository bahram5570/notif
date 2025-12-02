import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { ShortcutItemPropsType } from './type';

const ShortcutItem = (props: ShortcutItemPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2" onClick={onClick}>
      <CustomImage src={props.icon} height={56} width={56} />

      <Typography scale="Lable" size="Small" color="Neutral_OnBackground" textAlign="center">
        {props.description}
      </Typography>
    </div>
  );
};

export default ShortcutItem;

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { ShortcutItemPropsType } from './type';

const ShortcutItem = (props: ShortcutItemPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full" onClick={onClick}>
      <CustomImage src={props.icon} height={56} width={56} />
      <div className="mt-auto">
        <Dark_Typography
          fontSize="Lable_SmallProminet"
          className="text-impo_Neutral_OnBackground text-center min-h-[40px]"
        >
          {props.title}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default ShortcutItem;

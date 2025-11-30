import PartnerIcon from '@assets/icons/widgetPartner.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { ShortcutItemPropsType } from './type';

const ShortcutItem = (props: ShortcutItemPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };

  return (
    <div className="flex flex-row-reverse justify-between gap-[30px] items-baseline " onClick={onClick}>
      <div className="flex flex-col justify-center items-center gap-2">
        {/* <CustomImage src={props.icon} height={56} width={56} /> */}
        <PartnerIcon className="w-14 h-14" />
        <Typography scale="Lable" size="Small" color="Neutral_OnBackground" textAlign="center">
          {props.description}
        </Typography>
      </div>
    </div>
  );
};

export default ShortcutItem;

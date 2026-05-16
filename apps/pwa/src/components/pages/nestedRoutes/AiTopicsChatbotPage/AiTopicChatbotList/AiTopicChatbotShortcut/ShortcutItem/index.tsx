import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ShortcutItemPropsType } from './type';

const ShortcutItem = (props: ShortcutItemPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full" onClick={onClick}>
      <CustomImage_NEW src={props.icon} height={56} width={56} />
      <div className="mt-auto">
        <CustomTypography
          fontSize="Lable_SmallProminet"
          className="text-impo_Neutral_OnBackground text-center min-h-[40px]"
        >
          {props.title}
        </CustomTypography>
      </div>
    </div>
  );
};

export default ShortcutItem;

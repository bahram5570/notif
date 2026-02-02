import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import useTypographyMaker from '@hooks/useTypographyMaker';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import Link from 'next/link';

import { CustomLinkPropType } from './type';

const CustomLink = (props: CustomLinkPropType) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { link, style, lable, id, fontSize = 'Lable_Large' } = props;
  const { typographyFontStyles, result } = useTypographyMaker({
    children: lable,
    fontSize: fontSize,
    numbersMode: 'persian',
  });

  const isLoading = pageNavigationLoading === id;

  const clickHandler = () => {
    if (props.onClick) {
      props.onClick();
    }
    pageNavigationHandler({ id: id, showProgressBar: false });
  };

  return (
    <Link
      href={link}
      style={{
        ...style,
        ...typographyFontStyles,
      }}
      dir="rtl"
      className={` w-full h-10  rounded-full flex justify-center items-center text-impo_Primary_Primary bg-impo_Primary_PrimaryContainer ${props.className}`}
      onClick={clickHandler}
    >
      {isLoading && <CustomSpinner size={20} />}
      {!isLoading && result}
    </Link>
  );
};

export default CustomLink;

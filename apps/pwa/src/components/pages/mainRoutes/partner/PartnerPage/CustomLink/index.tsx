import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useTypographyMaker } from '@repo/core/hooks/useTypographyMaker';

import { CustomLinkPropType } from './type';

const CustomLink = (props: CustomLinkPropType) => {
  const { link, style, lable, id, fontSize = 'Lable_Large' } = props;

  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { typographyFontStyles, result } = useTypographyMaker({
    children: lable,
    fontSize: fontSize,
    numbersMode: 'persian',
  });

  const clickHandler = () => {
    if (props.onClick) {
      props.onClick();
    }

    pageNavigationHandler({ id: id, showProgressBar: false, linkTo: link });
  };

  const isLoading = pageNavigationLoading === id;

  return (
    <div
      dir="rtl"
      onClick={clickHandler}
      style={{ ...style, ...typographyFontStyles }}
      className={` w-full h-10  rounded-full flex justify-center items-center text-impo_Primary_Primary bg-impo_Primary_PrimaryContainer ${props.className}`}
    >
      {isLoading && <CustomSpinner size={20} />}
      {!isLoading && result}
    </div>
  );
};

export default CustomLink;

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useTypographyMaker } from '../../../hooks/useTypographyMaker';
import { CustomSpinner } from '../../ui/CustomSpinner';
import { CustomLinkPropType } from './type';

export const PartnerCustomLink = (props: CustomLinkPropType) => {
  const { link, style, lable, id, fontSize = 'Lable_Large' } = props;

  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();
  const { typographyFontStyles, result } = useTypographyMaker({
    children: lable,
    fontSize: fontSize,
    numbersMode: 'persian',
  });

  const clickHandler = () => {
    if (props.onClick) {
      props.onClick();
    }
    pageNavigationHandler({ id: id, linkTo: link });
  };

  const isLoading = navigationLoadingId === id;

  return (
    <div
      dir="rtl"
      onClick={clickHandler}
      style={{ ...style, ...typographyFontStyles }}
      className={`w-full h-10 rounded-full flex justify-center items-center text-impo_Primary_Primary bg-impo_Primary_PrimaryContainer ${props.className}`}
    >
      {isLoading && <CustomSpinner size={20} />}
      {!isLoading && result}
    </div>
  );
};

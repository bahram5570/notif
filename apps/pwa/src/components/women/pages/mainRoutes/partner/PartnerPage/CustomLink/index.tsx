import Dark_Typography from '@components/ui/Dark_Typography';
import Spinner from '@components/ui/Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { CustomLinkPropType } from './type';

const CustomLink = (props: CustomLinkPropType) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { colors } = useTheme();

  const {
    link,
    style,
    lable,
    id,
    labelSize = 'Large',
    labelColor = 'PrimaryWoman_Primary',
    color = colors.PrimaryWoman_Primary,
    backgroundColor = colors.PrimaryWoman_PrimaryContainer,
  } = props;

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
      }}
      className="font-semibold w-full h-10 text-base rounded-full flex justify-center items-center text-impo_Primary_Primary bg-impo_Primary_PrimaryContainer"
      onClick={clickHandler}
    >
      {isLoading && <Spinner width={20} color="primary" />}
      {!isLoading && (
        <Dark_Typography fontSize="Lable_Large" className="text-impo_Primary_Primary">
          {lable}
        </Dark_Typography>
      )}
    </Link>
  );
};

export default CustomLink;

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { PartnerLinkNameEnum } from './enum';
import { LinkGeneratorPropsType } from './type';

const LinkGenerator = ({ Icon, link, name, MessageNumber }: LinkGeneratorPropsType) => {
  const { colors, typography } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'PartnerLink', showProgressBar: true, linkTo: link });
  };

  return (
    <div
      className="flex gap-2 items-center pl-3 py-[10px] pr-2 rounded-full mt-4"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
      onClick={onClick}
    >
      {MessageNumber && name === PartnerLinkNameEnum.Message && (
        <span
          className="w-5 h-5 rounded-full flex justify-center items-center"
          style={{
            ...typography.Lable.Small,
            backgroundColor: colors.PrimaryWoman_Primary,
            color: colors.Neutral_Background,
          }}
        >
          {MessageNumber}
        </span>
      )}

      <div className="mx-3 flex flex-row items-center gap-1">
        <Typography scale="Lable" size="Small">
          {name}
        </Typography>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default LinkGenerator;

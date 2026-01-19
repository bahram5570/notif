import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import Dark_Typography from '@components/ui/Dark_Typography';
import useOperatingSystem from '@hooks/useOperatingSystem';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { PartnerLinkNameEnum } from './enum';
import { LinkGeneratorPropsType } from './type';

const LinkGenerator = ({ Icon, link, name, MessageNumber }: LinkGeneratorPropsType) => {
  const { operatingSystem } = useOperatingSystem();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Lable_Small', operatingSystem });

  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'PartnerLink', showProgressBar: true, linkTo: link });
  };

  return (
    <div
      className="flex gap-2 items-center pl-3 py-[10px] pr-2 rounded-full mt-4 bg-impo_Surface_SurfaceVariant"
      onClick={onClick}
    >
      {MessageNumber && name === PartnerLinkNameEnum.Message && (
        <span
          className="w-5 h-5 rounded-full flex justify-center items-center bg-impo_Primary_Primary text-impo_Neutral_Background "
          style={{
            ...typographyFontStyles,
          }}
        >
          {MessageNumber}
        </span>
      )}

      <div className="mx-1 flex flex-row items-center gap-1">
        <Dark_Typography
          fontSize="Lable_Small"
          className="text-impo_Neutral_OnBackground"
          style={{ whiteSpace: 'pre-line' }}
        >
          {name}
        </Dark_Typography>

        <Icon className="w-5 h-5 stroke-impo_Neutral_OnBackground" />
      </div>
    </div>
  );
};

export default LinkGenerator;

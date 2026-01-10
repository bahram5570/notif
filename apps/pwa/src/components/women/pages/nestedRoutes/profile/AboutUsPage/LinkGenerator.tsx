import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { externalLink } from '@utils/navigation';

import Dark_Typography from '@components/ui/Dark_Typography';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { LinkGeneratorType } from './type';

const LinkGenerator = ({ Icon, link, name }: LinkGeneratorType) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Lable_Small', operatingSystem });
  return (
    <div
      style={{ ...typographyFontStyles }}
      className="flex flex-col items-center gap-2 w-14 cursor-pointer  text-impo_Surface_OnSurfaceVariant"
      onClick={() => externalLink(link, true)}
    >
      <Icon className="h-6 w-6 !stroke-impo_Surface_OutlineVariant" />
      <Dark_Typography fontSize="Lable_Small" className="text-impo_Surface_Outline">
        {name}
      </Dark_Typography>
    </div>
  );
};

export default LinkGenerator;

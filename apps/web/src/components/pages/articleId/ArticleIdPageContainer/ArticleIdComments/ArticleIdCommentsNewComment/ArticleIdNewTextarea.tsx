import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { ArticleIdNewTextareaTypes } from './types';

const ArticleIdNewTextarea = ({ message, messageHandler }: ArticleIdNewTextareaTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const typographyDetails = typographyMaker({ fontSize: 'Body_Medium', operatingSystem, isWeb: !breakPoint.laptop });

  return (
    <textarea
      rows={6}
      value={message}
      style={{ ...typographyDetails }}
      onChange={(e) => messageHandler(e.target.value)}
      className="w-full p-4 rounded-xl outline-impo_Primary_Primary bg-impo_Surface_SurfaceVariant text-impo_Neutral_OnBackground"
    />
  );
};

export default ArticleIdNewTextarea;

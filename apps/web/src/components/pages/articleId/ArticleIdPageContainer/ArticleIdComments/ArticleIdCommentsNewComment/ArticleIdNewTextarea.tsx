import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useSystem } from '@repo/core/hooks/useSystem';

import { ArticleIdNewTextareaTypes } from './types';

const ArticleIdNewTextarea = ({ message, messageHandler }: ArticleIdNewTextareaTypes) => {
  const { breakPoint, operatingSystem } = useSystem();

  const typographyDetails = typographyFontStylesMaker({
    operatingSystem,
    fontSize: 'Body_Medium',
    isLargeScreen: !breakPoint.laptop,
  });

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

import { memo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import CustomLink from '@components/ui/CustomLink';
import { useSystem } from '@repo/core/hooks/useSystem';

import { GeneratorScriptsTypes } from './types';

const GeneratorScripts = ({ body, title, url }: GeneratorScriptsTypes) => {
  const { breakPoint, operatingSystem } = useSystem();

  const bodyShorter = (input: string) => {
    const text = input.replace(/<[^>]+>/g, '');
    const length = 300;
    let result = text;

    if (text.trim().length > length) {
      result = text.slice(0, length);
    }

    return `${result} ...`;
  };

  const typographyDetails = typographyFontStylesMaker({
    fontSize: 'Body_Medium',
    operatingSystem,
    isLargeScreen: !breakPoint.laptop,
  });

  return (
    <div className="w-full h-full flex flex-col justify-center lg:justify-start">
      <CustomLink href={`/${url}`}>
        <CustomTypography fontSize="Title_Small" tagType="h2" className="!text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
      </CustomLink>

      <div
        style={{ ...typographyDetails }}
        dangerouslySetInnerHTML={{ __html: bodyShorter(body) }}
        className="pt-3 select-none hidden lg:block !text-impo_Surface_Outline"
      />
    </div>
  );
};

export default memo(GeneratorScripts);

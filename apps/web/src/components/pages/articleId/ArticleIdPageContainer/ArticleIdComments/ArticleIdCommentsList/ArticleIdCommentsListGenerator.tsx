import ArrowIcon from '@assets/icons/arrow3.svg';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { ArticleIdCommentsListGeneratorTypes } from './types';

const ArticleIdCommentsListGenerator = (props: ArticleIdCommentsListGeneratorTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const messageTypography = typographyFontStylesMaker({
    fontSize: 'Body_Large',
    operatingSystem,
    isWeb: !breakPoint.laptop,
  });
  const replyTypography = typographyFontStylesMaker({
    fontSize: 'Body_Large',
    operatingSystem,
    isWeb: !breakPoint.laptop,
  });

  const htmlConvertor = (txt: string) => {
    return txt
      .trim()
      .replaceAll(/(https?:\/\/[^\s"]+)/g, `<br /> <a class='text-impo_Primary_Primary' href='$1'>$1</a>`);
  };

  return (
    <div
      className={`
                  w-full 
                  flex 
                  flex-col 
                  gap-4 
                  py-5 
                  border-t-[1px]
                  ${props.isFirstIndex ? 'border-t-impo_Transparent' : 'border-t-impo_Neutral_Surface'}
                `}
    >
      <CustomTypography fontSize="Lable_Large" className="!text-impo_Surface_Outline">
        {props.name}
      </CustomTypography>

      <div
        style={{ ...messageTypography }}
        className="text-impo_Neutral_OnBackground"
        dangerouslySetInnerHTML={{ __html: htmlConvertor(props.message) }}
      />

      {props.reply.valid && props.reply.message.trim().length > 0 && (
        <div className="w-full px-4 md:px-6 py-5 rounded-2xl bg-impo_Surface_SurfaceVariant">
          <div className="w-fit flex items-center gap-4 pb-2">
            <CustomTypography fontSize="Lable_Large" className="!text-impo_Surface_OnSurfaceVariant">
              پشتیبانی ایمپو
            </CustomTypography>

            <ArrowIcon className="w-6 stroke-impo_Surface_Outline" />
          </div>

          <div
            style={{ ...replyTypography }}
            className="break-words text-impo_Neutral_OnBackground"
            dangerouslySetInnerHTML={{ __html: htmlConvertor(props.reply.message) }}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleIdCommentsListGenerator;

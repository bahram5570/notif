import ReactMarkdown from 'react-markdown';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@repo/core/utils/numbers';
import { colorFormatConverter } from '@repo/core/utils/scripts';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useSystem } from '@repo/core/hooks/useSystem';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';
import { ActionTypeEnum } from '@repo/core/providers/WidgetActionsProvider';

import WelcomingItems from './WelcomingItems';
import { WelcomingProps } from './type';

const Welcoming = ({ welcoming, showWelcomingHandler }: WelcomingProps) => {
  const { operatingSystem } = useSystem();
  const { actionHandler } = useWidgetActions();

  const fontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });

  const submitHandler = () => {
    if (welcoming.button.action.actionType === ActionTypeEnum.None) {
      showWelcomingHandler();
    } else {
      actionHandler(welcoming.button.action);
    }
  };
  const ShowItems = welcoming.items.length > 0;

  return (
    <div
      className="px-4 bg-[url('/assets/images/backlight.webp')]  min-h-[100dvh] dark:bg-[url('/assets/images/backdark.webp')] flex flex-col gap-3 "
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      {/* <div className="w-full aspect-square relative p-7">
        <CustomImage_NEW src={welcoming.image} fill />
      </div> */}
      <div className="flex justify-center items-center">
        <CustomImage_NEW src={welcoming.image} width={272} height={223} />
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <CustomTypography fontSize="Headline_Large" className="text-impo_Pink_600">
          {welcoming.title}
        </CustomTypography>
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1
                style={{
                  ...fontStyles,
                  direction: 'rtl',
                }}
                className="text-impo_Surface_InverseSurface"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                style={{
                  ...fontStyles,
                  direction: 'rtl',
                }}
                className="text-impo_Surface_InverseSurface text-center"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li
                style={{
                  ...fontStyles,
                  direction: 'rtl',
                  marginBottom: '6px',
                }}
                className="text-impo_Surface_InverseSurface"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                style={{
                  direction: 'rtl',
                  paddingRight: '20px',
                  listStyleType: 'disc',
                }}
                {...props}
              />
            ),
            strong: ({ node, ...props }) => <strong {...props} className="text-impo_Surface_InverseSurface" />,
          }}
        >
          {toPersianNumbers(welcoming.description)}
        </ReactMarkdown>
      </div>
      {ShowItems && <WelcomingItems items={welcoming.items} />}

      <div className="mt-auto py-4">
        <CustomButton
          fontSize="Title_Small"
          className=" h-12"
          onClick={submitHandler}
          style={{
            background: colorFormatConverter(welcoming.button.backgroundColor),
            color: colorFormatConverter(welcoming.button.foregroundColor),
          }}
        >
          {welcoming.button.text}
        </CustomButton>
      </div>
    </div>
  );
};

export default Welcoming;

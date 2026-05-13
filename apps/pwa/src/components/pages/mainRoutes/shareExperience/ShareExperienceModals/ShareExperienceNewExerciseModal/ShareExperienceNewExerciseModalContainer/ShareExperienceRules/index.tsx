import ReactMarkdown from 'react-markdown';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useSystem } from '@repo/core/hooks/useSystem';

import useSubmit from './__hooks__/useSubmit';
import { ShareExperienceRulesProps } from './type';

const ShareExperienceRules = ({ textRegualtion }: ShareExperienceRulesProps) => {
  const { operatingSystem } = useSystem();
  const { isCheckRule, isLoading, submitHandler, checkRuleHandler } = useSubmit();

  const fontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });
  return (
    <div className="px-1 flex flex-col  gap-2 pb-6">
      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground text-center w-full">
        کنار هم در فضای اشتراک تجربه
      </CustomTypography>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              style={{
                ...fontStyles,
                direction: 'rtl',
              }}
              className=" text-impo_Neutral_OnBackground"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              style={{
                ...fontStyles,
                direction: 'rtl',
              }}
              className="text-impo_Neutral_OnBackground"
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
              className="text-impo_Neutral_OnBackground"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              style={{
                direction: 'rtl', // make list RTL
                paddingRight: '20px', // add spacing for bullet
                listStyleType: 'disc', // normal bullets
              }}
              {...props}
            />
          ),
          strong: ({ node, ...props }) => <strong {...props} className="text-impo_Neutral_OnBackground" />,
          a: ({ node, ...props }) => (
            <a
              style={{
                ...fontStyles,
                direction: 'rtl',
                marginBottom: '6px',
              }}
              className="text-impo_Primary_Primary underline"
              {...props}
            />
          ),
        }}
      >
        {toPersianNumbers(textRegualtion)}
      </ReactMarkdown>
      <label className="flex items-center flex-row-reverse gap-2 my-4 cursor-pointer">
        <input type="checkbox" className="sr-only" checked={isCheckRule} onChange={checkRuleHandler} />

        <span
          className={`w-6 h-6 border rounded-lg flex items-center justify-center transition-colors
      ${
        isCheckRule
          ? 'bg-impo_Primary_Primary border-impo_Primary_Primary'
          : 'bg-transparent border-impo_Surface_OutlineVariant'
      }`}
        >
          <CustomTypography
            className={` text-impo_White w-5 h-5 flex justify-center items-center pt-1 leading-none ${isCheckRule ? 'block' : 'hidden'}`}
            fontSize="Title_Medium"
          >
            ✓
          </CustomTypography>
        </span>

        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          با قوانین و مقررات ایمپو موافقم
        </CustomTypography>
      </label>
      <CustomButton onClick={submitHandler} className=" rounded-xl " isLoading={isLoading} isDisable={!isCheckRule}>
        <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Primary_OnPrimary">
          ثبت تجربه
        </CustomTypography>
      </CustomButton>
    </div>
  );
};

export default ShareExperienceRules;

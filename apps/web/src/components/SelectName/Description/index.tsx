import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

export const TitleGenerator = (props: { children: string; tagType: 'h2' | 'h3' }) => {
  return (
    <CustomTypography
      tagType={props.tagType}
      fontSize="Title_Small"
      className="mt-3 mb-2 !text-impo_Neutral_OnBackground"
    >
      {props.children}
    </CustomTypography>
  );
};

export const TextGenerator = (props: { children: string; className?: string }) => {
  return (
    <CustomTypography className={`inline !text-impo_Neutral_OnBackground ${props.className}`}>
      {props.children}
    </CustomTypography>
  );
};

export const ItemGenerator = (props: { children: string }) => {
  return (
    <div className="flex items-start gap-4 mr-6 pb-1">
      <span className="w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2 rounded-full bg-impo_Neutral_OnBackground" />

      <CustomTypography className="inline !text-impo_Neutral_OnBackground">{props.children}</CustomTypography>
    </div>
  );
};

export const LinkGenerator = (props: { children: string; href: string }) => {
  return (
    <CustomLink href={props.href} className="inline">
      <CustomTypography className={`px-1 inline !text-impo_Primary_OnPrimary`}>{props.children}</CustomTypography>
    </CustomLink>
  );
};

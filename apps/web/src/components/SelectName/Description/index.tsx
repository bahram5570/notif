import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

export const TitleGenerator = (props: { children: string; tagType: 'h2' | 'h3' }) => {
  return (
    <CustomTypography tagType={props.tagType} fontSize="Title_Small" className="mt-3 mb-2">
      {props.children}
    </CustomTypography>
  );
};

export const TextGenerator = (props: { children: string; className?: string }) => {
  return <CustomTypography className={`inline ${props.className}`}>{props.children}</CustomTypography>;
};

export const ItemGenerator = (props: { children: string }) => {
  return (
    <div className="flex items-start gap-4 mr-6 pb-1">
      <span
        style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
        className="w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2 rounded-full"
      />
      <CustomTypography className="inline">{props.children}</CustomTypography>
    </div>
  );
};

export const LinkGenerator = (props: { children: string; href: string }) => {
  return (
    <CustomLink href={props.href} className="inline">
      <CustomTypography className="px-1 inline" color={'Primary_Primary'}>
        {props.children}
      </CustomTypography>
    </CustomLink>
  );
};

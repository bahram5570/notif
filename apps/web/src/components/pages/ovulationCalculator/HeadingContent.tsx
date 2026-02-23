import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const HeadingContent = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div>
      <CustomTypography
        tagType="h1"
        fontSize="Title_Medium"
        className="text-right mb-4 !text-impo_Neutral_OnBackground"
      >
        {title}
      </CustomTypography>

      <CustomTypography tagType="p" fontSize="Body_Medium" className="text-right mb-4 !text-impo_Neutral_OnBackground">
        {subTitle}
      </CustomTypography>
    </div>
  );
};

export default HeadingContent;

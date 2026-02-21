import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

import { HEADER_SINGLE_LINK } from '../../types';

const SingleLinkGenerator = ({ linkTo, title }: HEADER_SINGLE_LINK) => {
  return (
    <CustomLink href={linkTo} className="hover:opacity-100" id={linkTo === '/men' ? 'impomen_header' : ''}>
      <CustomTypography
        fontSize="Body_Medium"
        className="!text-impo_Neutral_OnBackground hover:!text-impo_Primary_Primary duration-200"
      >
        {title}
      </CustomTypography>
    </CustomLink>
  );
};

export default SingleLinkGenerator;

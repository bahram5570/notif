import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

import { SingleLinkGeneratorTypes } from './types';

const SingleLinkGenerator = ({ linkTo, title, closeHandler }: SingleLinkGeneratorTypes) => {
  return (
    <CustomLink
      href={linkTo}
      onClick={closeHandler}
      id={linkTo === '/men' ? 'impomen_header' : ''}
      className="flex items-center h-14 hover:!opacity-100"
    >
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
        {title}
      </CustomTypography>
    </CustomLink>
  );
};

export default SingleLinkGenerator;

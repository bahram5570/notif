import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { HEADER_SINGLE_LINK } from '../../types';

const SingleLinkGenerator = ({ linkTo, title }: HEADER_SINGLE_LINK) => {
  return (
    <CustomLink href={linkTo} className="hover:opacity-100" id={linkTo === '/men' ? 'impomen_header' : ''}>
      <CustomTypography fontSize="Body_Medium" className="hover:!text-[#F24F7A] duration-200">
        {title}
      </CustomTypography>
    </CustomLink>
  );
};

export default SingleLinkGenerator;

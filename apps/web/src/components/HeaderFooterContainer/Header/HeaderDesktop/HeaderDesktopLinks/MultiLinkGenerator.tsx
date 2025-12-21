import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { HEADER_MULTI_LINK } from '../../types';
import MultiLinkContainer from './MultiLinkContainer';

const MultiLinkGenerator = ({ linkTo, title }: HEADER_MULTI_LINK) => {
  return (
    <MultiLinkContainer title={title}>
      {linkTo.map((item, index) => (
        <div className="w-full h-9 flex items-center" key={index}>
          <CustomLink href={item.linkTo} className="!w-full hover:opacity-100">
            <CustomTypography
              fontSize="Body_Medium"
              className="
                          !text-impo_Neutral_OnBackground 
                          hover:!text-impo_Primary_Primary 
                          hover:bg-impo_Surface_SurfaceVariant 
                          whitespace-nowrap 
                          px-2 
                          py-2 
                          rounded-md 
                          duration-200
                        "
            >
              {item.title}
            </CustomTypography>
          </CustomLink>
        </div>
      ))}
    </MultiLinkContainer>
  );
};

export default MultiLinkGenerator;

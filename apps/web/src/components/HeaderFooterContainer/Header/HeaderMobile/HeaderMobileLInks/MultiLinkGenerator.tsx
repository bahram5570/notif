import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import MultiLinkContainer from './MultiLinkContainer';
import { MultiLinkGeneratorTypes } from './types';

const MultiLinkGenerator = ({ linkTo, title, isSelected, closeHandler, selectHandler }: MultiLinkGeneratorTypes) => {
  return (
    <MultiLinkContainer title={title} isSelected={isSelected} selectHandler={selectHandler}>
      {linkTo.map((item, index) => (
        <CustomLink href={item.linkTo} className="hover:!opacity-100" onClick={closeHandler} key={index}>
          <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
            {item.title}
          </CustomTypography>
        </CustomLink>
      ))}
    </MultiLinkContainer>
  );
};

export default MultiLinkGenerator;

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import { Pagination, PaginationItem } from '@mui/material';

import useOperatingSystem from '@hooks/useOperatingSystem';

import { CustomPaginationTypes } from './types';

const CustomPagination = ({
  fontSize = 'Body_Small',
  size = 'medium',
  pageHandler,
  totalPage,
  className,
  style,
  page,
}: CustomPaginationTypes) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyDetails = typographyFontStylesMaker({ fontSize, operatingSystem, isWeb: true });

  const selectHandler = (_: unknown, p: number) => {
    pageHandler(p);
  };

  return (
    <div className={`${className}`} style={style}>
      <Pagination
        size={size}
        page={page}
        count={totalPage}
        showLastButton={true}
        showFirstButton={true}
        onChange={selectHandler}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            style={{ ...typographyDetails }}
            page={toPersianNumbers(item.page || 1)}
            className="!text-impo_Neutral_OnBackground"
          />
        )}
      />
    </div>
  );
};

export default CustomPagination;

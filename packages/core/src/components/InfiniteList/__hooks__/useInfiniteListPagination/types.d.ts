import React from 'react';

import { InfiniteListPaginationTypes } from '../../types';

export interface UseInfiniteListPaginationTypes {
  pagination?: InfiniteListPaginationTypes;
  parentRef: React.RefObject<HTMLDivElement>;
}

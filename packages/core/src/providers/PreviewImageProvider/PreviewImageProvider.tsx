'use client';

import { PREVIEW_IMAGE } from '../../constants/modal.constants';
import { useQueryParamsHandler } from '../../hooks/useQueryParamsHandler';
import PreviewImageContainer from './PreviewImageContainer';
import { PreviewImageTypes } from './types';

export const PreviewImageProvider = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const previewImage = getQueryParams(PREVIEW_IMAGE);
  const data = previewImage === null ? null : (JSON.parse(previewImage) as PreviewImageTypes);

  return <>{data && <PreviewImageContainer shape={data.shape} src={data.src} />}</>;
};

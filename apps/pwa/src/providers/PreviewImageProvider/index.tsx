'use client';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import PreviewImageContainer from './PreviewImageContainer';
import { PreviewImageTypes } from './types';

const PreviewImageProvider = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const previewImage = getQueryParams(MODALS.PREVIEW_IMAGE);
  const data = previewImage === null ? null : (JSON.parse(previewImage) as PreviewImageTypes);

  return <>{data && <PreviewImageContainer shape={data.shape} src={data.src} />}</>;
};

export default PreviewImageProvider;

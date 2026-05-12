import { PreviewImageTypes } from '../../../../../providers/PreviewImageProvider/types';

export type PreviewImageHandlerTypes = (v: { hasPreviewImage?: boolean } & PreviewImageShapeTypes) => void;

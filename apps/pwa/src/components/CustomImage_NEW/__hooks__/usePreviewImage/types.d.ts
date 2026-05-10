// !
import { PreviewImageTypes } from '../../../../../../../packages/core/dist/providers/PreviewImageProvider/types';

export type PreviewImageHandlerTypes = (v: { hasPreviewImage?: boolean } & PreviewImageTypes) => void;

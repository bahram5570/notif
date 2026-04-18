import { ChatResponseTypes } from '@repo/core/components/clinic';

export interface RatedMessageBannerProps extends Pick<ChatResponseTypes, 'rate' | 'description'> {}

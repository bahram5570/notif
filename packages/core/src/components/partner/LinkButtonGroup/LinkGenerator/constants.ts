import BookOpenTextIcon from '@assets/shared/icons/BookOpenText.svg';
import ClockCounterClockwiseIcon from '@assets/shared/icons/ClockCounterClockwise.svg';
import Message from '@assets/shared/icons/message.svg';

import { PartnerLinkNameEnum } from './enum';
import { PartnerLinklistType } from './type';

export const PARTNER_LINK_LIST: PartnerLinklistType[] = [
  { Icon: Message, link: '/protected/partnerMessage', name: PartnerLinkNameEnum.Message },
  { Icon: BookOpenTextIcon, link: '/protected/memory', name: PartnerLinkNameEnum.Memory },
  { Icon: ClockCounterClockwiseIcon, link: '/protected/challengeHistory', name: PartnerLinkNameEnum.History },
];

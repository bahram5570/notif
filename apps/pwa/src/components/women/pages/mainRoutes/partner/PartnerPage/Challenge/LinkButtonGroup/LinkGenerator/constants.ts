import BookOpenTextIcon from '@assets/icons/BookOpenText.svg';
import ClockCounterClockwiseIcon from '@assets/icons/ClockCounterClockwise.svg';
import Message from '@assets/icons/message.svg';

import { PartnerLinkNameEnum } from './enum';
import { PartnerLinklistType } from './type';

export const PARTNER_LINK_LIST: PartnerLinklistType[] = [
  { Icon: Message, link: '/protected/partnerMessage', name: PartnerLinkNameEnum.Message },
  { Icon: BookOpenTextIcon, link: '/protected/memory', name: PartnerLinkNameEnum.Memory },
  { Icon: ClockCounterClockwiseIcon, link: '/protected/ChallengeHistory', name: PartnerLinkNameEnum.History },
];

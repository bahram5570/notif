import { WelcomingProps } from '../type';

type WelcomType = Pick<WelcomingProps, 'welcoming'>['welcoming'];
type ItemType = Pick<WelcomType, 'items'>;
export type WelcomingItemsProps = ItemType;

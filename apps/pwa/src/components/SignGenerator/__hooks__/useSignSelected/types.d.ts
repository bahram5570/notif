import { SignGeneratorProps } from '@components/SignGenerator/types';

type ItemType = Pick<SignGeneratorProps, 'category' | 'initialIsSelected' | 'onSelect' | 'selectedDate' | 'sign'>;

export interface useSignSelectedProps extends ItemType {}

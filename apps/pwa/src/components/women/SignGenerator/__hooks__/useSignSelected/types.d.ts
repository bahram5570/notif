import { SignGeneratorProps } from '@components/women/SignGenerator/types';

type ItemType = Pick<SignGeneratorProps, 'category' | 'initialIsSelected' | 'onSelect' | 'selectedDate' | 'sign'>;

export interface useSignSelectedProps extends ItemType {}

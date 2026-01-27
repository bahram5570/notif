import { KitTestModuleTypeEnums } from '@components/KitTests/enum';

export type DeleteModalDataTypes = { moduleType: KitTestModuleTypeEnums; index: number; createTime: string };

export type OpenDeleteModalHandlerTypes = (v: DeleteModalDataTypes) => void;

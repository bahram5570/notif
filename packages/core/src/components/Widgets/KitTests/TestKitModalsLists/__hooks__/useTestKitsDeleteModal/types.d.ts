import { KitTestModuleTypeEnums } from '../../../../../../providers/WidgetActionsProvider';

export type DeleteModalDataTypes = { moduleType: KitTestModuleTypeEnums; index: number; createTime: string };

export type OpenDeleteModalHandlerTypes = (v: DeleteModalDataTypes) => void;

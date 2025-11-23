export type SingSelectedItem = { category: number; sign: number };

export type SingSelectedListType = SingSelectedItem[];

export type UpdateSingSelectedListType = (sign: SingSelectedItem) => void;

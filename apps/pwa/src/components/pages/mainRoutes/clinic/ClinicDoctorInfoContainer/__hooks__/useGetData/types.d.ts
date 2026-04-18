import { SpecialistCommentsProps } from '../../../ClinicDoctorModal/types';

export interface UseGetDataProps {
  clinicInfo: string;
  drId: string;
}

export type CommentsResponseTypes = {
  isValid: boolean;
  comment: {
    totalCount: number;
    pageSize: number;
    pageMax: number;
    pageNo: number;
    list: {
      descritpion: string;
      positives: string[];
      negatives: string[];
      userName: string;
      rate: number;
      time: string;
    }[];
  };
};

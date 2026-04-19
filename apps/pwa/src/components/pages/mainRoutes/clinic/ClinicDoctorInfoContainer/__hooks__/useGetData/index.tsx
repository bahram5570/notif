import { useEffect, useRef, useState } from 'react';

import { ClinicInfoResponseTypes, CommentsResponseTypes } from '@repo/core/components/clinic';
import { isDevelopeMode } from '@repo/core/utils/system';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { CommentsDataTypes, CommentsPaginationTypes, UseGetDataProps } from './types';

const useGetData = ({ clinicInfo, drId, isRedirected }: UseGetDataProps) => {
  // # clinic info

  const isFirstTime = useRef(isDevelopeMode());
  const [clinicInfoData, setClinicInfoData] = useState<undefined | ClinicInfoResponseTypes>(undefined);

  const { callApi: getClinicInfo, isLoading: doctorLoading } = usePwaApi<ClinicInfoResponseTypes>({
    method: 'POST',
    api: 'advice/ticketInfo',
    onSuccess: (v) => setClinicInfoData(v),
  });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const payload = isRedirected ? { type: clinicInfo, redirectFrom: 'clinicWidget' } : { type: clinicInfo };
    getClinicInfo(payload);
  }, []);

  const doctorData = clinicInfoData?.info.dr.find((item) => item.id === drId);

  // # comments

  const [commentsData, setCommentsData] = useState<undefined | CommentsDataTypes>(undefined);
  const [commentsPagination, setCommentsPagination] = useState<CommentsPaginationTypes>({
    pageNo: 0,
    pageSize: 0,
    totalCount: 0,
  });

  const commentsSuccessHandler = ({ isValid, comment }: CommentsResponseTypes) => {
    if (!isValid) {
      return;
    }

    if (commentsData === undefined) {
      setCommentsData(comment.list);
    } else {
      setCommentsData([...commentsData, ...comment.list]);
    }

    const newPageNo = commentsPagination.pageNo + 1;

    setCommentsPagination({ pageNo: newPageNo, pageSize: comment.pageSize, totalCount: comment.totalCount });
  };

  const commentsApi = isRedirected
    ? `advice/drComments/${drId}/${commentsPagination.pageNo}?redirectFrom=clinicWidget`
    : `advice/drComments/${drId}/${commentsPagination.pageNo}`;

  const { callApi: getComments, isLoading: commentsLoading } = usePwaApi<CommentsResponseTypes>({
    method: 'GET',
    api: commentsApi,
    queryKey: ['comments'],
    onSuccess: commentsSuccessHandler,
  });

  const isPageLoading = doctorLoading || Boolean(commentsLoading && commentsData === undefined);
  const isCommentsLoading = Boolean(commentsData && commentsLoading);

  return { getComments, isPageLoading, isCommentsLoading, doctorData, commentsData, commentsPagination };
};

export default useGetData;

import { useRouter } from 'next/navigation';

import { usePwaApi } from '../../../../../../hooks/usePwaApi';

export const useDelete = () => {
  const router = useRouter();

  const successHandler = () => {
    router.push('/protected/calendar');
  };
  const { callApi, isLoading } = usePwaApi({ api: 'date/note', method: 'DELETE', onSuccess: successHandler });

  const deleteHandler = ({ noteId }: { noteId: string | null }) => {
    const payload = { noteId };
    callApi(payload);
  };
  return { deleteHandler, isLoading };
};

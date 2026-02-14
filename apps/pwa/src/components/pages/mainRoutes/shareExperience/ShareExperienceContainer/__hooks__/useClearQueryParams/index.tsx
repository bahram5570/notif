import { useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useClearQueryParams = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = typeof window === 'undefined' ? undefined : useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    const params = new URLSearchParams(searchParams.toString());

    params.forEach((_, key) => params.delete(key));

    router.replace(pathname);
  }, []);
};

export default useClearQueryParams;

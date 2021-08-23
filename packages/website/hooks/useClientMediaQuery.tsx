import { useState, useEffect } from 'react';
import { useMediaQuery, MediaQueryAllQueryable } from 'react-responsive';

export const useClientMediaQuery = (
  settings: Partial<MediaQueryAllQueryable & { query?: string }>,
  ssrValue?: boolean
) => {
  const [isClient, setIsClient] = useState(false);

  const isTrue = useMediaQuery(settings);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return isClient ? isTrue : ssrValue ?? true;
};

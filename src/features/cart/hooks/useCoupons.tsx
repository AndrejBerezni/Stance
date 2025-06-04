import { useState } from 'react';

import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

export default function useCoupons() {
  const coupons = useAppSelector(
    (state: RootState) => state.cart.summary.coupons
  );
  const [isFormVisible, setIsFormVisible] = useState<boolean>(
    coupons.length > 0
  );

  const showForm = () => setIsFormVisible(true);

  return { isFormVisible, showForm };
}

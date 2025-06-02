import { useState } from 'react';

import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

export default function useCoupons() {
  const coupons = useAppSelector(
    (state: RootState) => state.cart.summary.coupons
  );
  const [isInputVisible, setIsInputVisible] = useState<boolean>(
    coupons.length > 0
  );

  const showInput = () => setIsInputVisible(true);

  return { isInputVisible, showInput };
}

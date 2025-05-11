import { Suspense } from 'react';

import HeroSection from '@/components/common/hero-section';
import CollectionsGrid from '@/features/product/components/collections-grid';
import CollectionsGridSkeleton from '@/features/product/components/collections-grid/collections-grid-skeleton';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<CollectionsGridSkeleton />}>
        <CollectionsGrid />
      </Suspense>
    </>
  );
}

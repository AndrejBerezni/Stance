import { HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={`${className} bg-disabled animate-pulse rounded-xl`}></div>
  );
}

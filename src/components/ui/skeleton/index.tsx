import { HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={`${className} animate-pulse bg-disabled rounded-xl`}></div>
  );
}

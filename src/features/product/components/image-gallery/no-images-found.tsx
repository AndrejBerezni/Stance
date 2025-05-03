import { Shirt } from 'lucide-react';

export default function NoImagesFound() {
  return (
    <div className="relative bg-disabled flex items-center justify-center text-background md:h-[600px] lg:h-[800px] overflow-hidden h-[400px] w-full rounded-xl mb-6">
      <Shirt size={256} />
    </div>
  );
}

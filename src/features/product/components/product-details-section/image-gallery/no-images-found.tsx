import { Shirt } from 'lucide-react';

export default function NoImagesFound() {
  return (
    <div className="bg-disabled text-background relative mb-6 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl md:h-[600px] lg:h-[800px] lg:max-w-1/2 lg:min-w-1/2">
      <Shirt size={256} />
    </div>
  );
}

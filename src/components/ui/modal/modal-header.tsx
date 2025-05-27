import { X } from 'lucide-react';
interface ModalHeaderProps {
  title?: string;
  handleClose: () => void;
}

export default function ModalHeader({ title, handleClose }: ModalHeaderProps) {
  return (
    <div className="bg-background z-40 flex py-6">
      {title && <h1 className="text-xl font-semibold">{title}</h1>}
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close modal"
        className="text-ink-600 hover:text-ink-900 ml-auto hover:cursor-pointer"
      >
        <X />
      </button>
    </div>
  );
}

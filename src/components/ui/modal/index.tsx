import ModalImplementation, {
  ModalImplementationProps,
} from './modal-implementation';

interface ModalProps extends ModalImplementationProps {
  open: boolean;
}

export default function Modal({ open, ...props }: ModalProps) {
  if (!open) return null;
  return <ModalImplementation {...props} />;
}

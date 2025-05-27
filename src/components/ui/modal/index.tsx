import ModalImplementation, {
  ModalImplementationProps,
} from './modal-implementation';

interface ModalProps extends ModalImplementationProps {
  open: boolean;
}

export default function Modal({ open, ...props }: ModalProps) {
  /* Since we are using hooks in modal,
  and we have condition to return null if modal is closed,
  and hooks can't be called inside conditional block,
  in order not to call them when they won't be used
  we created ModalImplementation component to place modal logic */
  if (!open) return null;

  return <ModalImplementation {...props} />;
}

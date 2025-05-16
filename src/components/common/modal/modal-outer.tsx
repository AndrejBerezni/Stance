interface ModalOuterProps {
  closeModal: () => void;
  show: boolean;
}

export default function ModalOuter({ closeModal, show }: ModalOuterProps) {
  if (show)
    return (
      <div
        className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/50"
        onClick={closeModal}
      ></div>
    );
}

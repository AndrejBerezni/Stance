interface IModalOuterProps {
  closeModal: () => void;
  show: boolean;
}

export default function ModalOuter({ closeModal, show }: IModalOuterProps) {
  if (show)
    return (
      <div
        className="z-10 fixed w-screen h-screen top-0 left-0 bg-black/50"
        onClick={closeModal}
      ></div>
    );
}

interface SidebarOuterProps {
  closeModal: () => void;
  show: boolean;
}

export default function SidebarOuter({ closeModal, show }: SidebarOuterProps) {
  if (show)
    return (
      <div
        className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/50"
        onClick={closeModal}
      ></div>
    );
}

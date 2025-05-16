import ReactDOM from 'react-dom';

export default function Portal({
  children,
  parent = document.body,
}: {
  children: React.ReactNode;
  parent?: HTMLElement;
}) {
  return ReactDOM.createPortal(children, parent);
}

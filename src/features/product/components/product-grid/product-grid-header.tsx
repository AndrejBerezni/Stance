interface ProductGridHeaderProps {
  title?: string;
  headerAction?: React.ReactNode;
}

export default function ProductGridHeader({
  title,
  headerAction,
}: ProductGridHeaderProps) {
  return (
    <div className="flex mb-8 items-center justify-between">
      {title && <h2 className="font-semibold text-2xl md:text-3xl">{title}</h2>}
      {headerAction}
    </div>
  );
}

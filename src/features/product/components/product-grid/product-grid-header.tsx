interface ProductGridHeaderProps {
  title?: string;
  headerAction?: React.ReactNode;
}

export default function ProductGridHeader({
  title,
  headerAction,
}: ProductGridHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      {title && <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>}
      {headerAction}
    </div>
  );
}

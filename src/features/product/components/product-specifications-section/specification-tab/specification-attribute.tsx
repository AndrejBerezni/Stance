import { SpecificationAttribute } from '.';

export default function SpecificationAttributeItem({
  attr,
}: {
  attr: SpecificationAttribute;
}) {
  return (
    <li className="flex gap-4 items-center">
      <span
        aria-hidden={true}
        className="text-primary h-12 w-12 flex items-center justify-center rounded-full aspect-square shadow-[0px_0px_4px_var(--muted)]"
      >
        {attr.icon}
      </span>
      <span className="text-secondary-foreground text-lg">{attr.name}</span>
    </li>
  );
}

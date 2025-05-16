import IconContainer from '@/components/ui/icon-container';

import { SpecificationAttribute } from '.';

export default function SpecificationAttributeItem({
  attr,
}: {
  attr: SpecificationAttribute;
}) {
  return (
    <li className="flex items-center gap-4">
      <IconContainer>{attr.icon}</IconContainer>
      <span className="text-ink-600 text-lg">{attr.name}</span>
    </li>
  );
}

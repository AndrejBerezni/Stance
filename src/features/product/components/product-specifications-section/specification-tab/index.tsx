import SpecificationAttributeItem from './specification-attribute';
import SpecificationTabImage from './specification-tab-image';

export interface SpecificationAttribute {
  name: string;
  icon: React.ReactNode;
}
export interface Specification {
  id: string;
  title: string;
  description: string;
  img: string;
  items: SpecificationAttribute[];
}

export default function SpecificationTab({ spec }: { spec: Specification }) {
  return (
    <article className="flex flex-col gap-8 lg:flex-row">
      <SpecificationTabImage src={spec.img} alt={spec.title} />
      <div>
        <h3 className="mb-2 text-2xl font-medium">{spec.title}</h3>
        <p className="text-ink-600 mb-8 text-lg">{spec.description}</p>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {spec.items.map((item) => (
            <SpecificationAttributeItem key={item.name} attr={item} />
          ))}
        </ul>
      </div>
    </article>
  );
}

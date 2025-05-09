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
    <article className="flex flex-col lg:flex-row gap-8">
      <SpecificationTabImage src={spec.img} alt={spec.title} />
      <div>
        <h3 className="font-medium text-2xl mb-2">{spec.title}</h3>
        <p className="text-ink-600 mb-8 text-lg">{spec.description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spec.items.map((item) => (
            <SpecificationAttributeItem key={item.name} attr={item} />
          ))}
        </ul>
      </div>
    </article>
  );
}

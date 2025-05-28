import AddToCart from './add-to-cart';
import ImageGallery from './image-gallery';
import ProductAttributes from './product-attributes';
import ProductInfo from './product-info';
import ProductPrice from './product-price';
import ProductRating from './product-rating';
import { ExtendedProduct } from '../../types';

interface ProductDetailsSectionProps {
  product: ExtendedProduct;
  color: string;
}

export default async function ProductDetailsSection({
  product,
  color,
}: ProductDetailsSectionProps) {
  const {
    product_id: productId,
    name,
    description,
    sizing_convention,
    available_colors,
    inventory,
    number_of_reviews,
    rating,
    images,
    product_info,
  } = product;

  return (
    <section className="section-wrapper flex flex-col gap-12 lg:flex-row lg:gap-8">
      <ImageGallery productImages={images} color={color} />
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="mb-5 text-3xl font-semibold md:text-5xl">{name}</h1>

          <ProductPrice
            inventory={inventory}
            sizingConvention={sizing_convention}
          />
          <ProductRating
            productId={productId}
            numberOfReviews={number_of_reviews}
            rating={rating}
          />
        </div>

        <p className="text-ink-600">{description}</p>

        <ProductAttributes
          sizing_convention={sizing_convention}
          available_colors={available_colors}
          inventory={inventory}
          currentColor={color}
        />

        <AddToCart
          inventory={inventory}
          itemDetails={{
            name,
            description,
            image_url: images.filter((image) => image.color === color)[0]
              .image_url,
          }}
          sizingConvention={sizing_convention}
        />
        <ProductInfo productId={productId} info={product_info} />
      </div>
    </section>
  );
}

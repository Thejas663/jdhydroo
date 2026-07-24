import { useParams, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import PageBanner from '../components/ui/PageBanner';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;
  return (
    <>
      <PageBanner title={product.title} />
      <div className="p-8">{product.title} — Phase 5</div>
    </>
  );
}

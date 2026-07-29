import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found – Jaladhara Hydro Solutions</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <p className="font-display font-bold text-8xl text-teal-text mb-4" aria-hidden>
          404
        </p>
        <h1 className="font-display font-bold text-2xl text-penstock mb-4">
          Page Not Found
        </h1>
        <p className="text-steel mb-10 max-w-md">
          The page you're looking for doesn't exist or has been moved. Try our products page or contact us.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/">
            <Button variant="solid">Go to Home</Button>
          </Link>
          <Link to="/products">
            <Button variant="outline">View Products</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

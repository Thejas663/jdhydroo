import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center p-8">
      <h1 className="font-display font-bold text-6xl text-primary">404</h1>
      <p className="text-body text-lg">Page not found.</p>
      <Link to="/" className="text-primary font-semibold hover:underline">
        &larr; Back to home
      </Link>
    </div>
  );
}

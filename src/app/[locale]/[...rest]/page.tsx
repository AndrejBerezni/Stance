import { notFound } from 'next/navigation';

// This is handled as advised in next-intl docs:
// https://next-intl.dev/docs/environments/error-files#catching-unknown-routes

export default function CatchAllPage() {
  notFound();
}

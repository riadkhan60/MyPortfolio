export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "#1D1B19" }}
    >
      <h1 className="mb-4 text-7xl font-extrabold text-white">404</h1>
      <h2 className="mb-2 text-3xl font-semibold text-white">Page Not Found</h2>
      <p className="mb-6 text-lg text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-2 inline-block rounded bg-white px-6 py-2 font-medium text-black transition hover:bg-gray-200"
      >
        Go Home
      </a>
    </div>
  );
}
